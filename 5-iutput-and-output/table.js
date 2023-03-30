const readline = require("readline-sync");

console.log("Table generator");

const tableNumber = readline.question("Enter number to generator table:");

console.log("***********************************");
console.log(` ${tableNumber} * 1 = ${tableNumber * 1} `);
console.log(` ${tableNumber} * 2 = $${tableNumber * 2} `);
console.log(` ${tableNumber} * 3 = ${tableNumber * 3} `);
console.log(` ${tableNumber} * 4 = ${tableNumber * 4} `);
console.log(` ${tableNumber} * 5 = ${tableNumber * 5} `);
console.log(` ${tableNumber}  * 6 =${tableNumber * 6} `);
console.log(` ${tableNumber}  * 7 =${tableNumber * 7} `);
console.log(` ${tableNumber}  * 8 =${tableNumber * 8} `);
console.log(` ${tableNumber}  * 9 =${tableNumber * 9} `);
console.log(` ${tableNumber}  * 10 =${tableNumber * 10}`);

console.log("************************************");




// output written below of git bash
// $ node table.js 

/*Table generator
Enter number to generator table:8
***********************************
 8 * 1 = 8
 8 * 2 = $16
 8 * 3 = 24
 8 * 4 = 32
 8 * 5 = 40
 8  * 6 =48
 8  * 7 =56
 8  * 8 =64
 8  * 9 =72
 8  * 10 =80
*************************************/