// =================================
// QUIZ 1
// =================================

function CheckQuiz1()
{
    var score = 0;


    // Get selected answers

    var Q1 =
        document.querySelector(
            'input[name="Q1"]:checked'
        );

    var Q2 =
        document.querySelector(
            'input[name="Q2"]:checked'
        );

    var Q3 =
        document.querySelector(
            'input[name="Q3"]:checked'
        );

    var Q4 =
        document.querySelector(
            'input[name="Q4"]:checked'
        );

    var Q5 =
        document.querySelector(
            'input[name="Q5"]:checked'
        );


    // Check Q1

    if (Q1 && Q1.value === "Book")
    {
        score++;
    }


    // Check Q2

    if (Q2 && Q2.value === "Pencil")
    {
        score++;
    }


    // Check Q3

    if (Q3 && Q3.value === "Chair")
    {
        score++;
    }


    // Check Q4

    if (Q4 && Q4.value === "Bag")
    {
        score++;
    }


    // Check Q5

    if (Q5 && Q5.value === "Window")
    {
        score++;
    }


    // Display score

    var result =
        document.getElementById("result1");


    if (score === 5)
    {
        result.innerHTML =
            "🎉 <strong>Excellent!</strong> 🎉<br>" +
            "You got <strong>5 / 5</strong> correct! ⭐";

        speak(
            "Excellent! You got five out of five correct!"
        );
    }

    else if (score >= 3)
    {
        result.innerHTML =
            "😊 <strong>Great Job!</strong> 😊<br>" +
            "You got <strong>" +
            score +
            " / 5</strong> correct!";

        speak(
            "Great job! You got " +
            score +
            " out of five correct."
        );
    }

    else
    {
        result.innerHTML =
            "💪 <strong>Good Try!</strong> 💪<br>" +
            "You got <strong>" +
            score +
            " / 5</strong> correct.<br>" +
            "Try again!";

        speak(
            "Good try! You got " +
            score +
            " out of five correct. Try again."
        );
    }


    // Disable all answers after submit

    var radioButtons =
        document.querySelectorAll(
            'input[type="radio"]'
        );


    for (
        var i = 0;
        i < radioButtons.length;
        i++
    )
    {
        radioButtons[i].disabled = true;
    }
}



// =================================
// TAKE QUIZ 1 AGAIN
// =================================

function TakeQuizAgain1()
{
    var radioButtons =
        document.querySelectorAll(
            'input[type="radio"]'
        );


    for (
        var i = 0;
        i < radioButtons.length;
        i++
    )
    {
        radioButtons[i].checked = false;

        radioButtons[i].disabled = false;
    }


    // Clear result

    document.getElementById(
        "result1"
    ).innerHTML = "";


    // Clear feedback

    var feedbacks =
        document.querySelectorAll(
            ".feedback"
        );


    for (
        var j = 0;
        j < feedbacks.length;
        j++
    )
    {
        feedbacks[j].innerHTML = "";
    }
}



// =================================
// FEEDBACK
// =================================

function showFeedback(question)
{
    var selected =
        document.querySelector(
            'input[name="' +
            question +
            '"]:checked'
        );


    if (!selected)
    {
        return;
    }


    var feedback =
        document.getElementById(
            question + "_feedback"
        );


    var answer =
        selected.value;



    // =================================
    // Q1
    // =================================

    if (question === "Q1")
    {
        if (answer === "Book")
        {
            feedback.innerHTML =
                "🎉 <strong>Great Job!</strong><br>" +
                "✅ Correct! This is a Book. 📖";

            correctSound();

            speak(
                "Great job! Correct! This is a book."
            );
        }
        else
        {
            feedback.innerHTML =
                "😊 <strong>Nice try!</strong><br>" +
                "❌ That answer is not correct.<br>" +
                "💡 The correct answer is <strong>Book</strong>. 📖";

            wrongSound();

            speak(
                "Nice try! That answer is not correct. The correct answer is Book."
            );
        }
    }



    // =================================
    // Q2
    // =================================

    if (question === "Q2")
    {
        if (answer === "Pencil")
        {
            feedback.innerHTML =
                "🎉 <strong>Great Job!</strong><br>" +
                "✅ Correct! We use a Pencil to write. ✏️";

            correctSound();

            speak(
                "Great job! Correct! We use a pencil to write."
            );
        }
        else
        {
            feedback.innerHTML =
                "😊 <strong>Nice try!</strong><br>" +
                "❌ That answer is not correct.<br>" +
                "💡 The correct answer is <strong>Pencil</strong>. ✏️";

            wrongSound();

            speak(
                "Nice try! That answer is not correct. The correct answer is Pencil."
            );
        }
    }



    // =================================
    // Q3
    // =================================

    if (question === "Q3")
    {
        if (answer === "Chair")
        {
            feedback.innerHTML =
                "🎉 <strong>Great Job!</strong><br>" +
                "✅ Correct! This is a Chair. 🪑";

            correctSound();

            speak(
                "Great job! Correct! This is a chair."
            );
        }
        else
        {
            feedback.innerHTML =
                "😊 <strong>Nice try!</strong><br>" +
                "❌ That answer is not correct.<br>" +
                "💡 The correct answer is <strong>Chair</strong>. 🪑";

            wrongSound();

            speak(
                "Nice try! That answer is not correct. The correct answer is Chair."
            );
        }
    }



    // =================================
    // Q4
    // =================================

    if (question === "Q4")
    {
        if (answer === "Bag")
        {
            feedback.innerHTML =
                "🎉 <strong>Great Job!</strong><br>" +
                "✅ Correct! This is a Bag. 🎒";

            correctSound();

            speak(
                "Great job! Correct! This is a bag."
            );
        }
        else
        {
            feedback.innerHTML =
                "😊 <strong>Nice try!</strong><br>" +
                "❌ That answer is not correct.<br>" +
                "💡 The correct answer is <strong>Bag</strong>. 🎒";

            wrongSound();

            speak(
                "Nice try! That answer is not correct. The correct answer is Bag."
            );
        }
    }



    // =================================
    // Q5
    // =================================

    if (question === "Q5")
    {
        if (answer === "Window")
        {
            feedback.innerHTML =
                "🎉 <strong>Great Job!</strong><br>" +
                "✅ Correct! This is a Window. 🪟";

            correctSound();

            speak(
                "Great job! Correct! This is a window."
            );
        }
        else
        {
            feedback.innerHTML =
                "😊 <strong>Nice try!</strong><br>" +
                "❌ That answer is not correct.<br>" +
                "💡 The correct answer is <strong>Window</strong>. 🪟";

            wrongSound();

            speak(
                "Nice try! That answer is not correct. The correct answer is Window."
            );
        }
    }
}



// =================================
// CORRECT SOUND
// =================================

function correctSound()
{
    var audio =
        new Audio(
            "sounds/correct.mp3"
        );

    audio.play().catch(
        function()
        {
            console.log(
                "Correct sound not found."
            );
        }
    );
}



// =================================
// WRONG SOUND
// =================================

function wrongSound()
{
    var audio =
        new Audio(
            "sounds/wrong.mp3"
        );

    audio.play().catch(
        function()
        {
            console.log(
                "Wrong sound not found."
            );
        }
    );
}



// =================================
// VOICE
// =================================

function speak(text)
{
    if (
        "speechSynthesis"
        in window
    )
    {
        window.speechSynthesis.cancel();


        var message =
            new SpeechSynthesisUtterance(
                text
            );


        message.lang = "en-US";

        message.rate = 0.9;

        message.pitch = 1.1;


        window.speechSynthesis.speak(
            message
        );
    }
}



// =================================
// QUIZ 2
// =================================

function CheckQuiz2()
{
    var score = 0;


    var Q6 =
        document.querySelector(
            'input[name="Q6"]:checked'
        );

    var Q7 =
        document.querySelector(
            'input[name="Q7"]:checked'
        );

    var Q8 =
        document.querySelector(
            'input[name="Q8"]:checked'
        );

    var Q9 =
        document.querySelector(
            'input[name="Q9"]:checked'
        );

    var Q10 =
        document.querySelector(
            'input[name="Q10"]:checked'
        );


    if (Q6 && Q6.value === "Crayon")
    {
        score++;
    }

    if (Q7 && Q7.value === "Ruler")
    {
        score++;
    }

    if (Q8 && Q8.value === "Eraser")
    {
        score++;
    }

    if (Q9 && Q9.value === "Pencil")
    {
        score++;
    }

    if (Q10 && Q10.value === "Book")
    {
        score++;
    }


    var result =
        document.getElementById(
            "result2"
        );


    result.innerHTML =
        "Your Score is " +
        score +
        " / 5";


    if (score === 5)
    {
        result.innerHTML +=
            "<br>🏆 <strong>Perfect!</strong> You are a Super Star!";
    }

    else if (score >= 3)
    {
        result.innerHTML +=
            "<br>😊 <strong>Great Job!</strong> Keep going!";
    }

    else
    {
        result.innerHTML +=
            "<br>💪 <strong>Good Try!</strong> Don't Give Up!";
    }


    var radioButtons =
        document.querySelectorAll(
            'input[type="radio"]'
        );


    for (
        var i = 0;
        i < radioButtons.length;
        i++
    )
    {
        radioButtons[i].disabled = true;
    }
}



// =================================
// TAKE QUIZ 2 AGAIN
// =================================

function TakeQuizAgain2()
{
    var radioButtons =
        document.querySelectorAll(
            'input[type="radio"]'
        );


    for (
        var i = 0;
        i < radioButtons.length;
        i++
    )
    {
        radioButtons[i].checked = false;

        radioButtons[i].disabled = false;
    }


    document.getElementById(
        "result2"
    ).innerHTML = "";
}
