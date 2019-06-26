var slide1 = document.querySelector('.slide_1');

slide1.addEventListener('click', landingPage);
function landingPage(){
	window.open('https://brothersfurniture.com.bd');
}

var counter;
var interVal=0;
counter = setInterval(function () {
	interVal++;
    slide1.innerHTML = slide1.innerHTML;
    checkIt(interVal);
},4e3);

function checkIt(interVal){
	if (interVal>4) {
		clearInterval(counter);
	}
}







