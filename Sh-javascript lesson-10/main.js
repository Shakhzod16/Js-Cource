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

let btn = document.getElementById('btn');

btn.addEventListener('click', test);
function test() {
	text.innerText = 'Hello';
}
