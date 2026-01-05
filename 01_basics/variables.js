// Day 01: Variables in JavaScript
// -------------------------------
// Variables are used to store data values.

// 1. var (old way - function scoped)
var name = "Jaanvi";
console.log("Name:", name);

// var can be redeclared (NOT recommended)
var name = "JavaScript Learner";
console.log("Updated Name:", name);

// 2. let (modern way - block scoped)
let age = 21;
console.log("Age:", age);

// let can be updated but NOT redeclared
age = 22;
console.log("Updated Age:", age);

// 3. const (constant - block scoped)
const country = "India";
console.log("Country:", country);

// const cannot be reassigned
// country = "USA"; // ❌ Error

/*
INTERVIEW POINTS:
- Prefer const by default
- Use let if value needs to change
- Avoid var in modern JavaScript
*/
