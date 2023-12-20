'use strict'

let a = 5;
a + 10;
a; // => 5

let b = 17;
b = (b + 1) / 2;
b * 4;
b; // => 9

let c = 5;
let d = 20;
c = d;
d = d + 7;
c; // => 20
d; // => 27

let e = 10;
let f = 5;
e = e * 4 - 3;
e + 17;
e = e + f;
e; // => 42


//-------------------------------------------------------------------------------------------------------------------------------------------------
//変数入門-基礎1.
// 例
const school = "DIG college";
console.log(school); // "DIG college" を表示
let week = 1;
console.log(week); // "1" を表示

const name = "tora";
let age = 21;
const isProgrammer = true;
let currentTask = 1;

console.log(name); // あなたの名前を表示
console.log(age); // あなたの年齢を表示
console.log(isProgrammer); // "true" を表示
console.log(currentTask); // "1" を表示

//-------------------------------------------------------------------------------------------------------------------------------------------------
//変数入門-基礎2.
currentTask = 2
console.log(currentTask); // "2" を表示

//-------------------------------------------------------------------------------------------------------------------------------------------------
//変数入門-基礎3.
// 正方形の面積を計算して保存
const squareSideLength = 2;
const squareArea = squareSideLength ** 2;

console.log(squareArea); // "4" を表示

// 長方形の面積を計算して保存
const rectangleBaseLength = 3;
const rectangleHeightLength = 4;
const rectangleArea = rectangleBaseLength * rectangleHeightLength;

console.log(rectangleArea); // "12" を表示

// 三角形の面積を計算して保存
const triangleBaseLength = 4;
const triangleHeightLength = 5;
const triangleArea = triangleBaseLength * triangleHeightLength / 2;

console.log(triangleArea); // "10" を表示