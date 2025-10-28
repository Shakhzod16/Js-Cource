// 1 - Function Declaration

// function salom() {
// 	console.log('hello World');
// 	console.log(69 * 5);
// }
// salom();

// ======================

// function first() {
// 	console.log('bu xato');
// }
// first();

// 2 - Function Expression

// const salom = function () {
// 	console.log('Hello world');
// };
// salom();

// 3 -  Arrow Function

// let num1 = 12;
// let num2 = 23;
// const sum = () => {
// 	console.log(num1 * num2);
// };
// sum();

// ==============================

// let age = 78;
// function showHelloUser(name) {
// 	age = 13;
// 	console.log(`Hello, ${name}! He is ${age} years old`);
// }
// showHelloUser('shoxruz');
// console.log(age);

// =============================

// function calculate(a, b) {
// 	return a + b;
// }
// const firstCal = calculate(8, 23);
// console.log(firstCal);

// Function practise

// function sum(son1, son2) {
// 	return parseInt(son1) + parseInt(son2);
// }

// let natija = sum(prompt('1-son'), prompt('2-son'));
// alert(natija);

// let element = document.getElementById('title');

// let count = 12;

// function plus(belgi) {
// 	if (belgi == 1) {
// 		count++;
// 	} else {
// 		count--;
// 	}

// 	element.style.fontSize = count + 'px';
// }

// Dom elementlarini o'zgartirish

// const box1 = document.querySelector('#box1');
// const box2 = document.querySelector('#box2');

// box1.style.width = '400px ';
// box1.style.height = '200px ';
// box1.style.border = '1px solid black';

// box2.style.width = '400px ';
// box2.style.height = '200px ';
// box2.style.border = '1px solid blue';
// box2.style.backgroundColor = 'blue';

// Kalkulyator

// const inp1 = document.getElementById('inp1');
// const inp2 = document.getElementById('inp2');
// const result = document.getElementById('result');

// function plus() {
// 	let sum = parseInt(inp1.value) + +inp2.value;
// 	result.innerHTML = result.innerText + sum;
// }

// function minus() {
// 	let sum1 = parseInt(inp1.value) - +inp2.value;
// 	result.innerHTML = result.innerText - sum1;
// }

// function kop() {
// 	let sum2 = parseInt(inp1.value) * +inp2.value;
// 	result.innerHTML = result.innerText * sum2;
// }

// function bol() {
// 	let sum3 = parseInt(inp1.value) / +inp2.value;
// 	result.innerHTML = result.innerText / sum3;
// }

// const inp1 = document.getElementById('inp1');
// const inp2 = document.getElementById('inp2');
// const result = document.getElementById('result');

// function plus() {
// 	let sum = +inp1.value + +inp2.value;
// 	result.innerHTML = result.innerHTML + sum;
// }

// function minus() {
// 	let sum = +inp1.value - +inp2.value;
// 	result.innerHTML = result.innerHTML + sum;
// }

// function kop() {
// 	let sum = +inp1.value * +inp2.value;
// 	result.innerHTML = result.innerHTML + sum;
// }

// function bol() {
// 	let sum = +inp1.value / +inp2.value;
// 	result.innerHTML = result.innerHTML + sum;;
// }

// HOMEWORK
// <!-- vazifa 1 -->

// const text = document.getElementById('text');
// const text1 = document.getElementById('text1');

// function getWordsChange() {
// 	const first = text.innerText;
// 	text1.innerText = first;
// }

// <!-- vazifa 2 -->

// const text = document.querySelector('.text');
// const text1 = document.querySelector('.text1');

// function getFirstLetter() {
// 	const first = text.innerHTML.slice(0, 1);
// 	text1.innerHTML = text1.textContent + first;
// }

// <!-- vazifa 3 -->

// const text = document.querySelector('#text');
// const text1 = document.querySelector('#text1');

// function getLastLetter() {
// 	const last = text.innerHTML.slice(-1);
// 	text1.textContent = last;
// }

// <!-- vazifa 4 -->

// const text = document.getElementById('text');
// const text1 = document.getElementById('text1');
// const text2 = document.getElementById('text2');

// function getTextAdd() {
// 	const first = text.innerText;
// 	const second = text1.innerText;
// 	text2.innerHTML = first + second;
// }

// <!-- vazifa 5 -->

// const text = document.getElementById('text');
// const text1 = document.getElementById('text1');
// const text2 = document.getElementById('text2');

// function getText() {
// 	const firstValue = text.innerText;
// 	const secondValue = text1.innerText.repeat(3);
// 	text2.innerText = firstValue + secondValue;
// }

// <!-- vazifa 6 -->

// const text = document.getElementById('text');
// const text1 = document.getElementById('text1');
// const text2 = document.getElementById('text2');

// function getTextAdd() {
// 	const first = text.innerText.slice(0, 3);
//   const second = text1.innerText.slice(0, 3);
//   text2.innerText = first + second
// }

// <!-- vazifa 7 -->

// const text = document.querySelector('#text');
// const text1 = document.querySelector('#text1');

// function getLetter() {
// 	const first = text.innerHTML;
// 	text1.innerHTML = text1.innerHTML + first;
// }

// <!-- vazifa 8 -->

// const text = document.querySelector('#text');
// const text1 = document.querySelector('#text1');
// const text2 = document.querySelector('#text2');

// function getChangeText() {
// 	const par = text.innerHTML;
// 	const par1 = text1.innerHTML;
// 	text2.innerHTML = text2.innerText + par + par1;
// }

// <!-- vazifa 9 -->

// const text = document.querySelector('#text');
// const text1 = document.querySelector('#text1');
// const text2 = document.querySelector('#text2');
// const text3 = document.querySelector('#text3');

// function getLastAdd() {
// 	const first1 = text.innerHTML.slice(0, 1);
// 	text1.innerHTML = text1.innerHTML + first1;
// }

// function getLastAdd1() {
// 	const first2 = text1.innerHTML.slice(-1);
// 	text2.innerHTML = first2 + text2.innerHTML;
// }

// function getLastAdd2() {
// 	const first3 = text2.innerHTML.slice(0, 1);
// 	text3.innerHTML = text3.innerHTML + first3;
// }

// <!-- AMALIY 1 - TASK -->

// const divs = document.getElementById('contener');

// function getHides() {
// 	divs.style.display = 'none';
// }
// function getHides1() {
// 	divs.style.display = 'block';
// }

// <!-- AMALIY 2 - TASK -->

// const box = document.getElementById('box');

// let count = 1;

// function plus() {
// 	count += 0.2;
// 	box.style.scale = count;
// }
// function minus() {
// 	count -= 0.2;
// 	box.style.scale = count;
// }

// =======

// const box = document.getElementById('box');

// let count = 100;

// function plus() {
// 	count += 10;
// 	box.style.width = count + "px";
// 	box.style.height = count + "px";
// }

// function minus() {
// 	count -= 10;
// 	box.style.width = count + "px";
// 	box.style.height = count + "px";
// }
