// Array Theme

// Number Array

// let numberArray = [3, 8, 9, 5, 2, 1, 3, 6];

// Srting Array

// let stringArray = ['hello', 'js', 'html'];

// Boolean Array

// let booleanArray = [true, false, false];

// Object Array

// let objectArray = [{ user1 }, { user2 }, { user3 }];

// Mix Array

// let mixArray = ['salom', 12, true, [], {}];

// Nested Array

// let nestedArray = [[], [], []];

// ==================================

// let NumberArray = [9, 3, 6, 45, 1, 7, 9, 0];

// array length
// console.log(NumberArray.length);

// oxiridan element qo'shish

// NumberArray.push(23);

// boshidan element qo'shish

// NumberArray.unshift(10);

// oxirirdan bitta element o'chiradi

// NumberArray.pop();

// boshidan bitta element o'chiradi

// NumberArray.shift();
// console.log(NumberArray);

// let number = [3, 4, 6, 8, 0, 2, 3, 45];
// Array methods finds, findindex, filter, includes

//shart bo'yicha elementlarni topadi va qaytaradi
// let res = number.find((item, index) => item % 2 == 0);

// shart bo'yicha elementni indexni qaytaradi
// let res1 = number.indexOf((_, index) => index == 3);

// array shart bo'yicha filter qilish bir nechta qiymat qaytaradi
// let res3 = number.filter((item, index) => item == 45);
// console.log(res3);

// Array ichida qoimat tekshirirsh
// let number = [3, 4, 6, 8, 0, 2, 3, 45];
// let natija = number.includes(0);

// let viloyatlar = ['Buxoro', 'Navoiy', 'xorazim', 'Andijon'];

// let a = viloyatlar.filter(item => item.toLowerCase().includes('a'));

// Array elementlarini belgi bo'yicha stringa yig'adi

// let res = number.join('-');
// console.log(res)

// Masalalar

// 1 - masala

// let number = [2, 6, 9, 5, 3, 3, 6, 8, 0, 8, 445, 2334];

// let result = number.filter((item, index) => item % 2 == 0);
// console.log(result);

// 2 - masala

// let result1 = number.filter((item, index) => item % 2 != 0);
// console.log(result1);

// 3 - masala

// let result3 = number.filter((item, index) => item > 10);
// console.log(result3);

// 4 - masala

// let result4 = number.filter((item, index) => item < 20);
// console.log(result3);

// 6 - masala

// let title = ['buxoro', 'andijon', 'xorazim'];

// let result5 = title.filter((item, index) => item.length % 2 != 0 );
// console.log(result5)

// ======================

// let users = [
// 	{ name: 'Alisher', age: 23, isMarried: false },
// 	{ name: 'Boroz', age: 33, isMarried: true },
// 	{ name: 'Ali', age: 39, isMarried: true },
// 	{ name: 'Zokir', age: 33, isMarried: true },
// ];

// let result = users.filter(item => item.age >= 20 && item.age <= 50);
// console.log(result);

// let result1 = users.filter(item => item.name.toLowerCase().includes('o'));
// console.log(result1);

// let result3 = users.filter(item => item.isMarried );
// console.log(result3);

// let result4 = users.filter(item => item.isMarried === false);
// console.log(result4);

// let btn = document.getElementById('btn');

// btn.addEventListener('click', test);
// function test() {
// 	text.innerText = 'Hello';
// }

// Homework for Array

// 1 - topshiriq

// const users = [
// 	{ name: 'Ali', Age: 22 },
// 	{ name: 'Vali', Age: 24 },
// 	{ name: 'Sherali', Age: 25 },
// 	{ name: 'Gani', Age: 75 },
// 	{ name: 'Sherbek', Age: 95 },
// ];

// let result = users.filter(item => item.Age % 2 == 0);
// console.log(result);

// 2 - topshiriq

// const students = [
// 	{ name: 'Anvar', grade: 90 },
// 	{ name: 'Dilshod', grade: 70 },
// 	{ name: 'Bahodir', grade: 85 },
// 	{ name: 'Dilbek', grade: 97 },
// ];

// let result1 = students.filter(item => item.grade >= 80);
// console.log(result1);

// 3 - topshiriq

// const products = [
// 	{ name: 'Telefon', price: 12000 },
// 	{ name: 'Quloqchin', price: 15400 },
// 	{ name: 'Zaryadnik', price: 1000 },
// 	{ name: '	Quloqchin', price: 7000 },
// ];

// let result3 = products.filter(item => item.price >= 10000);
// console.log(result3);

// 4 - topshiriq

// const users = [{ name: 'Ali' }, { name: 'Bobur' }, { name: 'Sardor' }];
// let result4 = users.filter(item => item.name.length >= 4);

// console.log(result4);

// 5 - topshiriq

// const items = [
// 	{ name: 'Notebook', price: 5000000 },
// 	{ name: 'Mouse', price: 1000000 },
// 	{ name: 'Printer', price: 500000 },
// ];

// let result5 = items.filter(item => item.price >= 1000000);
// console.log(result5);

// 6 - topshiriq

// const users = [{ name: 'Sardor' }, { name: 'Bobur' }, { name: 'sardor' }];
// let result6 = users.filter(item => item.name.toLowerCase() == 'sardor');

// console.log(result6);

// 7 - topshiriq

// const items = [
// 	{ name: 'Jamshid', age: 15 },
// 	{ name: 'Zafar', age: 20 },
// 	{ name: 'Rasul', age: 24 },
// 	{ name: 'Rahmon', age: 21 },
// ];

// let result7 = items.find(item => item.age >= 18);
// console.log(result7);

// 8 - topshiriq

// const orders = [
// 	{ id: 1, status: 'completed' },
// 	{ id: 2, status: 'cancelled' },
// 	{ id: 3, status: 'pending' },
// 	{ id: 4, status: 'Printer' },
// ];

// let result8 = orders.filter(item => item.status == 'pending' );
// console.log(result8);

// 9 - topshiriq

// const users = [
// 	{ name: 'Ali', age: 25, active: true },
// 	{ name: 'Vali', age: 17, active: false },
// 	{ name: 'Miron', age: 24, active: false },
// 	{ name: 'Muxi', age: 89, active: true },
// ];

// let result9 = users.filter(item => item.age >= 18 && item.active == true);

// console.log(result9);

// 10 - topshiriq

// const products = [
// 	{ name: 'Macbook', category: 'laptop' },
// 	{ name: 'Iphone', category: 'phone' },
// 	{ name: 'Samsung', category: 'laptop' },
// 	{ name: 'Asus', category: 'phone' },
// ];

// let result10 = products.filter(item => item.category == 'phone');
// console.log(result10)

// 11 - topshiriq

// const users = [
// 	{ name: 'ali', adress: { city: 'Toshkent', street: 'AmurTemur' } },
// 	{ name: 'Bobur', adress: { city: 'Samarqand', street: 'Registon' } },
// 	{ name: 'Lola', adress: { city: 'Toshkent', street: 'Yunusobod' } },
// 	{ name: 'Yusuf', adress: { city: 'Toshkent', street: 'Dombirobod' } },
// ];

// let result11 = users.filter(item => item.adress.city.toLowerCase() == 'toshkent');
// console.log(result11)

// 12 - topshiriq

// const teams = [
// 	{ name: 'Real Madrid', players: ['Bellingham', 'Vinicius'] },
// 	{ name: 'Barcelona', players: ['Pedri', 'Lewangdovsky'] },
// ];

// let result12 = teams.filter(item => item.players.includes('Pedri'));

// console.log(result12);

// 13 - topshiriq

// const orders = [
// 	{ id: 1, status: 'pending', amount: 0 },
// 	{ id: 2, status: 'completed', amount: 20 },
// 	{ id: 3, status: 'completed', amount: 30 },
// 	{ id: 4, status: 'pending', amount: 0 },
// ];

// let result13 = orders.filter(item => item.status == 'completed' && item.amount > 0);
// console.log(result13);
