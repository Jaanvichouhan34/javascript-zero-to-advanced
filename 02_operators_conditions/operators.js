// Day 02: Operators in JavaScript
// -------------------------------

// 1. Arithmetic Operators
let a = 10;
let b = 3;

console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus

// 2. Assignment Operators
let x = 5;
x += 2; // x = x + 2
console.log(x);

// 3. Comparison Operators
console.log(10 == "10");  // true (loose equality)
console.log(10 === "10"); // false (strict equality)
console.log(10 != 5);
console.log(10 > 5);

// 4. Logical Operators
let isAdult = true;
let hasID = false;

console.log(isAdult && hasID); // AND
console.log(isAdult || hasID); // OR
console.log(!isAdult);         // NOT

/*
INTERVIEW POINTS:
- Always prefer === over ==
- == checks value only
- === checks value + data type
*/
