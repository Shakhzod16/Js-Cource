// 📌 JavaScript String metodlari

// 1. length

// 👉 Satr uzunligini qaytaradi.

// let text = "Hello";
// console.log(text.length); // 5

// 2. charAt(index)

// 👉 Berilgan indexdagi belgini qaytaradi.

// let text = "Hello";
// console.log(text.charAt(0)); // H

// 3. charCodeAt(index)

// 👉 Belgining Unicode (kodini) qaytaradi.

// console.log("A".charCodeAt(0)); // 65

// 4. at(index) (ES2022)

// 👉 charAt ga o‘xshaydi, lekin manfiy index ham qabul qiladi.

// let str = "Hello";
// console.log(str.at(-1)); // o

// 5. slice(start, end)

// 👉 Satrni kesib oladi. end kirmaydi.

// let text = "JavaScript";
// console.log(text.slice(0, 4)); // Java
// console.log(text.slice(-6));   // Script

// 6. substring(start, end)

// 👉 slice ga o‘xshaydi, faqat manfiy index qabul qilmaydi.

// let text = "JavaScript";
// console.log(text.substring(0, 4)); // Java

// 7. substr(start, length) (ES5 dan keyin kam ishlatiladi)

// 👉 start dan boshlab length ta belgini qaytaradi.

// let text = "JavaScript";
// console.log(text.substr(4, 6)); // Script

// 8. toUpperCase()

// 👉 Hammasini katta harfga o‘tkazadi.

// console.log("hello".toUpperCase()); // HELLO

// 9. toLowerCase()

// 👉 Hammasini kichik harfga o‘tkazadi.

// console.log("HELLO".toLowerCase()); // hello

// 10. trim()

// 👉 Boshidagi va oxiridagi bo‘sh joylarni olib tashlaydi.

// let text = "   salom   ";
// console.log(text.trim()); // "salom"

// 11. trimStart() / trimEnd()

// 👉 Faqat boshidagi yoki oxiridagi bo‘sh joylarni olib tashlaydi.

// "   salom".trimStart(); // "salom"
// "salom   ".trimEnd();   // "salom"

// 12. padStart(length, char)

// 👉 Satrni oldidan belgilar qo‘shib uzaytiradi.

// let num = "5";
// console.log(num.padStart(3, "0")); // "005"

// 13. padEnd(length, char)

// 👉 Satrni oxiridan belgilar qo‘shib uzaytiradi.

// let num = "5";
// console.log(num.padEnd(3, "0")); // "500"

// 14. repeat(count)

// 👉 Satrni bir necha marta takrorlaydi.

// console.log("ha".repeat(3)); // hahaha

// 15. replace(old, new)

// 👉 Birinchi uchragan old ni new bilan almashtiradi.

// let text = "Men Java o‘rganyapman";
// console.log(text.replace("Java", "JavaScript"));

// 16. replaceAll(old, new)

// 👉 Hamma old larni new bilan almashtiradi.

// let text = "ha ha ha";
// console.log(text.replaceAll("ha", "ho")); // ho ho ho

// 17. includes(substring)

// 👉 Satr ichida berilgan qism bor yoki yo‘qligini tekshiradi.

// let text = "Hello world";
// console.log(text.includes("world")); // true

// 18. startsWith(substring)

// 👉 Satr shu substring bilan boshlanishini tekshiradi.

// "JavaScript".startsWith("Java"); // true

// 19. endsWith(substring)

// 👉 Satr shu substring bilan tugashini tekshiradi.

// "JavaScript".endsWith("Script"); // true

// 20. indexOf(substring)

// 👉 Substring birinchi marta qayerda boshlanganini qaytaradi.

// "banana".indexOf("na"); // 2

// 21. lastIndexOf(substring)

// 👉 Substring oxirgi marta qayerda boshlanganini qaytaradi.

// "banana".lastIndexOf("na"); // 4

// 22. split(separator)

// 👉 Satrni massivga bo‘lib yuboradi.

// let text = "olma,banan,gilos";
// console.log(text.split(",")); // ["olma", "banan", "gilos"]

// 23. concat()

// 👉 Satrlarni qo‘shadi.

// let a = "Salom";
// let b = "Dunyo";
// console.log(a.concat(" ", b)); // Salom Dunyo

// 24. match(regex)

// 👉 Regex bo‘yicha mosliklarni qaytaradi.

// let text = "Men 2025-yilda dasturchiman";
// console.log(text.match(/\d+/)); // ["2025"]

// 25. matchAll(regex)

// 👉 Regex bo‘yicha barcha mosliklarni iterator shaklida qaytaradi.

// let text = "a1 b2 c3";
// for (let m of text.matchAll(/\d/g)) {
//   console.log(m[0]); // 1, 2, 3
// }

// 26. search(regex)

// 👉 Regex bo‘yicha birinchi mos kelgan joyni qaytaradi.

// "Hello World".search(/World/); // 6

// 27. localeCompare(str)

// 👉 Ikki satrni solishtiradi (0, 1 yoki -1 qaytaradi).

// console.log("a".localeCompare("b")); // -1

// 28. toString()

// 👉 Satr turiga o‘tkazadi (odatda sonlarda ishlatiladi).

// let num = 123;
// console.log(num.toString()); // "123"

// 29. valueOf()

// 👉 String obyektini oddiy stringga o‘tkazadi.

// let str = new String("Hello");
// console.log(str.valueOf()); // "Hello"

// ✅ Eng ko‘p ishlatiladiganlari:
// length, slice, substring, toUpperCase, toLowerCase, trim, replace, split, includes, startsWith, endsWith.

// 📌 Satrlarga oid masalalar (26 - 40 masalalar)

// 26 - masala;

// let N = 3;
// let satr = '   ';
// if (satr.length >= N) {
// 	alert(satr.slice(0, 2));
// } else {
// 	satr.length <= N;
// 	alert(satr.push());
// }
// console.log(satr);

// ============================================

// let satr = prompt('Satr kiriting:');
// let N = +prompt('N sonini kiriting:');

// if (satr.length > N) {
// 	console.log(satr.slice(satr.length - N));
// } else if (satr.length < N) {
// 	let farq = N - satr.length;
// 	console.log('.'.repeat(farq) + satr);
// } else {
// 	console.log(satr);
// }

// 27 - masala;

// let son1 = +prompt("son kiritng: ")
// let son2 = +prompt("son kiritng: ")

// function user(a) {
// 	if (a % 2 == 1) {
// 		alert('toq son');
// 	} else {
// 		a % 2 == 0;
// 		alert('juft son');
// 	}
// 	console.log(prompt('son kiritng'));
// }

// =================

/* function user() {
	let a = +prompt('Son kiriting:');
	if (a % 2 == 1) {
		alert('Toq son');
	} else {
		alert('Juft son');
	}
}
user();
 */

// Switch case

// let baholar = +prompt('soz kiritng');

// switch (baholar) {
// 	case 1:
// 		console.log('juda yomon');
// 		break;
// 	case 2:
// 		console.log(' yomon');
// 		break;
// 	case 3:
// 			console.log('qoniqarli');
// 		break;
// 	case 4:
// 			console.log('alo');
// 		break;
// 	case 5:
// 		'juda yaxshi';
// 		console.log(baholar);
// 		break;
// 	default:
// 		console.log('xato');
// }

// Homework Tanlash operatorlaiga oid masalalar

// Case - 1;

// let weekDay = +prompt('Son kiring: ');

// switch (weekDay) {
// 	case 1:
// 		alert('Dushanba');
// 		break;
// 	case 2:
// 		alert('Seshanba');
// 		break;
// 	case 3:
// 		alert('Chorshanba');
// 		break;
// 	case 4:
// 		alert('Payshanba');
// 		break;
// 	case 5:
// 		alert('Juma');
// 		break;
// 	case 6:
// 		alert('Shanba');
// 		break;
// 	case 7:
// 		alert('Yakshanba');
// 		break;
// 	default:
// 		alert('Bunday hafta kuni mavjud emas');
// }

// Case - 2;

// let grade = +prompt('Son kiring: ');

// switch (grade) {
// 	case 1:
// 		alert('yomon');
// 		break;
// 	case 2:
// 		alert('qoniqarsiz');
// 		break;
// 	case 3:
// 		alert('qoniqarli');
// 		break;
// 	case 4:
// 		alert('yaxshi');
// 		break;
// 	case 5:
// 		alert("a'lo");
// 		break;
// 	default:
// 		alert('Bunday baho mavjud emas');
// }

// Case - 3;

// let monthNumber = +prompt('Son kiritng: ');

// switch (monthNumber) {
// 	case 1:
// 		alert('1 - oy qish');
// 		break;
// 	case 2:
// 		alert('2 - oy qish');
// 		break;
// 	case 3:
// 		alert('3 - oy bahor');
// 		break;
// 	case 4:
// 		alert('4 - oy bahor');
// 		break;
// 	case 5:
// 		alert('5 - oy bahor');
// 		break;
// 	case 6:
// 		alert('6 - oy yoz');
// 		break;
// 	case 7:
// 		alert('7 - oy yoz');
// 		break;
// 	case 8:
// 		alert('8 - oy yoz');
// 		break;
// 	case 9:
// 		alert('9 - oy kuz');
// 		break;
// 	case 10:
// 		alert('10 - oy kuz');
// 		break;
// 	case 11:
// 		alert('11 - oy kuz');
// 		break;
// 	case 12:
// 		alert('12 - oy qish');
// 		break;
// 	default:
// 		alert('Bunday oy mavjud emas');
// }

// Case - 4;

// let monthName = +prompt('Son kriting: ');

// switch (monthName) {
// 	case 1:
// 		alert('1 - oy: 31 kun bor ');
// 		break;
// 	case 2:
// 		alert('2 - oy: 29 kun bor ');
// 		break;
// 	case 3:
// 		alert('3 - oy: 31 kun bor');
// 		break;
// 	case 4:
// 		alert('4 - oy: 30 kun bor');
// 		break;
// 	case 5:
// 		alert('5 - oy: 31 kun bor');
// 		break;
// 	case 6:
// 		alert('6 - oy: 30 kun bor');
// 		break;
// 	case 7:
// 		alert('7 - oy: 31 kun bor');
// 		break;
// 	case 8:
// 		alert('8 - oy: 30 kun bor');
// 		break;
// 	case 9:
// 		alert('9 - oy: 31 kunbor');
// 		break;
// 	case 10:
// 		alert('10 - oy: 31 kun bor');
// 		break;
// 	case 11:
// 		alert('11 - oy: 30 kun bor');
// 		break;
// 	case 12:
// 		alert('12 - oy: 31 kunbor');
// 		break;
// 	default:
// 		alert('Bunday oy mavjud emas');
// }

// Case - 5;

// let a = +prompt('1 - sonni kiriting: ');
// let b = +prompt('2 - sonni kiriting: ');
// let amal = +prompt(`Amalni tanlang:
// 1 - qo‘shish
// 2 - ayirish
// 3 - bo‘lish
// 4 - ko‘paytirish`);

// switch (amal) {
// 	case 1:
// 		alert(a + b + "1 - qo'shish");
// 		break;
// 	case 2:
// 		alert(a - b + '2 - ayirish');
// 		break;
// 	case 3:
// 		alert(a / b + "3 - bo'lish");
// 		break;
// 	case 4:
// 		alert(a * b + "4 - ko'paytirish");
// 		break;
// 	default:
// 		alert('Xato');
// }

// Case - 6;

// let length = +prompt('Son kiriting (necha metr?): ');
// let natija = +prompt(`Meterni quyidagilarga o‘tkazing:
// 1 - desimetr
// 2 - kilometr
// 3 - metr
// 4 - millimetr`);

// switch (natija) {
// 	case 1:
// 		alert(length * 10 + ' desimetr');
// 		break;
// 	case 2:
// 		alert(length / 1000 + ' kilometr');
// 		break;
// 	case 3:
// 		alert(length + ' metr');
// 		break;
// 	case 4:
// 		alert(length * 1000 + ' millimetr');
// 		break;
// 	default:
// 		alert('Xato: 1–4 oralig‘idagi raqamni kiriting!');
// }

// Case - 7;

// let weight = +prompt('Son kiriting (necha kilogrami ?): ');
// let natija = +prompt(`Kilogram quyidagilarga o‘tkazing:
// 1 - kilogramm
// 2 - milligramm
// 3 - gram
// 4 - tonna
// 5 - setener`);

// switch (natija) {
// 	case 1:
// 		alert(weight + ' kilogram');
// 		break;
// 	case 2:
// 		alert(weight / 1000000 + ' milligramm');
// 		break;
// 	case 3:
// 		alert(weight / 1000 +' gram');
// 		break;
// 	case 4:
// 		alert(weight * 1000 + ' tonna');
// 		break;
// 	case 5:
// 		alert(weight * 100 + ' setener');
// 		break;
// 	default:
// 		alert('Xato: 1–5 oralig‘idagi raqamni kiriting!');
// }

// 7 - masala

let weight = +prompt('Son kiritng: ');
let choose = +prompt(`Tanlang:
	1 - kilogram
  2 - milligramm
  3 - gramm
  4 - tonna
  5 - senterner`);

switch (choose) {
	case 1:
		alert(weight + "kg");
		break;
	case 2:
		alert(weight / 1000000 + ' kg');
		break;
	case 3:
		alert(weight / 1000 + ' kg');
		break;
	case 4:
		alert(weight * 1000 + ' kg');
		break;
	case 5:
		alert(weight * 100 + ' kg');
		break;
	default:
		alert("Faqat 1 - 5 oralig'dagi sonni kiring");
}
