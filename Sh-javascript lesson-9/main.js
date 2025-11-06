// const strelka = document.querySelector('.strelka');
// const krug = document.querySelector('.krug');
// const topBox = document.querySelector('.top');
// const leftBox = document.querySelector('.left');
// const rightBox = document.querySelector('.right');
// const bottomBox = document.querySelector('.bottom');

// let count = 0;

// function rotateBox() {
// 	topBox.style.backgroundColor = 'white';
// 	rightBox.style.backgroundColor = 'white';
// 	bottomBox.style.backgroundColor = 'white';
// 	leftBox.style.backgroundColor = 'white';

// 	strelka.style.rotate = count + 'deg';

// 	if (count >= 0 && count < 90) {
// 		rightBox.style.backgroundColor = 'green';
// 	} else if (count >= 90 && count < 180) {
// 		bottomBox.style.backgroundColor = 'green';
// 	} else if (count >= 180 && count < 270) {
// 		leftBox.style.backgroundColor = 'green';
// 	} else if (count >= 270 && count < 360) {
// 		topBox.style.backgroundColor = 'green';
// 	}

// 	count += 15;

// 	if (count >= 360) {
// 		count = 0;
// 	}
// }

// vazifa

// const leftBtn = document.getElementById('leftBtn');
// const rightBtn = document.getElementById('rightBtn');
// const dots = document.getElementsByClassName('dot');
// let index = 0;

// dots[index].style.background = 'red';

// function updateActive() {
// 	for (let i = 0; i < dots.length; i++) {
// 		dots[i].style.background = 'transparent';
// 	}

// 	dots[index].style.background = 'red';
// }

// rightBtn.onclick = function () {
// 	index++;
// 	if (index >= dots.length) {
// 		index = 0;
// 	}
// 	updateActive();
// };

// leftBtn.onclick = function () {
// 	index--;
// 	if (index < 0) {
// 		index = dots.length - 1;
// 	}
// 	updateActive();
// };

// =====================

// const leftBtn = document.getElementById('leftBtn');
// const rightBtn = document.getElementById('rightBtn');
// const dots = document.getElementsByClassName('dot');

// let currentRound = 1;
// function goToLeft() {
// 	currentRound--;
// 	if (currentRound < 1) {
// 		currentRound = 4;
// 	}
// 	draw();
// }
// function goToRight() {
// 	currentRound++;
// 	if (currentRound > 4) {
// 		currentRound = 1;
// 	}
// 	draw();
// }

// function resetRounds() {
// 	round1.classList.remove('actve');
// 	round2.classList.remove('actve');
// 	round3.classList.remove('actve');
// 	round4.classList.remove('actve');
// }
// function draw() {
// 	resetRounds();
// 	if (currentRound === 1) {
// 		round1.classList.add('active');
// 	} else if (currentRound === 2) {
// 		round2.classList.add('active');
// 	} else if (currentRound === 3) {
// 		round3.classList.add('active');
// 	} else if (currentRound === 4) {
// 		round4.classList.add('active');
// 	}
// }
// draw();

// Topshiriq

// OBJECT

// let phone = {
// 	name: 'samsung 25 s',
// 	price: 120000,
// 	brand: 'apple',
// 	adress: {
// 		region: 'uzbekistan',
// 		city: 'bukxara',
// 		street: 34,
// 	},
// };

// console.log(phone);
// console.log(phone.brand);
// console.log(phone['name']);
// console.log(phone.adress.city);

// HOMEWORK

// Objects
// 1 - masala

// let car = {
// 	model: 'bwd chazor',
// 	color: 'white',
// 	year: 2023,
// };
// console.log(car);

// 2 - masala

// let products = {
// 	name: 'pototo',
// 	description: 'good',
// 	price: '$25',
// 	imageUrl: 'emaple.url',
// };
// console, log(products);

// 3 - masala

// let user = {
// 	name: 'Sardor',
// 	age: 19,
// 	email: 'sardor@mail.com',
// 	phoneNumber: 908909889,
// 	adress: 'Bukhara',
// };
// user.xususiyat = 'good';

// console.log(user);

// Homework Dom 1 topshiriq

// const text = document.getElementById('text');
// const card1 = document.querySelector('.card1');
// const card2 = document.querySelector('.card2');
// const card3 = document.querySelector('.card3');
// const card4 = document.querySelector('.card4');
// const card5 = document.querySelector('.card5');
// const card6 = document.querySelector('.card6');
// const card7 = document.querySelector('.card7');
// const card8 = document.querySelector('.card8');
// const card9 = document.querySelector('.card9');
// const card10 = document.querySelector('.card10');

// let random = 0;

// function colorCHange() {
// 	card1.style.backgroundColor = 'white';
// 	card2.style.backgroundColor = 'white';
// 	card3.style.backgroundColor = 'white';
// 	card4.style.backgroundColor = 'white';
// 	card5.style.backgroundColor = 'white';
// 	card6.style.backgroundColor = 'white';
// 	card7.style.backgroundColor = 'white';
// 	card8.style.backgroundColor = 'white';
// 	card9.style.backgroundColor = 'white';
// 	card10.style.backgroundColor = 'white';
// }

// function ChangeRandom() {
// 	random = Math.floor(Math.random() * 10) + 1;
// 	text.innerText = random;

// 	colorCHange();
// 	draw();
// }

// function draw() {
// 	if (random === 1) card1.style.backgroundColor = 'blue';
// 	else if (random === 2) card2.style.backgroundColor = 'blue';
// 	else if (random === 3) card3.style.backgroundColor = 'blue';
// 	else if (random === 4) card4.style.backgroundColor = 'blue';
// 	else if (random === 5) card5.style.backgroundColor = 'blue';
// 	else if (random === 6) card6.style.backgroundColor = 'blue';
// 	else if (random === 7) card7.style.backgroundColor = 'blue';
// 	else if (random === 8) card8.style.backgroundColor = 'blue';
// 	else if (random === 9) card9.style.backgroundColor = 'blue';
// 	else if (random === 10) card10.style.backgroundColor = 'blue';
// }

// Homework Dom 2 topshiriq

// const title = document.getElementById('title');
// const result = document.getElementById('result');

// let count = 0;

// function updateResult() {
// 	title.innerText = count;

// 	let length = Math.abs(count).toString().length;

// 	if (length === 1) result.innerText = '1 xonali son';
// 	else if (length === 2) result.innerText = '2 xonali son';
// 	else if (length === 3) result.innerText = '3 xonali son';
// 	else result.innerText = "Ko'p xonali son";
// }

// function plusOne() {
// 	count++;
// 	updateResult();
// }

// function plusTen() {
// 	count += 10;
// 	updateResult();
// }

// function minusOne() {
// 	count--;
// 	updateResult();
// }

// function minusTen() {
// 	count -= 10;
// 	updateResult();
// }

// function resetNumber() {
// 	count = 0;
// 	updateResult();
// }
