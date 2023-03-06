"use strict";
const imgs =[];
imgs[0]=".img1";
imgs[1]=".img2";
imgs[2]=".img3";
let index = 0;


let rollDice = function(index){
	let randomNumber = Math.floor( Math.random() * 6 +1 );
	let index = '.img$(index)'

	let img = document.querySelector(imgClass).removeAttribute("src");
			
	let newSrc = `images/img${randomNumber}.jpg`;

	document.querySelector(imgClass).setAttribute("src", newSrc);
	
}

for(let index = 1; index<-=3;index++)
rollDice(index);

