var thanosHand = document.getElementById('thanos');
var thanosLight = document.getElementById('lights');
var adBox = document.querySelector('.ad-box');
var adBox2 = document.querySelector('.ad-box2');
var selectorDiv = document.querySelector('.selector_div');
var restart = document.querySelector('.restart');

var xMove = 0;
var yMove = 0;

var xBall = 0;
var yBall = 170;

var xSpeed = 10;
var ySpeed = 10;

var timerA;


selectorDiv.addEventListener('click', function(){
    selectorDiv.classList.add('hidden');
    adBox.addEventListener("touchmove", touchDetect);
    adBox.addEventListener("mousemove", mouseDetect);
    ballMove();
});

selectorDiv.addEventListener('touchstart', function(){
    selectorDiv.classList.add('hidden');
    adBox.addEventListener("touchmove", touchDetect);
    adBox.addEventListener("mousemove", mouseDetect);
    ballMove();
});


var score = 0;
var speedInc = 0;

function ballMove() {
    if (xBall + xSpeed > 280){
        xSpeed = -2 * Math.random() - 5 - speedInc;
    }
    if (xBall + xSpeed < 0){
       xSpeed = 2 * Math.random() + 5 + speedInc;
    }
    if (yBall + ySpeed > 220){
        ySpeed = Math.floor(-2 * Math.random() - 5 - speedInc);
    }
    if (yBall + ySpeed < 0){
        ySpeed = 2 * Math.random() + 5 + speedInc;
    }
    xBall = xBall + xSpeed;
    yBall = yBall + ySpeed;
    thanosLight.style.left = xBall+'px';
    thanosLight.style.top = yBall+'px';
    timerA = setTimeout(ballMove,40);
    score++;
    speedInc = score*0.05;
}




var mouseAlertX,mouseAlertY;

//mouse
function mouseDetect(e){
    e.preventDefault();
    mouseAlertX = e.clientX;
    mouseAlertY = e.clientY;
    if (mouseAlertX>=0 && mouseAlertX<250 && mouseAlertY>=0 && mouseAlertY<215) {
        thanosHand.style.left = mouseAlertX+'px';
        thanosHand.style.top = mouseAlertY+'px';
    }
	
	if ((mouseAlertX < xBall+30) && (mouseAlertX+30 > xBall) && (mouseAlertY < yBall+30) && (mouseAlertY+30 > yBall))
    {
        clearTimeout(timerA);
        adBox.className = adBox.className.replace('show', 'hidden'); 
        adBox2.className = adBox2.className.replace('hidden', 'show'); 
        document.getElementById("scoreId").innerHTML = "Game Over! Score: " + score;
    }
}

var touchAlertX,touchAlertY;
//touch
function touchDetect(e){
    touchAlertX = Math.floor(e.touches[0].clientX);
    touchAlertY = Math.floor(e.touches[0].clientY);
    if (touchAlertX>=0 && touchAlertX<250 && touchAlertY>=0 && touchAlertY<215) {
        thanosHand.style.left = touchAlertX+'px';
        thanosHand.style.top = touchAlertY+'px';
    }
	
	if ((touchAlertX < xBall+50) && (touchAlertX+50 > xBall) && (touchAlertY < yBall+35) && (touchAlertY+35 > yBall))
    {
        clearTimeout(timerA);
        adBox.className = adBox.className.replace('show', 'hidden'); 
        adBox2.className = adBox2.className.replace('hidden', 'show'); 
        document.getElementById("scoreId").innerHTML = "Game Over! Score: " + score;
    }
}

restart.addEventListener("click", playAgain);
restart.addEventListener("touchstart", playAgain);

function playAgain(){
    adBox2.className = adBox2.className.replace('show', 'hidden'); 
    adBox.className = adBox.className.replace('hidden', 'show'); 
    score = 0;
    xBall = 245;
    yBall = 50;
	speedInc = 0;
    ballMove(); 
}

