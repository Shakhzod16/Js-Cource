// const inp1 = document.getElementById('inp1');
// const inp2 = document.getElementById('inp2');
// const result = document.getElementById('result');

// let sum = 0;

// function calculate(operation) {
// 	result.innerText = 'Result: ';
// 	if (operation === '+') {
// 		sum = parseFloat(inp1.value) + parseFloat(inp2.value);
// 	}
// 	if (operation === '-') {
// 		sum = parseFloat(inp1.value) - parseFloat(inp2.value);
// 	}
// 	if (operation === '*') {
// 		sum = parseFloat(inp1.value) * parseFloat(inp2.value);
// 	}
// 	if (operation === '/') {
// 		sum = parseFloat(inp1.value) / parseFloat(inp2.value);
// 	}
// 	draw();
// }

// function draw() {
// 	result.innerText += sum;
// }

// =============================================

// const box = document.querySelector('.box');

// function changeColor(operate) {
// 	if (operate === 'red') {
// 		box.style.backgroundColor = 'red';
// 	}
// 	if (operate === 'green') {
// 		box.style.backgroundColor = 'green';
// 	}
// 	if (operate === 'black') {
// 		box.style.backgroundColor = 'black';
// 	}
// 	if (operate === 'blue') {
// 		box.style.backgroundColor = 'blue';
// 	}
// 	if (operate === 'yellow') {
// 		box.style.backgroundColor = 'yellow';
// 	}
// 	draw();
// }

// function draw() {
// 	// box.innerText += sum;
// }

// =================================================
// <!-- Homework -->
// 1 -topshiriq

// const inp1 = document.querySelector('.inp1');
// const title1 = document.querySelector('#title1 ');
// const send = document.getElementById('send');

// const inpt = document.querySelector('#inp1');

// function showText() {
// 	inp1.style.display = 'block';
// 	inp1.style.margin = '0 , auto';
// }
// function hideText() {
// 	inp1.style.display = 'none';
// }
// send.addEventListener('click', function () {
// 	let b = inpt.value;
// 	title1.textContent = b;

// 	inpt.value = '';
// });

// let sum = 20;
// function plus() {
// 	sum += 1;
// 	title1.style.fontSize = sum + 'px';
// }

// function minus() {
// 	sum -= 1;
// 	title1.style.fontSize = sum + 'px';
// }

// let angle = 0;

// function left() {
// 	angle -= 15;
// 	title1.style.transform = `rotate(${angle}deg)`;
// }

// let angle1 = 0;

// function right() {
// 	angle1 += 15;
// 	title1.style.transform = `rotate(${angle1}deg)`;
// }

// function reset() {
// 	angle = 0;
// 	title1.style.transform = 'rotate(0deg)';
// }

// 2 -topshiriq

let images = document.querySelectorAll('.images img');
let index = 0;

showImage(index);

function showImage(i) {
	for (let j = 0; j < images.length; j++) {
		images[j].style.display = 'none';
	}

	images[i].style.display = 'block';
}

function next() {
	index++;
	if (index >= images.length) {
		index = 0;
	}
	showImage(index);
}

function prev() {
	index--;
	if (index < 0) {
		index = images.length - 1;
	}
	showImage(index);
}


