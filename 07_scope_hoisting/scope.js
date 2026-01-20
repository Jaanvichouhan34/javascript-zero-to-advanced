// Day 07: Scope in JavaScript
// ---------------------------
// Scope determines where variables are accessible.

// 1. Global Scope
let globalVar = "I am global";

function showGlobal() {
  console.log(globalVar);
}
showGlobal();

// 2. Function Scope
function functionScope() {
  let functionVar = "I am function scoped";
  console.log(functionVar);
}
functionScope();
// console.log(functionVar); ❌ Error

// 3. Block Scope (let & const)
if (true) {
  let blockVar = "Block scoped";
  const blockConst = "Also block scoped";
  console.log(blockVar, blockConst);
}

// var is NOT block scoped
if (true) {
  var notBlockScoped = "I escape the block";
}
console.log(notBlockScoped);

/*
INTERVIEW POINTS:
- let & const → block scoped
- var → function scoped
- Prefer let & const
*/
