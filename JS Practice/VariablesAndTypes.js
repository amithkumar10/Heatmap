//const
//let
//var



// **var** -- is outdated because it is function-scoped, allows redeclaration, and is hoisted with initialization, which leads to unpredictable behavior and hard-to-debug bugs in large codebases. Its biggest issue is the scope leak—variables declared with var inside blocks like if or for are still accessible outside those blocks, breaking encapsulation and increasing the risk of accidental overwrites. Modern JavaScript replaces var with let and const, which are block-scoped, safer, and enforce cleaner, more maintainable code.

var name ="Amith";
console.log(name + "" + "(var)");
name = "Kumar";
console.log(name + "" + "(var)");

var age = 22;
console.log(age + "" + "(var)");

//MAIN ISSUE WITH VAR IS THAT IT ALLOWS REDECLARATION
for (var i = 0; i < 3; i++) {}
console.log(i); // 3 ✅
//In the above example, the variable i is accessible outside the for loop, which can lead to unintended consequences if i is used elsewhere in the code.

//let and const do not allow redeclaration
// for (let/const j = 0; j < 3; j++) {}
// console.log(j); // ReferenceError: j is not defined ❌

//Hoisting issue
console.log(scoree); //undefined
var scoree = 140;
console.log(scoree + "" + "(var)");

// **let** -- is block-scoped, allowing variables to be confined to the block, statement, or expression where they are defined. This prevents scope leakage and accidental overwrites, enhancing code safety. Variables declared with let can be reassigned but not redeclared in the same scope, promoting clearer intent. Additionally, let is hoisted without initialization, meaning it cannot be accessed before its declaration, reducing runtime errors. Overall, let provides a more predictable and maintainable approach to variable management compared to var.


let score = 100;
console.log(score + "" + "(let)");
let name2 = "Amith Kumar";
console.log(name2 + "" + "(let)");

name2 = "Mithu"
console.log(name2 + "" + "(let)");

//hoisting issue resolved
// console.log(points); //gives error
let points = 50;
console.log(points + "" + "(let)");


// **const** -- is also block-scoped like let, but it is used to declare variables that are meant to be constant references. Variables declared with const cannot be reassigned or redeclared in the same scope, which helps prevent accidental changes and promotes immutability. However, if the const variable holds an object or array, the contents of that object or array can still be modified. Similar to let, const is hoisted without initialization, so it cannot be accessed before its declaration. Using const encourages developers to signal intent clearly, making code easier to understand and maintain.


const pi = 3.14;
console.log(pi + "" + "(const)");
const name1 = "Amith";
console.log(name1 + "" + "(const)");
// name1 = "Kumar"; //will give error
// console.log(name1 + "" + "(const)");

//hoisting issue resolved
// console.log(rate); //gives error
const rate = 5;
console.log(rate + "" + "(const)");

