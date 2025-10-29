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

const box = document.querySelector('.box');

function changeColor(operate) {
	if (operate === 'red') {
		box.style.backgroundColor = 'red';
	}
	if (operate === 'green') {
		box.style.backgroundColor = 'green';
	}
	if (operate === 'black') {
		box.style.backgroundColor = 'black';
	}
	if (operate === 'blue') {
		box.style.backgroundColor = 'blue';
	}
	if (operate === 'yellow') {
		box.style.backgroundColor = 'yellow';
	}
	draw();
}

function draw() {
	// box.innerText += sum;
}
