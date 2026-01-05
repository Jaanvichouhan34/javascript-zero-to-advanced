// Day 01: Data Types in JavaScript
// --------------------------------

// JavaScript is dynamically typed
// Data type is decided at runtime

// 1. Primitive Data Types

let numberType = 10;            // Number
let stringType = "Hello";       // String
let booleanType = true;         // Boolean
let undefinedType;              // Undefined
let nullType = null;            // Null
let bigIntType = 123456789n;    // BigInt
let symbolType = Symbol("id");  // Symbol

console.log(typeof numberType);
console.log(typeof stringType);
console.log(typeof booleanType);
console.log(typeof undefinedType);
console.log(typeof nullType);   // object (JavaScript bug)
console.log(typeof bigIntType);
console.log(typeof symbolType);

// 2. Non-Primitive Data Types

let arrayType = [1, 2, 3];
let objectType = { name: "Jaanvi", role: "Developer" };
let functionType = function () {
  return "Hello";
};

console.log(typeof arrayType);    // object
console.log(typeof objectType);   // object
console.log(typeof functionType); // function

/*
INTERVIEW POINTS:
- Primitive types store values directly
- Non-primitive types store references
- typeof null === "object" (famous JS interview question)
*/
