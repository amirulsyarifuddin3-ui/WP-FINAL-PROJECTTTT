// =================================
// QUIZ 1
// =================================

function CheckQuiz1()
{

    var score = 0;


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


    if (Q1 && Q1.value == "true")
    {
        score++;
    }


    if (Q2 && Q2.value == "true")
    {
        score++;
    }


    if (Q3 && Q3.value == "true")
    {
        score++;
    }


    if (Q4 && Q4.value == "true")
    {
        score++;
    }


    if (Q5 && Q5.value == "true")
    {
        score++;
    }


    document.getElementById("result1").innerHTML =
        "Your Score is " + score + " / 5";


    if (score == 5)
    {

        document.getElementById("result1").innerHTML +=
            "<br>🎉 Excellent! Amazing!";

    }

    else if (score >= 3)
    {

        document.getElementById("result1").innerHTML +=
            "<br>😊 Great Job! Keep learning!";

    }

    else
    {

        document.getElementById("result1").innerHTML +=
            "<br>💪 Good Try! Try Again!";

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


    document.getElementById("result1").innerHTML = "";

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


    if (Q6 && Q6.value == "true")
    {
        score++;
    }


    if (Q7 && Q7.value == "true")
    {
        score++;
    }


    if (Q8 && Q8.value == "true")
    {
        score++;
    }


    if (Q9 && Q9.value == "true")
    {
        score++;
    }


    if (Q10 && Q10.value == "true")
    {
        score++;
    }


    document.getElementById("result2").innerHTML =
        "Your Score is " + score + " / 5";


    if (score == 5)
    {

        document.getElementById("result2").innerHTML +=
            "<br>🏆 Perfect! You are a Super Star!";

    }

    else if (score >= 3)
    {

        document.getElementById("result2").innerHTML +=
            "<br>😊 Great Job! Keep going!";

    }

    else
    {

        document.getElementById("result2").innerHTML +=
            "<br>💪 Good Try! Don't Give Up!";

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


    document.getElementById("result2").innerHTML = "";

}