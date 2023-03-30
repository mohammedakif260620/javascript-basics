import chalk from 'chalk'

console.log("hello");
console.log("hi there")

console.log(chalk.blue("Mohammed"));
console.log(chalk.green.bgRed("JS-Functions"));
console.log(chalk.green.bgYellow("JS-Functions"));
console.log(chalk.red.bgWhite("JS-Functions"));



/*output 
hi there
Mohammed
JS-Functions    green.bgRed("JS-Functions")
JS-Functions     green.bgYellow("JS-Functions"));
JS-Functions   red.bgWhite("JS-Functions"));

to execute remove this commented part and type in git bash: node index.js = enter
*/


const chalk = require("chalk");
import chalk from 'chalk'; //es6

console.log("Hi");
console.log("Hey!");
console.log(chalk.blue("Hello"));
console.log(chalk.bgRed("Javascript Functions"));


function myOwnFunction() {
  console.log("One");
  console.log("Two");
  console.log("Three");
}

myOwnFunction();

var numberOne = 50;
var numberTwo = 99;
var output = numberOne + numberTwo;
console.log(output);

function addition(inputOne, inputTwo) {
  console.log("Calling addition function....");
  console.log(chalk.bgBlue(inputOne));
  console.log(chalk.bgRed(inputTwo));

  const output = inputOne + inputTwo;
  console.log( chalk.bgGreen(output) )
}

addition(12, 97);
addition(90, 8968);
addition();
