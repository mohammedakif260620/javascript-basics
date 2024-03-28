'Syed' * 45 ); // true
// 2 * 1 + 'Syed' * 45
// 2 + 'Syed' * 45
// 2 + NaN
// NaN

Number.isNaN( 1000 ); // false
Number.isNaN(56 * 99); // false
Number.isNaN("Syed"); // false
Number.isNaN(true); // false
Number.isNaN(NaN); // true
> Number.isNaN(1*'akif')
true
Number.isNaN('akif')
false
Number.isNaN(1*'akif'+2-3)
true1===