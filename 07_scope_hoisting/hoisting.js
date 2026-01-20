// Day 07: Hoisting in JavaScript
// ------------------------------
// Hoisting moves declarations to the top of their scope.

// 1. Variable Hoisting with var
console.log(a); // undefined
var a = 10;

// 2. let & const (Temporal Dead Zone)
// console.log(b); ❌ Error
let b = 20;

// 3. Function Hoisting
sayHello();

function sayHello() {
  console.log("Hello!");
}

// 4. Function Expression (NOT hoisted)
// greet(); ❌ Error
const greet = function () {
  console.log("Hi!");
};

/*
INTERVIEW POINTS:
- var is hoisted with undefined
- let & const are hoisted but not initialized
- Function declarations are fully hoisted
*/
