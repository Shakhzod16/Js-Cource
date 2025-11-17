// SetInterval, Settimeout.

// ==================================
// let id
// id =setInterval(test, 2000);
// function test() {
// 	console.log('salom');
// }
// setTimeout(test, 2000);

// clearInterval(id)

// ===================================

// const text = document.getElementById('text');
// const button = document.getElementById('btn');

// button.addEventListener('click', changeWord);
// function changeWord() {
// 	setTimeout(test, 2000);
// }
// function test() {
// 	text.innerText = 'Salom Dunyo';
// 	text.style.color = "green"
// }

// ===================================

// const text = document.getElementById('text');
// const btn1 = document.getElementById('btn1');
// const btn2 = document.getElementById('btn2');

// btn1.addEventListener('click', start);
// btn2.addEventListener('click', stopBtn);
// let id;
// let count = 60;

// function start() {
// 	id = setInterval(() => {
// 		count--;
// 		if (count == 0) {
// 			clearInterval(id);
// 			alert('Sizning vaqtingiz tugadi');
// 		}
// 		draw();
// 	}, 1000);
// }
// function stopBtn() {
// 	clearInterval(id);
// }
// function draw() {
// 	text.innerText = count;
// }

// ===================================

// const body = document.getElementById('body');

// let color = ['red', 'green', 'blue', 'yellow', 'gray', 'orange'];
// setInterval(() => {
// 	let random = Math.floor(Math.random() * color.length + 1);
// 	body.style.backgroundColor = color[random];
// }, 1000);

// ===================================

// topshiriq

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

// let id;

// function ChangeRandom() {
// 	id = setInterval(start, 1000);

// 	function start() {
// 		random = Math.floor(Math.random() * 10) + 1;
// 		text.innerText = random;

// 		colorCHange();
// 		draw();
// 	}
// }
// function ChangeRandom1() {
// 	console.log(id);

// 	clearInterval(id);
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

// Homework
// const btn1 = document.getElementById('btn1');
// const btn2 = document.getElementById('btn2');
// const circle1 = document.getElementById('circle1');
// const circle2 = document.getElementById('circle2');
// const circle3 = document.getElementById('circle3');

// let id;
// let stage = 'red';
// let count = 10;

// btn1.addEventListener('click', startBtn);
// btn2.addEventListener('click', stopBtn);

// function startBtn() {
// 	clearInterval(id);

// 	stage = 'red';
// 	count = 10;

// 	id = setInterval(() => {
// 		if (stage === 'red') {
// 			circle1.style.background = 'red';
// 			circle2.style.background = 'white';
// 			circle3.style.background = 'white';
// 			circle1.innerText = count;
// 		}

// 		if (stage === 'yellow') {
// 			circle1.style.background = 'white';
// 			circle2.style.background = 'yellow';
// 			circle3.style.background = 'white';
// 			circle2.innerText = count;
// 		}

// 		if (stage === 'green') {
// 			circle1.style.background = 'white';
// 			circle2.style.background = 'white';
// 			circle3.style.background = 'green';
// 			circle3.innerText = count;
// 		}

// 		count--;

// 		if (count < 0) {
// 			if (stage === 'red') {
// 				stage = 'yellow';
// 				count = 5;
// 			} else if (stage === 'yellow') {
// 				stage = 'green';
// 				count = 10;
// 			} else if (stage === 'green') {
// 				stage = 'red';
// 				count = 10;
// 			}
// 		}
// 	}, 1000);
// }

// function stopBtn() {
// 	clearInterval(id);

// 	circle1.style.background = 'white';
// 	circle2.style.background = 'white';
// 	circle3.style.background = 'white';

// 	circle1.innerText = '';
// 	circle2.innerText = '';
// 	circle3.innerText = '';
// }

// topshiriq

const btn = document.getElementById('btn');
const box = document.getElementById('changeColor');

btn.addEventListener('click', start);

let interval;

function start() {
	interval = setInterval(() => {
		if (box.style.backgroundColor === 'red') {
			box.style.backgroundColor = 'white';
		} else {
			box.style.backgroundColor = 'red';
		}
	}, 100);
}
