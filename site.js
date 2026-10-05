// =============================================
// SMOOTH PAGE NAVIGATION
// Keeps the music player alive while page content changes.
// =============================================

(function () {
    let navigating = false;

    function isLocalHtmlLink(link) {
        if (!link || !link.href) return false;
        if (link.target && link.target !== '_self') return false;
        if (link.hasAttribute('download')) return false;

        const url = new URL(link.href, window.location.href);
        if (url.origin !== window.location.origin) return false;

        return /\.html?$/i.test(url.pathname) || url.pathname.endsWith('/');
    }

    function cleanPath(url) {
        return url.pathname.split('/').pop() || 'index.html';
    }

    async function loadPage(url, pushState) {
        if (navigating) return;
        navigating = true;

        try {
            const response = await fetch(url.href, { cache: 'no-store' });
            if (!response.ok) throw new Error('Page could not be loaded');

            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            // Save all scripts before replacing the body.
            const scripts = Array.from(doc.body.querySelectorAll('script'));

            // Remove music/site scripts and the music container from fetched content.
            doc.body.querySelectorAll('#websiteMusic').forEach(el => el.remove());
            scripts.forEach(script => {
                const src = script.getAttribute('src') || '';
                if (/music\.js$/i.test(src) || /site\.js$/i.test(src)) {
                    script.remove();
                }
            });

            // Keep the original persistent music player IN the DOM.
            // We never remove/recreate this element, so YouTube keeps playing.
            const persistentMusic = document.getElementById('websiteMusic');

            // Build the new page content without touching the music element.
            const fragment = document.createDocumentFragment();
            Array.from(doc.body.childNodes).forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE &&
                    node.id === 'websiteMusic') {
                    return;
                }
                fragment.appendChild(document.importNode(node, true));
            });

            Array.from(document.body.childNodes).forEach(node => {
                if (node !== persistentMusic) {
                    node.remove();
                }
            });

            if (persistentMusic) {
                document.body.insertBefore(fragment, persistentMusic);
            } else {
                document.body.appendChild(fragment);
            }

            document.title = doc.title || document.title;

            if (pushState) {
                window.history.pushState({ smoothPage: true }, '', url.href);
            }

            window.scrollTo(0, 0);

            // Re-run page-specific JavaScript (Quiz.js and inline quiz code).
            for (const oldScript of scripts) {
                const src = oldScript.getAttribute('src') || '';

                if (/music\.js$/i.test(src) || /site\.js$/i.test(src)) {
                    continue;
                }

                if (src) {
                    const script = document.createElement('script');
                    script.src = new URL(src, url.href).href;
                    script.async = false;
                    document.body.appendChild(script);
                } else if (oldScript.textContent.trim()) {
                    // Convert block-scoped top-level declarations to var so
                    // revisiting Quiz 2 does not throw duplicate-let errors.
                    const code = oldScript.textContent
                        .replace(/\bconst\b/g, 'var')
                        .replace(/\blet\b/g, 'var');
                    window.eval(code);
                }
            }

            // Keep the persistent music player playing at the exact same point.
            if (window.musicPlayer && window.musicReady) {
                try {
                    window.musicPlayer.playVideo();
                } catch (e) {}
            }
        } catch (error) {
            // If fetch/navigation is unavailable, use the normal browser link.
            window.location.href = url.href;
        } finally {
            navigating = false;
        }
    }

    document.addEventListener('click', function (event) {
        const link = event.target.closest('a');
        if (!isLocalHtmlLink(link)) return;

        const url = new URL(link.href, window.location.href);
        const current = cleanPath(new URL(window.location.href));
        const target = cleanPath(url);

        if (current === target && !url.hash) {
            event.preventDefault();
            return;
        }

        event.preventDefault();
        loadPage(url, true);
    });

    window.addEventListener('popstate', function () {
        loadPage(new URL(window.location.href), false);
    });
})();
