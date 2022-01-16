var answerArray = [];
var quesionsArray = [];
// array to get the answer of user
var dataa = [];

//result array
var result = [];
// to use random
var rand = [];
// iteeration for the next and back quistions
var count = 1;
// to get the final result
var endresult = 0;

function Questions(q, a) {

    this.Question = q;
    this.Answer = a;
}

function Answer(A, B, C, D, ans) {
    this.firstAnswer = A;
    this.secondAnswer = B;
    this.thirdAnswer = C;
    this.fourthAnswer = D;

}


// exam quistions and answers
var q1 = new Questions("Egypt located in", "b");
quesionsArray.push(q1);
var A1 = new Answer("Europe", "Africa", "australia", "Asia");
answerArray.push(A1);
var q2 = new Questions("out put of 2*5", "b");
quesionsArray.push(q2);
var A2 = new Answer("7", "10", "20", "3");
answerArray.push(A2);
var q3 = new Questions("where is the main branch of iti?", "b");
quesionsArray.push(q3);
var A3 = new Answer("ismailia", "smart", "monofia", "alex");
answerArray.push(A3);
var q4 = new Questions("how many prays in the day", 'd');
quesionsArray.push(q4);
var A4 = new Answer("4", "6", "3", "5");
answerArray.push(A4);
var q5 = new Questions("what is the capital of spain", "a");
quesionsArray.push(q5);
var A5 = new Answer("Madrid", "Barchlona", "Sevilla", "paris");
answerArray.push(A5);

function randomArrayShuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}




// creat and insert all questions and the answers display all by none except first quistions. 
window.onload = function() {

    for (let i = 0; i < quesionsArray.length; i++) {
        rand.push(i);

        var r = document.querySelector(".dashBord");
        r.insertAdjacentHTML('beforeend', `<div  onclick="index(${i})" value = ${i+1} id="c${i+1}" class="num  ">${i+1}</div>`)

    }

    randomArrayShuffle(rand);
    for (let i = 0; i < quesionsArray.length; i++) {
        var d = document.querySelector(".quistions");

        d.insertAdjacentHTML('afterbegin', `<h4 id="${i}">${quesionsArray[rand[i]].Question}</h4> 
          <span class = ${i} style= "display:none">  <input value= a  name= ${i} type= radio></input>${answerArray[rand[i]].firstAnswer}</span>
          <span class = ${i} style= "display:none"> <input value= b  name= ${i} type= radio></input>${answerArray[rand[i]].secondAnswer}</span>
          <span class = ${i} style= "display:none"> <input value= c  name= ${i} type= radio></input>${answerArray[rand[i]].thirdAnswer}</span>
          <span class = ${i} style="display:none"> <input value= d  name= ${i} type= radio></input>${answerArray[rand[i]].fourthAnswer}</span>
            `)

        document.getElementById(i).style.display = "none";

    }
    document.getElementById("0").style.display = "block";

    for (let i = 0; i < 4; i++) {

        var x = document.getElementsByClassName("0")[i]
        x.style.display = "block";
    }

    current(count);


}

// function to display the next quistions.
function next() {

    if (count == quesionsArray.length) {

        // document.getElementById("next").style.display = "none";
        document.getElementById("end").style.display = "block";


    } else if (count == 0) {

        count++;

    } else {
        document.getElementById("prev").style.display = "block";

        document.getElementById(count - 1).style.display = "none";
        for (let i = 0; i < 4; i++) {

            var x = document.getElementsByClassName(count - 1)[i]
            x.style.display = "none";
        }


        document.getElementById(count).style.display = "block";

        for (let i = 0; i < 4; i++) {

            var x = document.getElementsByClassName(count)[i]
            x.style.display = "block";
        }
        count++;
        current(count);


    }
}

function current(c) {

    var d = document.getElementById(`c${c}`);
    var r = document.getElementById(`c${c-1}`);
    var p = document.getElementById(`c${c+1}`);
    if (c == 1) {
        p.classList.remove("num3");
    }
    d.classList.add("num3");
    r.classList.remove("num3");
    p.classList.remove("num3");




}


// to get the previous quistions
function prev() {

    count--;
    if (count == 0) {

        document.getElementById("prev").style.display = "none";
        document.getElementById("next").style.alignSelf = "flex-end";



    } else if (count == 1) {

        document.getElementById("prev").style.display = "none";
        document.getElementById(count).style.display = "none";
        for (let i = 0; i < 4; i++) {

            var x = document.getElementsByClassName(count)[i]
            x.style.display = "none";
        }


        document.getElementById(count - 1).style.display = "block";

        for (let i = 0; i < 4; i++) {

            var x = document.getElementsByClassName(count - 1)[i]
            x.style.display = "block";
        }





    } else {

        document.getElementById(count).style.display = "none";
        for (let i = 0; i < 4; i++) {

            var x = document.getElementsByClassName(count)[i]
            x.style.display = "none";
        }


        document.getElementById(count - 1).style.display = "block";

        for (let i = 0; i < 4; i++) {

            var x = document.getElementsByClassName(count - 1)[i]
            x.style.display = "block";
        }


    }
    current(count);



}

// to go back to spcific quistions
function index(v) {




    if (count - 1 != quesionsArray.length) {

        document.getElementById("next").style.display = "block";
        document.getElementById("end").style.display = "none";

    }

    for (let i = 0; i < quesionsArray.length; i++) {

        document.getElementById(i).style.display = "none";
        for (let z = 0; z < 4; z++) {

            var x = document.getElementsByClassName(i)[z]
            x.style.display = "none";
        }

    }
    document.getElementById(v).style.display = "block";
    for (let i = 0; i < 4; i++) {

        var x = document.getElementsByClassName(v)[i]
        x.style.display = "block";
    }


    count = v + 1;
    if (count != 1) {
        document.getElementById("prev").style.display = "block";

    }

}

//to submit the answer

function end() {


    var ele = document.getElementsByTagName('input');
    for (i = 0; i < ele.length; i++) {

        if (ele[i].type = "radio") {

            if (ele[i].checked)
                dataa.push(ele[i].value);

        }
    }

    var arr = dataa.reverse();
    for (let i = 0; i < quesionsArray.length; i++) {

        if (arr[i] === quesionsArray[rand[i]].Answer) {
            console.log(answerArray[i].Answer);
            result.push("true");
        } else {
            console.log(dataa[i]);
            console.log(answerArray[i].Answer);

            result.push("false");


        }

    }
    document.querySelector(".cont").style.display = "none";



    for (let i = 0; i < result.length; i++) {
        if (result[i] == 'true') {
            endresult++;

        }


    }

    var res = calc(endresult);
    if (res < 50) {
        document.body.insertAdjacentHTML('beforeend', `<div class = "result"> <p id="res1"> sorry  you have failed better luck next time</p> <br><span id="r"> ${res}%
        </span></div>`)
    } else {
        document.body.insertAdjacentHTML('beforeend', `<div class = "result"> <p id="res2"> congratulations you passed the exam</p> <br> <span id="g"> ${res}%
        </span></div>`)
    }


    onTimesUpp();


}

function calc(x) {

    return Math.round(x / quesionsArray.length * 100);
}
// to flag the quistions
function flag() {

    var s = document.getElementsByClassName('num')[count - 1];
    s.classList.toggle("num2");



}


const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
    info: {
        color: "green"
    },
    warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
    },
    alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
    }
};

//timer
const TIME_LIMIT = 30;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

startTimer();

function onTimesUpp() {
    clearInterval(timerInterval);
    TIME_LIMIT = 0;

}

function onTimesUp() {
    clearInterval(timerInterval);
    end();
    TIME_LIMIT = 0;


}

function startTimer() {
    timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;
        document.getElementById("base-timer-label").innerHTML = formatTime(
            timeLeft
        );
        setCircleDasharray();
        setRemainingPathColor(timeLeft);

        if (timeLeft === 0) {
            onTimesUp();
        }
    }, 1000);
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
    if (timeLeft <= alert.threshold) {
        document
            .getElementById("base-timer-path-remaining")
            .classList.remove(warning.color);
        document
            .getElementById("base-timer-path-remaining")
            .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
        document
            .getElementById("base-timer-path-remaining")
            .classList.remove(info.color);
        document
            .getElementById("base-timer-path-remaining")
            .classList.add(warning.color);
    }
}

function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
    const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
    document
        .getElementById("base-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
}