// Day 04: Arrow Functions
// -----------------------
// Arrow functions are a shorter syntax for writing functions.

// 1. Basic arrow function
const sayHello = () => {
  console.log("Hello from arrow function");
};
sayHello();

// 2. Arrow function with parameters
const add = (a, b) => {
  return a + b;
};
console.log(add(2, 3));

// 3. Arrow function with implicit return
const multiply = (a, b) => a * b;
console.log(multiply(4, 5));

// 4. Arrow function with single parameter
const square = num => num * num;
console.log(square(7));

/*
INTERVIEW POINTS:
- Arrow functions are NOT hoisted
- Arrow functions do NOT have their own 'this'
- Widely used in React and modern JavaScript
*/
