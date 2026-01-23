// Day 13: Arrow Functions (ES6)
// ----------------------------

// Normal function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

// Single parameter
const square = n => n * n;

// No parameters
const greet = () => "Hello!";

console.log(addArrow(2, 3));
console.log(square(5));
console.log(greet());

/*
INTERVIEW POINTS:
- Shorter syntax
- No own 'this'
- Not hoisted
- Widely used in React
*/
