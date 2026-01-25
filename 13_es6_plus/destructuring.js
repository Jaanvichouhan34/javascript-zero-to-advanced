// Day 13: Destructuring
// --------------------

// Array Destructuring
const numbers = [1, 2, 3];
const [a, b, c] = numbers;

console.log(a, b, c);

// Object Destructuring
const user = {
  name: "Jaanvi",
  age: 21,
  role: "Developer"
};

const { name, age } = user;
console.log(name, age);

/*
INTERVIEW POINTS:
- Extract values easily
- Used heavily in React props & state
*/
