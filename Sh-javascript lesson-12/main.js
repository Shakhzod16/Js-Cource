// const text = document.getElementById('text');
// const btn = document.getElementById('btn');
// const input = document.getElementById('input');

// let cars = ['cobalt', 'lacetti', 'matiz', 'nexia'];

// btn.addEventListener('click', save);

// function save() {
// 	let inputValue = input.value;
// 	if (cars.includes(inputValue)) {
// 		alert('bunday avtomobile mavjud');
// 	} else {
// 		cars.push(inputValue);
// 	}
// 	draw();
// }

// function draw() {
// 	text.innerText = cars;
// }
// draw();

// Topshiriq

// const input1 = document.getElementById('input1');
// const input2 = document.getElementById('input2');
// const plus = document.getElementById('plus');
// const minus = document.getElementById('minus');
// const kop = document.getElementById('kop');
// const bol = document.getElementById('bol');
// const natija = document.getElementById('natija');

// plus.addEventListener('click', plusNum);
// minus.addEventListener('click', minusNum);
// kop.addEventListener('click', kopNum);
// bol.addEventListener('click', bolNum);

// function plusNum() {
// 	let a = +input1.value;
// 	let b = +input2.value;
// 	natija.innerText = a + b;
// }

// function minusNum() {
// 	let a = +input1.value;
// 	let b = +input2.value;
// 	natija.innerText = a - b;
// }

// function kopNum() {
// 	let a = +input1.value;
// 	let b = +input2.value;
// 	natija.innerText = a * b;
// }

// function bolNum() {
// 	let a = +input1.value;
// 	let b = +input2.value;
// 	natija.innerText = a / b;
// }

// ======================  Homework  ======================
// <!-- 1 - topshiriq -->

// const inp = document.getElementById('inp');
// const btn1 = document.getElementById('btn1');
// const result = document.getElementById('result');
// const yigindi = document.getElementById('yigindi');
// const kopaytma = document.getElementById('kopaytma');
// const totalNum = document.getElementById('totalNum');

// btn1.addEventListener('click', saveNum);
// yigindi.addEventListener('click', plusNum);
// kopaytma.addEventListener('click', kopaytmaNum);

// let arr = [];

// function saveNum() {
// 	let a = parseInt(inp.value);
// 	if (arr.push(a)) {
// 		inp.value = '';
// 	}

// 	result.innerText = arr;
// }

// function plusNum() {
// 	let count = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		count += arr[i];
// 	}
// 	totalNum.textContent = count;
// }

// function kopaytmaNum() {
// 	let sum = 1;
// 	for (let i = 0; i < arr.length; i++) {
// 		sum *= arr[i];
// 	}
// 	totalNum.textContent = sum;
// }

// <!-- 2 - topshiriq -->

// const inp1 = document.getElementById('inp1');
// const inp2 = document.getElementById('inp2');
// const inp3 = document.getElementById('inp3');
// const pushsh = document.getElementById('push');
// const unshiftt = document.getElementById('unshift');
// const splicee = document.getElementById('splice');
// const popp = document.getElementById('pop');
// const shiftt = document.getElementById('shift');
// const total = document.getElementById('total');

// pushsh.addEventListener('click', pushWord);
// unshiftt.addEventListener('click', unshiftWord);
// splicee.addEventListener('click', spliceWord);
// popp.addEventListener('click', popWord);
// shiftt.addEventListener('click', shiftWord);

// function pushWord() {
// 	let text = inp1.value;

// 	text = ',' + text;
// 	total.textContent += text;
// 	inp1.value = '';
// }
// function unshiftWord() {
// 	let text = inp2.value;
// 	total.textContent = text + ',' + total.textContent;
// }

// function spliceWord() {
// 	let massiv = total.textContent.split(',');
// 	let a = Number(inp3.value);
// 	massiv.splice(a, 1);
// 	total.textContent = massiv.join(',');
// }

// function popWord() {
// 	let massiv = total.textContent.split(',');
// 	massiv.pop();
// 	total.textContent = massiv.join(',');
// }
// function shiftWord() {
// 	let massiv = total.textContent.split(',');
// 	massiv.shift();
// 	total.textContent = massiv.join(',');
// }

// <!-- 3 - topshiriq -->

// const inp1 = document.getElementById('inp1');
// const inp2 = document.getElementById('inp2');
// const btn = document.getElementById('btn');
// const text = document.getElementById('text');

// btn.addEventListener('click', addWord);

// function addWord() {
// 	let a = inp1.value;
// 	let b = parseInt(inp2.value);
// 	let text1 = a.repeat(b);
// 	text1 = ',' + text1;
// 	text.textContent = text.textContent + text1;
// }

// <!-- 4 - topshiriq -->

// const inp = document.querySelector('input');
// const btn = document.getElementById('btn');
// const btn2 = document.getElementById('btn2');
// const res = document.querySelector('.res');
// const total1 = document.getElementById('total1');

// let arr = [];

// btn.addEventListener('click', () => {
// 	arr.push(+inp.value);
// 	res.textContent = arr;
// 	inp.value = '';
// });

// btn2.addEventListener('click', () => {
// 	let orta = arr.reduce((a, b) => a + b, 0) / arr.length;
// 	total1.textContent = orta;
// });
