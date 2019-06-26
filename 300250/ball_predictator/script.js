var pitchBox = document.querySelector('.pitch_box');
var ballPos = document.querySelector('.ball_pos');
var layer = document.querySelector('.layer');
var layer2 = document.querySelector('.layer2');
var choice = document.querySelector('.choice');
var choice2 = document.querySelector('.choice2');
var result = document.querySelector('.result');
var notes = document.querySelector('#notes');

pitchBox.addEventListener('click', ballPredictator);


var selector;

var ballArr = ['ball_1','ball_2','ball_3','ball_4']


function ballPredictator() {
    notes.innerHTML = "";
    selector = Math.floor(Math.random() * 4);
    ballPos.classList ? ballPos.classList.add(ballArr[selector]) : ballPos.className += ballArr[selector];
    setTimeout(function () {
        layer.style.display = 'block';
        setTimeout(function () {
            if (selector ==2) {
                choice.innerHTML = "Yorke";
                choice2.innerHTML = "Full";
                choice.addEventListener('click', successAnswer);
                choice2.addEventListener('click', wrongAnswer);
            }
            else if (selector == 3){
                choice.innerHTML = "Good";
                choice2.innerHTML = "Short";
                choice2.addEventListener('click', successAnswer);
                choice.addEventListener('click', wrongAnswer);
            }
            else if (selector == 1){
                choice.innerHTML = "Leg Spin";
                choice2.innerHTML = "Off Spin";
                choice2.addEventListener('click', successAnswer);
                choice.addEventListener('click', wrongAnswer);
            }
            else if (selector == 0){
                choice.innerHTML = "Leg Spin";
                choice2.innerHTML = "Off Spin";
                choice.addEventListener('click', successAnswer);
                choice2.addEventListener('click', wrongAnswer);
            }
        },1)
    },4e3)
}

function successAnswer() {
    result.innerHTML = "Won!!!";
    result.style.color = "green";
    hideAnswer();
    setTimeout(function () {
        layer.style.display = "none";
        layer2.style.display = "block";
    },1000)
}

function wrongAnswer() {
    console.log(selector);
    result.innerHTML = "Try Again!!";
    result.style.color = "red";
    hideAnswer();
    setTimeout(function () {
        layer.style.display = "none";
        ballPos.className = ballPos.className.replace(ballArr[selector], '');
        choice.style.display = "block";
        choice2.style.display = "block";
        result.innerHTML = " ";
        notes.innerHTML = "Click to Play";
    },500)
}


function hideAnswer() {
    choice.style.display = "none";
    choice2.style.display = "none";
}

