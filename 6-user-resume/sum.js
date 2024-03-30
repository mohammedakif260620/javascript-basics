const readline = require('readline-sync');

console.log(" *****its sum of add**** ");

const a = +readline.question("please enter 1st value:  ");
const b = Number(readline.question("please enter 2nd value:  "));

// do go through her once above : adding +()plus  sign in const a & adding :> Number(value)  in const b is for making the input value of string to NUMBER(INTEGRER) so that outpt value can be added instead of concatination

console.log(`Value of ${a} is ${typeof a}`);// this is written just to know inputs is in string or integr
console.log(`Value of ${b} is ${typeof b}`);// this is written just to know inputs is in string or integr

const sum = (a+b);

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
 // for below answer to appear comment any one bcoz one time only one can be executed 
//:>in program below line also comes (readline-sync), but for for full execution its removed/commented.


//const readline = require('readline-sync');

console.log("what is your age ? ");

const age = readline.question('enter your age: ');

console.log(`You are ${age} years old`);

console.log(`In 10 years you will be ${+age + +10} years old`);
console.log(`In 20 years you will be ${+age + +20} years old`);
console.log(`In 30 years you will be ${+age + +30} years old`);
console.log(`In 40 years you will be ${+age + +40} years old`);
console.log(`In 50 years you will be ${+age + +50} years old`);

