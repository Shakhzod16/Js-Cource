// Js da qoldiqli bo'lish % 1️⃣ Qoldiqli bo‘lish (modul)

// Js da darajaga ko'tarish ** 2️⃣ Kvadratga ko‘tarish (darajaga ko‘tarish)

//🟢  O'nlar xonasidagi sonnni aniqlash

// let son = 72;
// let birlar = son % 10;
// let unlar = (10 - (son % 10)) / 10;
// console.log(birlar, unlar);

// -------------------------------------------------
// 🟡  Yuzlar xonasidagi sonnni aniqlash

// let son = 592;

// let birlar = son % 10;
// let unlar = ((son % 10) - (son % 10)) / 10;
// let yuzlar = (son - (son % 100)) / 100;
// console.log(birlar, unlar, yuzlar);
// ----------------------------------------------
// let son = 592;

// let birlar = son % 10;
// let unlar = Math.floor((son % 100) / 10);
// let yuzlar = Math.floor(son / 100);

// console.log(birlar, unlar, yuzlar); // 2 9 5
// -------------------------------------------------
// let son = 592;

// let birlar = son % 10;
// let unlar = ((son % 100) - (son % 10)) / 10;
// let yuzlar = (son - (son % 100)) / 100;

// console.log(birlar, unlar, yuzlar);

// ------------------------------------------------

// 🟢 Minglar xonasidagi sonnni aniqlash

// let son = 4918;

// let birlar = son % 10;
// let unlar = ((son % 100) - (son % 10)) / 10;
// let yuzlar = ((son % 1000) - (son % 100)) / 100;
// let minglar = (son - (son % 1000)) / 1000;

// console.log(birlar, unlar, yuzlar, minglar);

//🔴 ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let son = +prompt('Son kiriting');
// let birlar = son % 10;
// let unlar = (son - (son % 10)) / 10;

// alert('birlar :' + birlar + ' unlar: ' + unlar);

// 🔵 ------------------------------------------------------

// let son = +prompt('Uchxonali son kiriting');
// let birlar = son % 10;
// let unlar = ((son % 100) - (son % 10)) / 10;
// let yuzlar = ((son % 1000) - (son % 100)) / 100;

// alert('birlar :' + birlar + ' unlar: ' + unlar + ' yuzlar: ' + yuzlar);

// 🔹 🔴🔴🔴 BOOLEAN

// Boolean — bu faqat ikki xil qiymat qabul qiladigan ma’lumot turi:

// true → ha, rost

// false → yo‘q, yolg‘on

// console.log(4 == 5);
// console.log(4 != '4');
// console.log(4 !== '4');
// console.log(12 > 8);
// console.log(4 > 4);
// console.log(4 >= 4);
// console.log(7 < 5);
// console.log(7 <= 5);

// AND va OR

// 🔹 && operatori jadvali
// A	B	A && B
// true	true	true
// true	false	false
// false	true	false
// false	false	false

// 📌 Qoidasi:
// && → faqat ikkalasi ham true bo‘lsa, natija true chiqadi. Aks holda false.

// 💡 Kichik misol:

// console.log(true && true);   // true
// console.log(true && false);  // false
// console.log(false && true);  // false
// console.log(false && false); // false

// ==========================================================

// 🔹 || operatori jadvali
// A	B	A || B
// true	true	true
// true	false	true
// false	true	true
// false	false	false

// 📌 Qoidasi:
// || → agar ikkalasidan kamida bittasi true bo‘lsa, natija true. Faqat ikkalasi ham false bo‘lsa, natija false.

// 💡 Kichik misol:

// console.log(true || true);   // true
// console.log(true || false);  // true
// console.log(false || true);  // true
// console.log(false || false); // false

// TOPSHIRIQ

// let son = +prompt('son kiriting');
// let son1 = a <= b * 10;

// console.log(son1);

// let a = +prompt('a ni kiriting');
// let b = +prompt('b ni kiriting');

// let son1 = a <= b * 10;
// console.log(son1);

// HOMEWORK ⭕⭕⭕

//📌 1 - TOPSHIRIQ; // (2 - 5 masalalar)

// 2 - masala

// let son = +prompt('5 xonali son kiriting');
// let birlar = son % 10;

// console.log(birlar)

// 3 - masala

// let a = +prompt('a - soni  kiritng');
// let b = +prompt('b - soni  kiritng');

// let farq = b - a;

// console.log(farq);

// 4 - masala

// let a = +prompt('a - soni  kiritng');
// let b = +prompt('b - soni  kiritng');

// let farq = a - b

// console.log(farq)

// 5 - masala

// let a = +prompt('a - soni  kiritng');
// let b = +prompt('b - soni  kiritng');

// let farq = a / b

// console.log(farq)

//📌 2 - TOPSHIRIQ; // (7 - 14 masalalar)

// 7 - masala

// let yil = +prompt('iltimos bugungi yilni kiriting');
// let oy = +prompt('iltimos bugungi oyni kiriting');
// let kun = +prompt('iltimos bugungi kunni kiriting');

// alert('Salom sleykum. Bugun' + yil + '-' + oy + '-' + kun + "kuningiz xayrli bo'lsin");

// 8 - masala

// let son1 = +prompt('1 - sonni kiriting');
// let son2 = +prompt('2 - sonni kiriting');
// let son3 = +prompt('3 - sonni kiriting');
// let son4 = +prompt('4 - sonni kiriting');

// let ortaArifmetik = (son1 + son2 + son3 + son4) / 4;

// console.log(ortaArifmetik);

// 9 - masala

// let qoy = +prompt('sonnini kiriting');

// let oyoqlari = qoy * 4;

// console.log(' qoy oyoqlar soni: ' + oyoqlari);

// 10 - masala

// let tovuq = +prompt('sonnini kiriting');

// let oyoqlari = tovuq * 2;

// console.log(' tovuq oyoqlar soni: ' + oyoqlari);

// 11 - masala

// let soz = prompt('Iltimos soz kiriting:');
// let soz1 = prompt('Iltimos soz kiriting:');
// let soz2 = prompt('Iltimos soz kiriting:');

// alert(soz + '  ' + soz1 + '  ' + soz2);

// 12 - masala

// let a = "a";
// let b = "b";

// let natija = a + b + b + a + a + b;

// console.log(natija);

// 13 - masala

// let a = 'Salom';
// let b = 'Dunyo';

// let natija = a + b;

// a = natija;
// b = natija;

// console.log(a, b);

// 14 - masala

// let a = 'a';

// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);

//📌 3 - TOPSHIRIQ; // (19 - 27 masalalar)

// 19 - masala

// let soz = prompt('Iltimos soz kiriting:');
// let soz1 = prompt('Iltimos soz kiriting:');
// let soz2 = prompt('Iltimos soz kiriting:');

// alert(soz + '  ' + soz1 + '  ' + soz2);

// 20 - masala

// let a = 'a';
// let b = 'b';
// let c = 'c';
// let son = 'x';

// natija = a + son + b + son + c + son;

// console.log(natija);

// 21 - masala

// let x = 5;
// let y = 3;
// let z = 2;

// let a = "A";
// let b = "B";
// let c = "C";

// console.log(x * y + a);
// console.log(x + z + b);
// console.log(y * z + c);

// ---------------------------------

// 22 - masala

// let son = +prompt('Ikkixonali son kiriting');
// let birlar = son % 10;
// let unlar = ((son % 100) - (son % 10)) / 10;

// console.log(birlar + unlar);

// 23 - masala

// let son = +prompt('Uchxonali son kiriting');
// let birlar = son % 10;
// let unlar = ((son % 100) - (son % 10)) / 10;
// let yuzlar = ((son % 1000) - (son % 100)) / 100;

// console.log(birlar + unlar + yuzlar);

// 24 - masala

// let son = +prompt("To'rtxonali son kiriting");
// let birlar = son % 10;
// let unlar = ((son % 100) - (son % 10)) / 10;
// let yuzlar = ((son % 1000) - (son % 100)) / 100;
// let minglar = (son - (son % 1000)) / 1000;

// console.log(birlar + unlar + yuzlar + minglar);

// 25 - masala

// let son = +prompt('Besh xonali son kiriting');

// let birlar = son % 10;
// let onlar = ((son % 100) - (son % 10)) / 10;
// let yuzlar = ((son % 1000) - (son % 100)) / 100;
// let minglar = ((son % 10000) - (son % 1000)) / 1000;
// let onMinglar = (son - (son % 10000)) / 10000;

// console.log(onMinglar + minglar + yuzlar + onlar + birlar);

// 26 - masala

// let son = +prompt('Olti xonali son kiriting');

// let birlar = son % 10;
// let onlar = ((son % 100) - (son % 10)) / 10;
// let yuzlar = ((son % 1000) - (son % 100)) / 100;
// let minglar = ((son % 10000) - (son % 1000)) / 1000;
// let onMinglar = ((son % 100000) - (son % 10000)) / 10000;
// let yuzMinglar = (son - (son % 100000)) / 100000;

// console.log(yuzMinglar + onMinglar + minglar + yuzlar + onlar + birlar);

// 27 - masala

// let son = +prompt('Ikkixonali son kiriting');
// let birlar = son % 10;
// let unlar = ((son % 100) - (son % 10)) / 10;

// let natija = son / (birlar + unlar);

// console.log(natija);

//📌 4 - TOPSHIRIQ; // (1 - 16 masalalar)   Qudrat Abdurahimov

// 1 - masala

// let L = +prompt('son kiriting');
// let m = 100;

// console.log('metrga teng : ' + L / m);

// 2 - masala

// let M = +prompt('son kiriting');
// let kg = 1000;

// console.log('tonnaga teng : ' + M / kg);

// 3 - masala

// let bayt = +prompt('son kiriting');
// let kb = 1024;

// console.log('1 kgga teng : ' + bayt / kb);

// 4 - masala

// let a = +prompt('a ni kiriting ');
// let b = +prompt('b ni kiriting');

// console.log('b kesma a kesmada ' + ((a / b) | 0) + ' marta joylashadi');

// 5 - masala
// -------------------------------

// let a = +prompt('a ni kiriting ');
// let b = +prompt('b ni kiriting');

// console.log('b kesma a kesmada ' + ((a / b) | 0) + ' marta joylashadi');

// 6 - masala

// let son = +prompt('Ikkixonali son kiriting');
// let birlar = son % 10;
// let unlar = ((son % 100) - (son % 10)) / 10;

// console.log(birlar, unlar);

// 7 - masala

// let son = +prompt('Ikkixonali son kiriting');
// let birlar = son % 10;
// let unlar = ((son % 100) - (son % 10)) / 10;

// console.log(birlar + unlar);

// 8 - masala

// let n = +prompt('Ikki xonali son kiriting');

// let on = ((n % 100) - (n % 10)) / 10;
// let bir = n % 10;

// let teskari = bir * 100 + on * 10 + yuz;

// console.log('Natija:', teskari);

// -----------------------------

// 9 - masala

// let son = +prompt('Uchxonali son kiriting');
// let birlar = son % 10;
// let unlar = ((son % 100) - (son % 10)) / 10;
// let yuzlar = ((son % 1000) - (son % 100)) / 100;

// console.log(birlar, unlar, yuzlar);

// 10 - masala

// -----------------------------------------

// 11 - masala

// let son = +prompt('Uchxonali son kiriting');
// let birlar = son % 10;
// let unlar = ((son % 100) - (son % 10)) / 10;
// let yuzlar = ((son % 1000) - (son % 100)) / 100;

// console.log(birlar + unlar + yuzlar);

// 12 - masala

// let n = +prompt('Uch xonali son kiriting');
// let yuz = (n - (n % 100)) / 100;
// let on = ((n % 100) - (n % 10)) / 10;
// let bir = n % 10;

// let teskari = bir * 100 + on * 10 + yuz;

// console.log('Natija:', teskari);

// -------------------------------------

// 13 - masala

// let n = +prompt('Uch xonali son kiriting');

// let yuz = (n - (n % 100)) / 100;
// let on = ((n % 100) - (n % 10)) / 10;
// let bir = n % 10;

// let yangiSon = on * 100 + bir * 10 + yuz;

// console.log('Natija:', yangiSon);

// -------------------------------------

// 14 - masala

// let n = +prompt('Uch xonali son kiriting');

// let yuz = (n - (n % 100)) / 100;
// let on = ((n % 100) - (n % 10)) / 10;
// let bir = n % 10;

// let yangiSon = on * 100 + bir * 10 + yuz;

// console.log('Natija:', yangiSon);

// -------------------------------------

// 15 - masala

// let n = +prompt('Uch xonali son kiriting');
// let yuz = (n - (n % 100)) / 100;
// let on = ((n % 100) - (n % 10)) / 10;
// let bir = n % 10;

// let yangiSon = on * 100 + yuz * 10 + bir;

// console.log('Natija:', yangiSon);

// -------------------------------------

// 16 - masala

// let n = +prompt('Uch xonali son kiriting');

// let yuz = (n - (n % 100)) / 100;
// let on = ((n % 100) - (n % 10)) / 10;
// let bir = n % 10;

// let yangiSon = yuz * 100 + bir * 10 + on;

// console.log('Natija:', yangiSon);

// -------------------------------------

//📌 5 - TOPSHIRIQ; // (1 - 18 masalalar)

// 1 - masala

// let a = +prompt('son kiriting');
// let b = +prompt('son kiriting');

// console.log((a - b > 5));

// 2 - masala

// let a = +prompt('son kiriting');
// let b = +prompt('son kiriting');

// console.log(a - b == a + b + 10);

// 3 - masala

// let a = +prompt('son kiriting');
// let b = +prompt('son kiriting');

// console.log(a > b * 5);

// 4 - masala

// let a = +prompt('son kiriting');
// let b = +prompt('son kiriting');

// console.log(a >= b ** 2);

// 5 - masala

// let a = +prompt('son kiriting');
// let b = +prompt('son kiriting');

// console.log(a == b / 2);

// 6 - masala

// let a = +prompt('son kiriting');
// let b = +prompt('son kiriting');

// console.log(b >= a * 10);

// 7 - masala

// let a = +prompt('son kiriting');
// let b = +prompt('son kiriting');

// console.log(b <= a * 10);

// 8- masala

// let a = +prompt('son kiriting');
// let b = +prompt('son kiriting');

// console.log(a - b > b);

// 9- masala

// let a = +prompt('son kiriting');
// let b = +prompt('son kiriting');

// console.log(a % b == 0);

// 10 - masala

// let a = +prompt('son kiriting');

// console.log(a % 3 == 0);

// 11 - masala

// let a = +prompt('son kiriting');

// console.log(a % 7 == 0);

// 12 - masala

// let a = +prompt('son kiriting');

// console.log(a % 2 != 0);

// 13 - masala

// let a = +prompt('son kiriting');

// console.log(a % 2 == 0);

// 14 - masala

// let a = +prompt('son kiriting');

// console.log(a % 2 != 0);

// 15 - masala

// let a = +prompt('son kiriting');

// console.log(a % 3 == 1);

// 16 - masala

// let a = +prompt('son kiriting');

// console.log(a > 0);

// 17 - masala

// let a = +prompt('son kiriting');

// console.log(a < 0);

// 18 - masala

// let a = +prompt('son kiriting');

// console.log(a == 0);

// HOMEWORK Boolean  🔹 🔴🔴🔴

// 1 - masala

// let A = +prompt('Butun son kiriting: ');
// natija = A >= 0;
// console.log(natija);

// 2 - masala

// let A = +prompt('Son kiriting: ');
// natija = A % 2 == 1;
// console.log('A soni toq son :' + natija);

// 3 - masala

// let A = +prompt('Son kiriting: ');
// natija = A % 2 == 0;
// console.log('A soni juft son :' + natija);

// 4 - masala

// let A = +prompt('son Kiriting: ');
// let B = +prompt('son Kiriting: ');

// natija = A > 2 && B <= 3;
// console.log(natija)

// 5 - masala

// let A = +prompt('son Kiriting: ');
// let B = +prompt('son Kiriting: ');

// natija = A >= 0 || B < -2;
// console.log(natija);

// 6 - masala

// let A = +prompt('son Kiriting: ');
// let B = +prompt('son Kiriting: ');
// let C = +prompt('son Kiriting: ');

// natija = A <= B <= C;
// console.log(natija);

// 7 - masala 🔴
// ---------------------------
// let A = +prompt('son Kiriting: ');
// let B = +prompt('son Kiriting: ');
// let C = +prompt('son Kiriting: ');

// let natija = A < B && B < C;
// console.log(natija);

// 8 - masala

// let A = +prompt('son Kiriting: ');
// let B = +prompt('son Kiriting: ');

// natija = A % 2 == 1 && B % 2 == 1;
// console.log(natija)

// 9 - masala

// let A = +prompt('son Kiriting: ');
// let B = +prompt('son Kiriting: ');

// natija = A % 2 == 1 || B % 2 == 1;
// console.log(natija)

// 10 - masala

// let A = +prompt('son Kiriting: ');
// let B = +prompt('son Kiriting: ');

// natija = A % 2 == 1 && B % 2 == 0;
// console.log(natija)

// 11 - masala

// let A = +prompt('son Kiriting: ');
// let B = +prompt('son Kiriting: ');

// let son1 = A % 2 == 1 || A % 2 == 0;
// let son2 = B % 2 == 1 || B % 2 == 0;

// console.log(son1, son2);

// 12 - masala   xato

// let A = +prompt('son Kiriting: ');
// let B = +prompt('son Kiriting: ');
// let C = +prompt('son Kiriting: ');

// Natija = A % 2 == 0 && B % 2 == 0 && C % 2 == 0;
// console.log(Natija);

// 13 - masala

// let A = +prompt('son Kiriting: ');
// let B = +prompt('son Kiriting: ');
// let C = +prompt('son Kiriting: ');

// Natija = A % 2 == 1 || (B % 2 == 0 && C % 2 == 0);
// console.log(Natija);

// 14 - masala

// let A = +prompt('son Kiriting: ');
// let B = +prompt('son Kiriting: ');
// let C = +prompt('son Kiriting: ');

// let natija = (A > 0 && B <= 0 && C <= 0) || (B > 0 && A <= 0 && C <= 0) || (C > 0 && A <= 0 && B <= 0);

// console.log( natija);

// 15 - masala

// let A = +prompt('son Kiriting: ');
// let B = +prompt('son Kiriting: ');
// let C = +prompt('son Kiriting: ');

// let natija = (A > 0 && B > 0) || (A > 0 && C > 0) || (B > 0 && C > 0);

// console.log(natija);

// 16 - masala

// let A = +prompt('Son kiriting: ');
// natija = A % 2 == 0 && A >= 10 && A <= 99;

// console.log('Berilgan son ikki xonali juft son: ' + natija);

// 17 - masala

// let A = +prompt('Son kiriting: ');
// natija = A % 2 == 0 && A >= 100 && A <= 999;

// console.log('Berilgan son ikki xonali juft son: ' + natija);

// 18 - masala

// let A = +prompt('1 - sonni kiriting: ');
// let B = +prompt('2 - sonni kiriting: ');
// let C = +prompt('3 - sonni kiriting: ');

// let natija = A == B || B == C || A == C;
// console.log(natija);

// 19 - masala 🔴

// let A = +prompt('1 - sonni kiriting: ');
// let B = +prompt('2 - sonni kiriting: ');
// let C = +prompt('3 - sonni kiriting: ');

// let natija = A + B === 0 || A + C === 0 || B + C === 0;
// console.log(natija);

// 20 - masala 🔴

// let A = +prompt('Uch xonali son kiriting: ');

// let yuz = Math.floor(A / 100);
// let on = Math.floor((A % 100) / 10);
// let bir = A % 10;

// let natija = yuz != on && on != bir && bir != yuz;
// console.log(natija);

// 21 - masala

// let A = +prompt('Uch xonali son kiriting: ');

// let yuz = Math.floor(A / 100);
// let on = Math.floor((A % 100) / 10);
// let bir = A % 10;

// let natija = yuz < on && on < bir;
// console.log(natija);

// 22 - masala

// let A = +prompt('Uch xonali son kiriting: ');

// let yuz = Math.floor(A / 100);
// let on = Math.floor((A % 100) / 10);
// let bir = A % 10;

// let natija = (yuz < on && on < bir) || (yuz > on && on > bir);

// console.log(natija);

// 23 - masala

// let A = +prompt('Uch xonali son kiriting: ');

// let yuz = Math.floor(A / 100);
// let on = Math.floor((A % 100) / 10);
// let bir = A % 10;

// natija = yuz === bir && yuz != on && bir === yuz && bir != on;
// console.log(natija);

// 24 - masala 🔴

// let A = +prompt('1 - son kiriting: ');
// let B = +prompt('2 - son kiriting: ');
// let C = +prompt('3 - son kiriting: ');

// let natija = D >= 0 || 4 * A * C >= 0;

// console.log(natija);

// 25 - masala

// let x = +prompt('Son kiriting: ');
// let y = +prompt('Son kiriting: ');

// natija = x < 0 && y > 0;
// console.log(natija);

// 26 - masala

// let x = +prompt('Son kiriting: ');
// let y = +prompt('Son kiriting: ');

// natija = x > 0 && y < 0;
// console.log(natija);

// 🔹 Koordinata tekisligi 4 ta chorakka bo‘linadi:

// 1-chorak → x > 0, y > 0 (o‘ng yuqori)

// 2-chorak → x < 0, y > 0 (chap yuqori)

// 3-chorak → x < 0, y < 0 (chap pastki)

// 4-chorak → x > 0, y < 0 (o‘ng pastki)

// 27 - masala

// let x = +prompt('Son kiriting: ');
// let y = +prompt('Son kiriting: ');

// let natija = (x < 0 && y > 0) || (x < 0 && y < 0);
// console.log(natija);

// 28 - masala

// let x = +prompt('Son kiriting: ');
// let y = +prompt('Son kiriting: ');

// let natija = (x > 0 && y > 0) || (x < 0 && y < 0);

// console.log(natija);

// 29 - masala 🔴

// let x = +prompt('Son kiriting: ');
// let y = +prompt('Son kiriting: ');
// ==================================
// 30 - masala

// let A = +prompt('1 - son kiriting: ');
// let B = +prompt('2 - son kiriting: ');
// let C = +prompt('3 - son kiriting: ');

// let natija = A == B && B == C && C == A;
// console.log(natija);

// 31 - masala

// let A = +prompt('1 - son kiriting: ');
// let B = +prompt('2 - son kiriting: ');
// let C = +prompt('3 - son kiriting: ');

// let natija = (A == B && A != C) || (A == C && A != B) || (B == C && B != A);
// console.log(natija);

// 32 - masala 🔴

// let A = +prompt('1 - son kiriting: ');
// let B = +prompt('2 - son kiriting: ');
// let C = +prompt('3 - son kiriting: ');

// let natija = A * A + B * B === C * C || A * A + C * C === B * B || B * B + C * C === A * A;

// console.log(natija);

// 33 - masala

// let a = +prompt('a: ');
// let b = +prompt('b: ');
// let c = +prompt('c: ');

// let natija = a + b > c && a + c > b && b + c > a;
// console.log(natija);

// 34 - masala 🔴

// let x = +prompt("x: ");
// let y = +prompt("y: ");

// let natija = (x + y) % 2 === 0;
// console.log(natija)

// 35 - masala 🔴

// let x1 = +prompt('x1: ');
// let y1 = +prompt('y1: ');
// let x2 = +prompt('x2: ');
// let y2 = +prompt('y2: ');

// let natija = (x1 + y1) % 2 === (x2 + y2) % 2;

// console.log(natija);

// 36 - masala 🔴

// let x1 = +prompt('x1: ');
// let y1 = +prompt('y1: ');
// let x2 = +prompt('x2: ');
// let y2 = +prompt('y2: ');

// let natija = x1 === x2 || y1 === y2;

// console.log( natija);

// ================================ Shartlar

// 34 - masala

// Shart: (x, y) koordinata beriladi (1–8). Katak oqmi yoki qora ekanligini aniqlash.

// Algoritm:

// Koordinatalarni kiritamiz: x, y.

// Agar (x + y) yig‘indisi juft bo‘lsa → katak qora.

// Agar (x + y) yig‘indisi toq bo‘lsa → katak oq.

// Kod:
// let x = +prompt('x ni kiriting (1–8):');
// let y = +prompt('y ni kiriting (1–8):');

// let oqMaydon = (x + y) % 2 !== 0;

// console.log('Natija:', oqMaydon ? "Oq" : "Qora");

// ✅ Masalan: (1,1) → (1+1)=2 juft → qora.

// ♟️ 35 – masala

// Shart: Ikki maydon berilgan (x1,y1) va (x2,y2). Ular bir xil rangdami?

// Algoritm:

// (x1 + y1) ning parity (juft/toqligini) tekshirish.

// (x2 + y2) parity sini tekshirish.

// Agar ikkalasi teng bo‘lsa → bir xil rang.

// Kod:
// let x1 = +prompt('Birinchi maydon x1:');
// let y1 = +prompt('Birinchi maydon y1:');
// let x2 = +prompt('Ikkinchi maydon x2:');
// let y2 = +prompt('Ikkinchi maydon y2:');

// let birXilRang = (x1 + y1) % 2 === (x2 + y2) % 2;

// console.log('Natija:', birXilRang);

// ✅ Masalan: (1,1) va (2,2) → ikkisi ham qora.

// ♟️ 36 – masala (Ruh – rook)

// Shart: Ruh faqat bir xil qator yoki ustun bo‘ylab yuradi.

// Algoritm:

// (x1 === x2) → bir ustun.

// (y1 === y2) → bir qator.

// Shu shartlardan biri bajarilsa → yuradi.

// Kod:
// let ruhYuraOladi = x1 === x2 || y1 === y2;

// ✅ Masalan: (1,1) → (1,8) → to‘g‘ri.

// ♟️ 37 – masala (Shoh – king)

// Shart: Shoh faqat yonidagi 1 qadamga yuradi.

// Algoritm:

// |x1 - x2| ≤ 1 → maksimal 1 qadam yonma-yon.

// |y1 - y2| ≤ 1.

// Agar ikkisi ham to‘g‘ri bo‘lsa → yuradi.

// Kod:
// let shohYuraOladi = Math.abs(x1 - x2) <= 1 && Math.abs(y1 - y2) <= 1;

// ✅ Masalan: (4,4) → (5,5) → to‘g‘ri.

// ♟️ 38 – masala (Fil – bishop)

// Shart: Fil faqat diagonal bo‘ylab yuradi.

// Algoritm:

// Agar |x1 - x2| === |y1 - y2| bo‘lsa → yuradi.

// Kod:
// let filYuraOladi = Math.abs(x1 - x2) === Math.abs(y1 - y2);

// ✅ Masalan: (2,2) → (5,5) → diagonal bo‘yicha.

// ♟️ 39 – masala (Farzin – queen)

// Shart: Farzin ruh + fil kabi yuradi.

// Algoritm:

// Agar (x1 === x2 || y1 === y2) → to‘g‘ri.

// Yoki |x1 - x2| === |y1 - y2| → diagonal.

// Shulardan biri bajarilsa → yuradi.

// Kod:
// let farzinYuraOladi =
//   x1 === x2 || y1 === y2 || Math.abs(x1 - x2) === Math.abs(y1 - y2);

// ✅ Masalan: (1,1) → (8,8) yoki (1,1) → (1,8).

// ♟️ 40 – masala (Ot – knight)

// Shart: Ot “L” shaklida yuradi: 2 qadam yo‘nalish + 1 qadam yon.

// Algoritm:

// Agar |x1 - x2| === 2 va |y1 - y2| === 1.

// Yoki |x1 - x2| === 1 va |y1 - y2| === 2.

// Shunda ot yuradi.


