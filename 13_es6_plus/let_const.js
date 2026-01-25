// Day 13: let & const (ES6)
// ------------------------

// var (function scoped - avoid)
var x = 10;
var x = 20; // allowed (problematic)

// let (block scoped)
let y = 10;
// let y = 20; ❌ redeclaration not allowed
y = 20; // allowed

// const (block scoped, cannot be reassigned)
const z = 30;
// z = 40; ❌ error

// const with objects (mutation allowed)
const user = { name: "Jaanvi" };
user.name = "Developer"; // allowed

/*
INTERVIEW POINTS:
- Prefer const by default
- Use let if reassignment is needed
- Avoid var in modern JavaScript
*/
