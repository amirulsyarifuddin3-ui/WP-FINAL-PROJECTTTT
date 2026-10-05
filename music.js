// ==============================
// BACKGROUND MUSIC - SEAMLESS
// ==============================

const MUSIC_VIDEO_ID = 'M6LoRZsHMSs';
const MUSIC_TIME_KEY = 'classroomWebsiteMusicTime';

let musicPlayer = null;
let musicReady = false;
let musicTimer = null;
let userInteracted = false;

// Chrome/Edge can block audible autoplay.
// The first click/touch anywhere on the website is used as the
// browser-approved gesture to start the music. After that,
// navigation between pages keeps the same player alive.
function startMusicFromUserGesture() {
    userInteracted = true;

    if (musicPlayer && musicReady) {
        try {
            musicPlayer.playVideo();
        } catch (e) {}
    }
}

document.addEventListener('pointerdown', startMusicFromUserGesture, {
    passive: true
});

document.addEventListener('keydown', startMusicFromUserGesture);

function getSavedMusicTime() {
    const value = parseFloat(localStorage.getItem(MUSIC_TIME_KEY) || '0');
    return Number.isFinite(value) ? value : 0;
}

function saveMusicTime() {
    if (!musicPlayer || !musicReady) return;

    try {
        localStorage.setItem(
            MUSIC_TIME_KEY,
            String(musicPlayer.getCurrentTime())
        );
    } catch (e) {}
}

function onYouTubeIframeAPIReady() {
    if (musicPlayer) return;

    const playerElement = document.getElementById('youtubeMusicPlayer');
    if (!playerElement) return;

    musicPlayer = new YT.Player('youtubeMusicPlayer', {
        videoId: MUSIC_VIDEO_ID,

        playerVars: {
            autoplay: 1,
            controls: 0,
            loop: 1,
            playlist: MUSIC_VIDEO_ID,
            playsinline: 1,
            rel: 0
        },

        events: {
            onReady: function(event) {
                musicReady = true;

                const savedTime = getSavedMusicTime();

                if (savedTime > 0) {
                    event.target.seekTo(savedTime, true);
                }

                // Try automatic playback first.
                // If browser blocks it, the first user gesture will start it.
                try {
                    event.target.playVideo();
                } catch (e) {}
            },

            onStateChange: function(event) {
                // If browser blocked autoplay, start immediately after
                // the first user interaction.
                if (
                    event.data === YT.PlayerState.CUED &&
                    userInteracted
                ) {
                    try {
                        event.target.playVideo();
                    } catch (e) {}
                }

                if (event.data === YT.PlayerState.ENDED) {
                    event.target.seekTo(0, true);
                    event.target.playVideo();
                }
            }
        }
    });

    if (!musicTimer) {
        musicTimer = setInterval(saveMusicTime, 1000);
    }
}

function createMusicPlayer() {
    if (document.getElementById('websiteMusic')) return;

    const box = document.createElement('div');
    box.id = 'websiteMusic';

    // Hidden completely. Only the YouTube audio is used.
    box.innerHTML = `
        <div id="youtubeMusicPlayer" aria-hidden="true"></div>
    `;

    document.body.appendChild(box);

    if (!document.querySelector('script[data-classroom-youtube-api]')) {
        const api = document.createElement('script');
        api.src = 'https://www.youtube.com/iframe_api';
        api.async = true;
        api.dataset.classroomYoutubeApi = 'true';
        document.head.appendChild(api);
    }
}

document.addEventListener('DOMContentLoaded', createMusicPlayer);

window.addEventListener('beforeunload', saveMusicTime);
window.addEventListener('pagehide', saveMusicTime);

// Make these available to site.js without recreating the player.
Object.defineProperty(window, 'musicPlayer', {
    configurable: true,
    get: function() { return musicPlayer; }
});

Object.defineProperty(window, 'musicReady', {
    configurable: true,
    get: function() { return musicReady; }
});
