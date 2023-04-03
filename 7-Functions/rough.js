let add = function (xValue, yValue){
  return xValue + yValue;
}
add(22, 42);

let additionofnmbers = add(20, 20);

console.log(additionofnmbers);
// -------------------------------------------------------
/*function math(username){
  console.log(`hello${username}`);

}

math('akif');

function mathOperations(a, b) { // Here a , b are two parameters
    console.log(`value of a = ${a}`);
    console.log(`value of b = ${b}`);
    const addition = a + b;
    const subtraction = a - b;
    const multiply = a * b;
    const division = a / b;
    const modulo = a % b;
  
    console.log(addition);
    console.log(subtraction);
    console.log(multiply);
    console.log(division);
    console.log(modulo);
  }

  mathOperations(9,8);
*/

//----------------------------------------------------------------

/*import readLine from 'readline-sync';
import chalk from 'chalk';


    const calculateBill = function (mealAmount, taxRate, tip){
        const total = Number(mealAmount) + Number(taxRate) + Number(tip) ;
        return total;
    }

    const customerMealamount = readLine.question("please enter meal amount: ");
    const taxRate = readLine.question("please enter tax amount: ");
    const tip = readLine.question("any tip please: ");

    const totalBill = calculateBill(customerMealamount, taxRate, tip);

    console.log(totalBill);
*/