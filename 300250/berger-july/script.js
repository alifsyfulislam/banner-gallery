var slide1 = document.querySelector('.slide_1');
var slide2 = document.querySelector('.slide_2');
var slide3 = document.querySelector('.slide_3');

var teamAflag =  document.querySelector('.teamA_flag img');
var teamBflag =  document.querySelector('.teamB_flag img');
var teamAicon =  document.querySelector('.teamA_icon img');
var teamBicon =  document.querySelector('.teamB_icon img');

var teamA_prediction = document.querySelector('.predict_box1');
var teamB_prediction = document.querySelector('.predict_box2');

var linkTest = document.querySelector('.link_text');

var prediction1,prediction2;

var vid = document.getElementById('vid');
var url = "";

var countryFlag = [
    "images/1188.png",
    "images/1.png",
    "images/2.png",
    "images/3.png",
    "images/4.png",
    "images/5.png",
    "images/6.png",
    "images/7.png",
    "images/8.png",
    "images/9.png",
];
var countryName = [
    "AFG","AUS","BAN","ENG","IND","NZ","PAK","SA","SL","WI"
];

countryFlag[1188] = "images/1188.png";
countryName[1188] = "AFG";

var today = new Date();
var currDate = today.getDate();

switch(currDate){
    case 4:
        prediction1 = countryName[1188];
        prediction2 = countryName[9];
        teamAflag.src = url + countryFlag[1188];
        teamBflag.src = url + countryFlag[9];
        teamAicon.src = url + countryFlag[1188];
        teamBicon.src = url + countryFlag[9];
        break;
    case 5:
        prediction1 = countryName[6];
        prediction2 = countryName[2];
        teamAflag.src = url + countryFlag[6];
        teamBflag.src = url + countryFlag[2];
        teamAicon.src = url + countryFlag[6];
        teamBicon.src = url + countryFlag[2];
        break;
    case 6:
        prediction1 = countryName[8];
        prediction2 = countryName[4];
        teamAflag.src = url + countryFlag[8];
        teamBflag.src = url + countryFlag[4];
        teamAicon.src = url + countryFlag[8];
        teamBicon.src = url + countryFlag[4];
        break;
}




teamAflag.addEventListener('click',takeFirst);
teamBflag.addEventListener('click',takeSecond);
linkTest.addEventListener('click',landingPage);
slide3.addEventListener('click',landingPage);


function takeFirst() {
    console.log(prediction1);
    secondSlide();
}

function takeSecond() {
    console.log(prediction2);
    secondSlide();

}


function secondSlide() {
    slide1.className = slide1.className.replace('show', 'hidden');
    slide2.className = slide2.className.replace('hidden', 'show');
    setTimeout(function () {
        vid.play();
    },100)
    vid.addEventListener('ended',thirdSlide, false);
}

function landingPage() {
    window.open('https://www.youtube.com/watch?v=1U5HfeK2yBw&fbclid=IwAR03nVva6tocqnHjkJvoiWCj_teI8JucB0JEKtvZJINLNQlYBhShR-jGv1w');
}

function thirdSlide() {
    slide2.className = slide2.className.replace('show', 'hidden');
    slide3.className = slide3.className.replace('hidden', 'show');
}

