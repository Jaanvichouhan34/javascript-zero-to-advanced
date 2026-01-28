// Day 13: Template Literals
// ------------------------

const name = "Jaanvi";
const role = "Developer";

// Old way
console.log("Hello " + name + ", you are a " + role);

// ES6 way
console.log(`Hello ${name}, you are a ${role}`);

// Multi-line strings
const message = `
Welcome to JavaScript
Learning ES6 Features
`;

console.log(message);

/*
INTERVIEW POINTS:
- Uses backticks (` `)
- Supports interpolation
- Supports multi-line strings
*/
