function ludoGame() {
    const player1 = Math.floor(Math.random()*6)+1;
    const playDice = `dice${player1}.jpg`;
    document.getElementById('check1').setAttribute('src',playDice);

    const player2 = Math.floor(Math.random()*6)+1;
    const play2Dice = `dice${player2}.jpg`;
    document.getElementById('check2').setAttribute('src',play2Dice);


    if (player1>player2){
        document.getElementById('score').innerHTML = "You Won! :)";
    }
    else if (player2>player1) {
        document.getElementById('score').innerHTML = "You Lost! :(";
    }
    else {
        document.getElementById('score').innerHTML = "Draw! :|";
    }
}



var myPix = new Array("dice1.jpg", "dice2.jpg", "dice3.jpg","dice4.jpg","dice5.jpg","dice6.jpg");
// var randomNum = Math.floor(Math.random() * myPix.length);
// document.getElementById("check1").src = myPix[randomNum];
// document.getElementById("check2").src = myPix[randomNum];


window.onload = choosePic;


function choosePic() {
    var randomNum = Math.floor(Math.random()*5.5)+1;
    var randomNum2 = Math.floor(Math.random()*6);
    document.getElementById("check1").src = myPix[randomNum];
    document.getElementById("check2").src = myPix[randomNum2];
}
