// before ES6 version, there is only one way to create 
// variable in javasript is using var keyword
var myVariable = "Some data";

//in ES6 version, let and const are introduce to create
// variables

// var declaration with value
var myName = "Syed";

// var redeclaration with same variable identifier
var myName = "Syed Zakeer";

myName = "syed zakeer";// myName has been update by writting/declaring twice >var.<//but LET its diff.

// let declaration with value
let myHomeTown = "Guntur";
let myHomeTown = "ongole"; // Javascript will throw error
//if need to change:without writting >let < just say >// ;
myHomeTown = "ongole";//this will change the value of let .


// we can't redeclare let variable again
// let myHomeTown = "ongole"; // Javascript will throw error

// But we can reassign new value to let or var also ..
myName = "Syed Zakeer Hussain"
myHomeTown = "Hyderabad"


// for var and let we can reassign values (remove old value and update new value)

// for const we need to declare and assign the value
// we can't reassign const value
const DOB = "29/01/1999";