"use strict";

// ========================================
//     JS-Vertiefung – Intro-Level-1_3
// ========================================

console.log("%c JS-Vertiefung – Intro-Level-1_3", "color: tomato");

let i = 1;
let surName = "Johnson";
let j = "2";
let status = true;
let hello = "hello";
// let helloWorld = "hello";

console.log(typeof i);
console.log(typeof surName);
console.log(typeof j);
console.log(typeof status);
console.log(typeof hello);
// console.log(typeof helloWorld);

// ========================================
//     JS-Vertiefung – Intro-Level-1_4
// ========================================

console.log("%c JS-Vertiefung – Intro-Level-1_4", "color: tomato");

console.log(typeof 'John');
console.log(typeof 3.14);
console.log(typeof NaN);
console.log(typeof false);
console.log(typeof [1,2,3,4]);
console.log(typeof {name:'John', age:34});
console.log(typeof new Date());
console.log(typeof function () {});
console.log(typeof null);
console.log(typeof (3 + 2 == 5));
console.log(typeof (3 + '3'));

// ========================================
//   JS-Einführung – Variablen-Level-1_5
// ========================================

console.log("%c JS-Einführung – Variablen-Level-1_5", "color: tomato");

const carName = 'BMW';
console.log(carName);

const x = 150;
console.log(x);

const y = 50;
console.log(y);

let z = x + y;
console.log(z);

let firstName = 'John';
let lastName = 'Doe';
let age = 35;

console.log(`${firstName} ${lastName} ist ${age} Jahre alt.`);

// ========================================
//   JS-Einführung – Variablen-Level-1_6
// ========================================

console.log("%c JS-Einführung – Variablen-Level-1_6", "color: tomato");

let a = 34;
a = 67;
console.log(a);

// Reassignment bei Const nicht möglich
const b = 34;
// b = 67;
console.log(b);

// ========================================
//   JS-Einführung – Variablen-Level-1_7
// ========================================

console.log("%c JS-Einführung – Variablen-Level-1_7", "color: tomato");

const helloWorld = 'Hello World';
const pi = 3.14;
const burjDubai = '828m';
const fullName = 'Jan Schmidt';
const eifelTower = '324m';
const camelCase = 'camelCase';

let kursstatus = true;

// ========================================
//   JS-Vertiefung – Intro-Level-1_8
// ========================================

console.log("%c JS-Vertiefung – Intro-Level-1_8", "color: tomato");

const c = 20;
const d = 30;
const e = 10;

console.log(c + d);
console.log(c - d);
console.log(d - c);
console.log(c * d);
console.log(c / d);

let erg = c * d
console.log(erg);

let resultOne =  erg / e;
console.log(resultOne);

let f = 15;
let g = 9;

console.log(f % g);

let h = 20;

const erg2 = f + g;
const resultTwo = erg2 * 20;
console.log(resultTwo);

f++;
console.log(f);

g--;
console.log(g);

const resultThree = f - g;
console.log(resultThree);

const erg3 = resultOne % resultTwo;
console.log(erg3);

// ========================================
//   JS-Vertiefung – Intro-Level-1_12
// ========================================

console.log("%c JS-Vertiefung – Intro-Level-1_12", "color: tomato");

let score = 5 + 5 * 10;
console.log('Ergebnis: ' + score);

let score2 = (5 + 5) * 10;
console.log('Ergebnis: ' + score2);

let score3 = 0;
score3 = score3 + 10;
console.log('Ergebnis: ' + score3);

score3 += 10;
console.log('Ergebnis: ' + score3);

// ========================================
//   JS-Vertiefung – Intro-Level-1_13
// ========================================

console.log("%c JS-Vertiefung – Intro-Level-1_13", "color: tomato");

// Addition
let addition_operator = 1 + 1;
console.log("addition: " + addition_operator);

 // Subtraktion
let subtraktion_operator = 2 - 1;
console.log("subtraktion: " + subtraktion_operator);

// Multiplikation
let multiplication_operator = 2 * 2;
console.log("multiplication: " + multiplication_operator);

// Division
let division_operator = 4 / 2;
console.log("division: " + division_operator);

// Modul: zeigt an, was der Rest sein würde.
let modulus_operator = 14 % 5;
console.log("modulus: " + modulus_operator);

// ==============================================
//   JS-Vertiefung – String-Methods-Level-1_11
// ==============================================

console.log("%c JS-Vertiefung – String-Methods-Level-1_11", "color: tomato");

let k = 'Hello';
let l = 'World';

let m = k + ' ' + l;
document.write(m);
console.log(m);

document.write('<br>');

let n = k + ' ' + l;
document.write(n);
console.log(n);

document.write('<br>');

k = k + ' ' + 'World';
document.write(k)
console.log(k);

document.write('<br>');

let meinString = 'Ich bin Erste:r';
meinString += ' - ' + 'Ich komme auf Platz zwei.';
document.write(meinString);
console.log(meinString);

// ==============================================
//        JS-Vertiefung – Output-Level-1_4
// ==============================================

console.log("%c JS-Vertiefung – Output-Level-1_4", "color: tomato");

// window.alert('Hallo Welt');

// window.prompt('Bitte geben Sie ihren Namen ein.');

// window.prompt('Bitte geben Sie ihren Namen ein', 'Cancel');

// window.confirm("Stimmen Sie meiner Meinung zu?");

// let alter = window.prompt( "Gib mir bitte dein Alter:" );
// console.log(alter);

// let p = 5;
// let o = p * 5 - 3;
// window.alert(o);

let mann = "Robert Wadlow ist der größte Mann der Welt : ";
let grosse = "2,72m";
window.confirm(mann + grosse);