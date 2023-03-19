

const readline = require("readline-sync");

console.log("*****its sum od add*****");

const a = +readline.question("please enter 1st value:  ");
const b = Number(readline.question("please enter 2nd value:  "));
// do go through her once above : adding (+) sign in const a & adding (Number) in const bis for making the output value of string to NUMBER(INTEGRER)
console.log(`Value of ${a} is ${typeof a}`);
console.log(`Value of ${b} is ${typeof b}`);
const sum = a+b;

console.log(`sum of ${a} + ${b} = ${sum}`);

/*
Asif@DESKTOP-9GS1HK7 MINGW64 /c/Trainings/JavaScript-training/6-user-resume (master)
$ node sum.js 
*****its sum od add*****
please enter the value:  8
please enter the value:  8
sum of 8 + 8 = 88

Asif@DESKTOP-9GS1HK7 MINGW64 /c/Trainings/JavaScript-training/6-user-resume (master)
$ node sum.js 
*****its sum od add*****
please enter 1st value:  3
please enter 2nd value:  2
sum of 3 + 2 = 32
*************************************AFTER CHANGINGCONCATINATING*****************
$ NODE sum.js 
*****its sum od add*****
please enter 1st value:  12
please enter 2nd value:  34
Value of 12 is number
Value of 34 is number
sum of 12 + 34 = 46

Asif@DESKTOP-9GS1HK7 MINGW64 /c/Trainings/JavaScript-training/6-user-resume (master)
$ NODE sum.js 
*****its sum od add*****
please enter 1st value:  AKIF
please enter 2nd value:  AKIF
Value of NaN is number
Value of NaN is number
sum of NaN + NaN = NaN
*/