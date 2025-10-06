// Homework  🔴🔴🔴

//📌 1 - TOPSHIRIQ; // (17 - 23 masalalar) ⭕

// 17 - masala;

// let A = +prompt('4 xonli son kiritng: ');
// let natija = Math.floor(A / 100) % 10;

// console.log(natija);

// 18 - masala;

// let A = +prompt('4 xonli son kiritng: ');
// let natija = Math.floor(A / 1000) % 100;

// console.log(natija);

// 19 - masala;

// let Sekund = +prompt('Sekundlarni kiriting: ');
// let natija = Math.floor(Sekund / 60);

// console.log('Kun boshidan beri ' + natija + " minut vaqt o'tdi");

// 20 - masala;

// let Sekund = +prompt('Sekundlarni kiriting: ');
// let natija = Math.floor(Sekund / 3600)

// console.log('Kun boshidan beri ' + natija + " soat vaqt o'tdi");

// 21 - masala;

// let Sekund = +prompt('Sekundlarni kiriting: ');
// let natija1 = Math.floor(Sekund / 60) % 60;
// let natija2 = Math.floor(Sekund % 60);

// console.log('Kun boshidan beri ' + natija1 + ' minut va ' + natija2 + " sekund vaqt o'tdi");

// 22 - masala;

// let Sekund = +prompt('Sekundlarni kiriting: ');
// let natija1 = Math.floor(Sekund / 3600)  ;
// let natija2 = Math.floor(Sekund % 3600) ;

// console.log('Kun boshidan beri ' + natija1 + ' soat va ' + natija2 + " sekund vaqt o'tdi");

// 23 - masala;

// let Sekund = +prompt('Sekundlarni kiriting: ');
// let soat = Math.floor(Sekund / 3600);
// let minut = Math.floor((Sekund % 3600) / 60);
// let qolganSekund = Math.floor(Sekund % 3600) % 60;

// console.log('Soat: ' + soat + ' Minut: ' + minut + ' Sekund: ' + qolganSekund);

//📌 2 - TOPSHIRIQ; // (34 - 40 masalalar) ⭕

// 34 - masala;

// let x = +prompt('x ni kiriting (1–8):');
// let y = +prompt('y ni kiriting (1–8):');

// let oqMaydon = (x + y) % 2 !== 0;

// console.log('Natija:', oqMaydon);

// 35 - masala

// let x1 = +prompt('Birinchi maydon x1:');
// let y1 = +prompt('Birinchi maydon y1:');
// let x2 = +prompt('Ikkinchi maydon x2:');
// let y2 = +prompt('Ikkinchi maydon y2:');

// let birXilRang = (x1 + y1) % 2 === (x2 + y2) % 2;

// console.log('Natija:', birXilRang);

// 36 - masala // (Ruh)

// let x1 = +prompt("Ruhning boshlang'ich x1:");
// let y1 = +prompt("Ruhning boshlang'ich y1:");
// let x2 = +prompt('Ruh boradigan x2:');
// let y2 = +prompt('Ruh boradigan y2:');

// let ruhYuraOladi = x1 === x2 || y1 === y2;

// console.log('Natija:', ruhYuraOladi);

// 37 - masala // (Shoh)

// let x1 = +prompt("Shohning boshlang'ich x1:");
// let y1 = +prompt("Shohning boshlang'ich y1:");
// let x2 = +prompt('Shoh boradigan x2:');
// let y2 = +prompt('Shoh boradigan y2:');

// console.log('Natija:', Math.abs(x1 - x2) <= 1 && Math.abs(y1 - y2) <= 1 && x1 + x2 !== 0);

// 38 - masala // (Fil)

// let x1 = +prompt("Filning boshlang'ich x1:");
// let y1 = +prompt("Filning boshlang'ich y1:");
// let x2 = +prompt('Fil boradigan x2:');
// let y2 = +prompt('Fil boradigan y2:');

// let filYuraOladi = Math.abs(x2 -x1) === Math.abs(y2-y1);

// console.log('Natija:', filYuraOladi);

// 39 - masala (Farzin)

// let x1 = +prompt("Farzinning boshlang'ich x1:");
// let y1 = +prompt("Farzinning boshlang'ich y1:");
// let x2 = +prompt('Farzin boradigan x2:');
// let y2 = +prompt('Farzin boradigan y2:');

// let farzinYuraOladi = x1 === x2 || y1 === y2 || Math.abs(x2 - x1) === Math.abs(y2 - y1);

// console.log('Natija:', farzinYuraOladi);

// 40 - masala (Ot)

// let x1 = +prompt("Otning boshlang'ich x1:");
// let y1 = +prompt("Otning boshlang'ich y1:");
// let x2 = +prompt('Ot boradigan x2:');
// let y2 = +prompt('Ot boradigan y2:');

// let otYuraOladi =
// 	(Math.abs(x1 - x2) === 2 && Math.abs(y1 - y2) === 1) || (Math.abs(x1 - x2) === 1 && Math.abs(y1 - y2) === 2);

// console.log('Natija:', otYuraOladi);

// 📌 Shart operatorlari

// let yosh = +prompt('yoshingizni kiriting');
// if (18 <= yosh) {
// 	alert("siz mufofaqiyatli ro'yhatdan o'tdingiz");
// } else {
// 	alert('error');
// }

// ========================================

// let son = +prompt('son kiritng');

// if (son % 2 == 0) {
// 	alert('juft son');
// } else {
// 	alert('toq son');
// }

// ========================================

// let yosh = +prompt('yoshingizni kiriting: ');

// if (yosh >= 0 && yosh < 18) {
//   alert('Voyaga yetmagan')
// } else if (yosh > 18 && yosh <= 30) {
//   alert("Balog'atga yetgan")
// } else if (yosh > 30 && yosh <= 60) {
//   alert('Kesa odam')
// } else
//   alert('error')
// {
// 	console.log(yosh);
// }

// ========================================

// let son = +prompt('Son kiriting: ');
// if (son % 2 == 0) {
// 	alert('juft');
// } else {
// 	alert('error');
// }

// ===================

// let son = +prompt('Son kiriting: ');
// if (son >= 10 && son <= 99) {
// 	alert('hello');
// } else {
// 	alert('error');
// }

// ===================
// Homework  🔴🔴🔴

// Shart opertorlariga oid masalalar (1 - 30 masalar)

// 1 - masala

// let son = +prompt('Son kiritng: ');
// if (son > 0) {
// 	alert(i++);
// } else if (son) {
// 	alert(son);
// }

// ==============================

// let son = +prompt('Son kiriting:');

// if (son > 0) {
// 	alert(son + 1);
// } else if (son < 0) {
// 	alert(son);
// }

// 2 - masala

// let son = +prompt('Son kiriting:');

// if (son > 0) {
// 	alert(son + 1);
// } else if (son < 0) {
// 	alert(son - 2);
// }

// 3 - masala

// let son = +prompt('Son kiriting:');

// if (son > 0) {
// 	alert(son + 1);
// } else if (son < 0) {
// 	alert(son - 2);
// } else if (son == 0) {
// 	alert(son = 10);
// }

// 3 - masala

// let a = +prompt('1 sonni kiriting:');
// let b = +prompt('2 sonni kiriting:');
// let c = +prompt('3 sonni kiriting:');

// let max = Math.max(a, b, c);

// console.log('Eng katta son:', max);

// 4 - masala

// let a = +prompt('1 sonni kiriting:');
// let b = +prompt('2 sonni kiriting:');
// let c = +prompt('3 sonni kiriting:');

// count = 0;

// if (a > 0) count++;
// if (b > 0) count++;
// if (c > 0) count++;

// console.log('Musbat sonlar soni:', count);

// 5 - masala  ⭕

// let a = +prompt('1 sonni kiriting:');
// let b = +prompt('2 sonni kiriting:');
// let c = +prompt('3 sonni kiriting:');

// 6 - masala

// let a = +prompt('1 sonni kiriting:');
// let b = +prompt('2 sonni kiriting:');

// if (a > b) {
// 	alert(a);
// } else b > a;
// {
// 	alert(b);
// }

// 7 - masala

// let a = +prompt('1 sonni kiriting:');
// let b = +prompt('2 sonni kiriting:');

// if (a < b) {
// 	alert(a + ', idnex - 1');
// } else if (b < a) {
// 	alert(b + ',  idnex - 1');
// } else {
// 	alert('ikkalla son (a , b)');
// }

// 8 - masala

// let a = +prompt('1 sonni kiriting:');
// let b = +prompt('2 sonni kiriting:');

// if (a > b) {
// 	alert('katta son ' + a);
// 	alert('kichik son ' + b);
// } else if (a < b) {
// 	alert('katta son ' + b);
// 	alert('kichik son ' + a);
// } else {
// 	alert('ikklasi teng ' + a);
// }

// 9 - masala

// let a = +prompt('1 sonni kiriting:');
// let b = +prompt('2 sonni kiriting:');

// if (a > b) {
// 	alert(b);
// } else {
// 	alert(a);
// }

// 10 - masala

// let a = +prompt('1 sonni kiriting:');
// let b = +prompt('2 sonni kiriting:');

// if (a != b) {
// 	alert(a + b);
// } else if (a == b) {
// 	alert(0);
// }

// 11 - masala

// let a = +prompt('1 sonni kiriting:');
// let b = +prompt('2 sonni kiriting:');

// if (a != b) {
// 	alert(Math.max(a,b));
// } else if (a == b) {
// 	alert(0);
// }

// 12 - masala

// let a = +prompt('1-sonni kiriting:');
// let b = +prompt('2-sonni kiriting:');
// let c = +prompt('3-sonni kiriting:');

// let min = Math.min(a, b, c);

// alert('Eng kichik son: ' + min);

// 13 - masala 🔴

// let a = +prompt('1 Son kiriting: ');
// let b = +prompt('2 Son kiriting: ');
// let c = +prompt('3 Son kiriting: ');

// if (a > b && b > c) {
// 	alert(b);
// } else if (b > a && a > c) {
// 	alert(a);
// } else if (a > c && c > b) {
// 	alert(c);
// }

// ==============================

// let a = +prompt('1-sonni kiriting:');
// let b = +prompt('2-sonni kiriting:');
// let c = +prompt('3-sonni kiriting:');

// let middle;

// if ((a > b && a < c) || (a > c && a < b)) {
// 	middle = a;
// } else if ((b > a && b < c) || (b > c && b < a)) {
// 	middle = b;
// } else {
// 	middle = c;
// }

// alert('O‘rtadagi son: ' + middle);

// 14 - masala; 🔴

// let a = +prompt('1-sonni kiriting:');
// let b = +prompt('2-sonni kiriting:');
// let c = +prompt('3-sonni kiriting:');

// let min; // eng kichik son
// let max; // eng katta son

// // eng kichik sonni topamiz
// if (a <= b && a <= c) {
// 	min = a;
// } else if (b <= a && b <= c) {
// 	min = b;
// } else {
// 	min = c;
// }

// // eng katta sonni topamiz
// if (a >= b && a >= c) {
// 	max = a;
// } else if (b >= a && b >= c) {
// 	max = b;
// } else {
// 	max = c;
// }

// console.log('Eng kichik son:', min);
// console.log('Eng katta son:', max);

// 15 - masala;

// let a = +prompt('Son kiriting: ');
// let b = +prompt('Son kiriting: ');
// let c = +prompt('Son kiriting: ');

// if (a + b > a + c && a + b > b + c) {
// 	console.log(a + b);
// } else if (b + c > a + c && b + c > a + c) {
// 	console.log(b + c);
// } else a + c > b + c && a + c > a + b;{
// 	console.assert.og(a + c);
// }

// 16 - masala;

// let a = +prompt('1-sonni kiriting:');
// let b = +prompt('2-sonni kiriting:');
// let c = +prompt('3-sonni kiriting:');

// if (a < b && b < c) {
// 	alert(a, b, c * 2);
// } else if ((a, b, c)) {
// 	alert(-a, -b, -c);
// }

// =======================

// let a = +prompt('1-sonni kiriting:');
// let b = +prompt('2-sonni kiriting:');
// let c = +prompt('3-sonni kiriting:');

// if (a < b && b < c) {
// 	alert(a * 2 + ' ' + b * 2 + ' ' + c * 2);
// } else {
// 	alert(-a + ' ' + -b + ' ' + -c);
// }

// 17 - masala;

// let a = +prompt('1-sonni kiriting:');
// let b = +prompt('2-sonni kiriting:');
// let c = +prompt('3-sonni kiriting:');

// if (a < b && b < c) {
// 	alert(a * 2 + ' ' + b * 2 + ' ' + c * 2);
// } else if (a > b && b > c) {
//   alert(a * 2 + ' ' + b * 2 + ' ' + c * 2);
// } else {
// 	alert(-a + ' ' + -b + ' ' + -c);
// }

// 18 - masala;

// let a = +prompt('1-sonni kiriting:');
// let b = +prompt('2-sonni kiriting:');
// let c = +prompt('3-sonni kiriting:');

// if (a == b) {
// 	alert('3');
// } else if (a == c) {
// 	alert('2');
// } else if (b == c) {
// 	alert('1');
// } else {
// 	alert("o'zaro sonlar teng bo'lmaganda");
// }

// 19 - masala;🔴

// let a = +prompt('1-sonni kiriting:');
// let b = +prompt('2-sonni kiriting:');
// let c = +prompt('3-sonni kiriting:');
// let d = +prompt('4-sonni kiriting:');

// if (a == b && b == c && c != d) {
// 	alert('D 4 tartib son');
// } else if (d == b && b == c && c != a) {
// 	alert('A 4 tartib son');
// } else if (d == b && b == c && c != a) {
// 	alert('C 4 tartib son');
// } else {
// 	alert('B 4 ta tartib son ');
// }

// ======================================

// if (a == b && b == c && c != d) {
// 	alert('4-son (d) boshqacha');
// } else if (a == b && b == d && d != c) {
// 	alert('3-son (c) boshqacha');
// } else if (a == c && c == d && d != b) {
// 	alert('2-son (b) boshqacha');
// } else if (b == c && c == d && d != a) {
// 	alert('1-son (a) boshqacha');
// } else {
// 	alert('Bunday holat yo‘q');
// }

// 20 - masala;

// let a = +prompt('1-sonni kiriting:');
// let b = +prompt('2-sonni kiriting:');
// let c = +prompt('3-sonni kiriting:');

// let AB_masofa = Math.abs(a - b);
// let AC_masofa = Math.abs(a - c);

// if (AB_masofa < AC_masofa) {
// 	alert(`B nuqta A ga eng yaqin. Masofa: ${AB_masofa}`);
// } else if (AB_masofa > AC_masofa) {
// 	alert(`C nuqta A ga eng yaqin. Masofa: ${AC_masofa}`);
// } else {
// 	alert(`B va C nuqtalar A dan bir xil masofada joylashgan (${AB_masofa})`);
// }

// 21 - masala;⭕
// 22 - masala;⭕
// 23 - masala;⭕

// 24 - masala;

// let x = +prompt('Son kiritng: ');
// if (x > 0) {
// 	console.log(2 * Math.sin(x));
// } else if (x <= 0) {
// 	console.log(x - 6);
// }

// 25 - masala;

// let x = +prompt('Son kiritng: ');
// if (x < -2 || x > 2) {
// 	alert(2 * x);
// } else {
// 	alert(-3 * x);
// }

// 26 - masala;

// let x = +prompt('Son kiriting: ');

// if (x <= 0) {
// 	alert(-x);
// } else if (0 < x && x < 2) {
// 	alert(x ** 2);
// } else if (x >= 2) {
// 	alert(4);
// }

// 27 - masala;⭕

// let x = +prompt('Son kiriting: ');

// 28 - masala;⭕

// let yil = +prompt('Son kiriting: ');
// yil = yil > 0;

// 29 - masala;

// let son = +prompt('Son kiritng: ');

// if (son > 0 && son % 2 == 1) {
// 	alert('Berilgan son musbat toq son');
// } else if (son < 0 && son % 2 == 0) {
// 	alert('Berilgan son manfiy juft son');
// } else if (son == 0) {
// 	alert('Son 0 ga teng');
// } else {
// 	alert('Boshqa');
// }

// 30 - masala;

// let son = +prompt('Son kiriting:');

// let ikkiXonali = son >= 10 && son <= 99;
// let uchXonali = son >= 100 && son <= 999;

// if (ikkiXonali && son % 2 == 0) {
// 	alert('Berilgan son ikki xonali juft son');
// } else if (uchXonali && son % 2 == 0) {
// 	alert('Berilgan son uch xonali juft son');
// } else {
// 	alert('Boshqa holat');
// }

// =======================================

// 19 - masala

// let a = +prompt('1 - sonni kiritng: ');
// let b = +prompt('2 - sonni kiritng: ');
// let c = +prompt('3 - sonni kiritng: ');
// let d = +prompt('4 - sonni kiritng: ');

// if (a == b && b == c && c != d) {
// 	alert('4 - son bu D');
// } else if (a == b && b == d && d != c) {
// 	alert('3 - son bu C');
// } else if (a == c && c == d && d != b) {
// 	alert('2 - son bu B');
// } else if (b == c && c == d && d != a) {
// 	alert('1 - son bu A');
// } else {
// 	alert("Bunday holat yo'q");
// }

// 20 - masala

// let a = +prompt('1 - sonni kiritng: ');
// let b = +prompt('2 - sonni kiritng: ');
// let c = +prompt('3 - sonni kiritng: ');

// let AB_masofa = Math.abs(a - b);
// let AC_masofa = Math.abs(a - c);

// if (AB_masofa > AC_masofa) {
// 	alert(`B nuqta A ga yaqin " ${AB_masofa}`);
// } else if (AB_masofa < AC_masofa) {
// 	alert(`C nuqta A ga yaqin " ${AC_masofa}`);
// } else {
// 	alert(`Bu holatta C va B nuqtalar teng joylashgan ${AB_masofa}`);
// }

// 30 - masala

// let son = +prompt('Son kiriting:');

// let birXonli = son >= 1 && son <= 9;
// let ikkiXonali = son >= 10 && son <= 99;
// let uchXonali = son >= 100 && son <= 999;

// if (birXonli > 0 && birXonli % 2 != 0) {
// 	alert('Berilgan son Bir xonali toq son');
// } else if (birXonli > 0 && birXonli % 2 == 0) {
// 	alert('Berilgan son Bir xonali juft son');
// } else if (ikkiXonali > 0 && ikkiXonali % 2 == 0) {
// 	alert('Berilgan son Ikki xonali juft son');
// } else if (ikkiXonali > 0 && ikkiXonali % 2 != 0) {
// 	alert("'Berilgan son Ikki xonali toq son'");
// } else if (uchXonali > 0 && uchXonali % 2 != 0) {
// 	alert("'Berilgan son Uch xonali toq son'");
// } else if (uchXonali > 0 && uchXonali % 2 == 0) {
// 	alert("'Berilgan son Uch xonali juft son'");
// } else {
// 	alert('Boshqa');
// }

// =========================

// let son = +prompt('Son kiriting:');

// if (son >= 1 && son <= 9) {
// 	if (son % 2 == 0) {
// 		alert('Berilgan son bir xonali juft son');
// 	} else {
// 		alert('Berilgan son bir xonali toq son');
// 	}
// } else if (son >= 10 && son <= 99) {
// 	if (son % 2 == 0) {
// 		alert('Berilgan son ikki xonali juft son');
// 	} else {
// 		alert('Berilgan son ikki xonali toq son');
// 	}
// } else if (son >= 100 && son <= 999) {
// 	if (son % 2 == 0) {
// 		alert('Berilgan son uch xonali juft son');
// 	} else {
// 		alert('Berilgan son uch xonali toq son');
// 	}
// } else {
// 	alert('Boshqa son kiritildi');
// }

// function hasBad(str) {
// 	if ('bad' + str.length(0, 1) == true || str.lenght(0, 2) + 'bad' == true) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
