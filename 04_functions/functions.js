// Day 04: Functions in JavaScript
// --------------------------------
// Functions are reusable blocks of code.

// 1. Function Declaration
function greet() {
  console.log("Hello, welcome to JavaScript!");
}
greet();

// 2. Function with parameters
function add(a, b) {
  return a + b;
}
console.log("Sum:", add(5, 3));

// 3. Function Expression
const multiply = function (a, b) {
  return a * b;
};
console.log("Product:", multiply(4, 2));

// 4. Default Parameters
function greetUser(name = "Guest") {
  console.log("Hello", name);
}
greetUser();
greetUser("Jaanvi");

// 5. Returning values
function square(num) {
  return num * num;
}
console.log("Square:", square(6));

/*
INTERVIEW POINTS:
- Functions help avoid code repetition
- Function declarations are hoisted
- Function expressions are NOT hoisted
*/
