/*
========================================
JavaScript Execution Context
========================================

❓ What is Execution Context?
Execution Context is the environment in which JavaScript code is executed.

Whenever JavaScript runs any code, it creates an execution context.
*/

/*
----------------------------------------
Types of Execution Context
----------------------------------------
1. Global Execution Context (GEC)
2. Function Execution Context (FEC)
3. Eval Execution Context (rarely used)
*/

/*
----------------------------------------
1️⃣ Global Execution Context
----------------------------------------
- Created when JS file first runs
- Only ONE global execution context
- 'this' keyword refers to:
  - window (browser)
  - global (Node.js)
*/

var a = 10;

function greet() {
  console.log("Hello");
}

greet();

/*
----------------------------------------
How Execution Context is Created?
----------------------------------------
Execution happens in TWO PHASES:

1️⃣ Memory Creation Phase (Hoisting Phase)
2️⃣ Code Execution Phase
*/

/*
----------------------------------------
1️⃣ Memory Creation Phase
----------------------------------------
- Variables → allocated memory → undefined
- Functions → stored completely
*/

console.log(x); // undefined (not error)
var x = 5;

hello(); // works due to hoisting
function hello() {
  console.log("Hello from function");
}

/*
Memory Phase:
x → undefined
hello → function reference
*/

/*
----------------------------------------
2️⃣ Code Execution Phase
----------------------------------------
- Values are assigned
- Functions are executed line by line
*/

var y = 20;
y = y + 5;
console.log(y); // 25

/*
----------------------------------------
2️⃣ Function Execution Context (FEC)
----------------------------------------
- Created whenever a function is called
- Each function call creates a NEW execution context
- Has its own:
  - Memory phase
  - Execution phase
*/

function add(a, b) {
  var result = a + b;
  return result;
}

var sum = add(2, 3);
console.log(sum);

/*
Call Flow:
Global Execution Context
 → add() Execution Context
 → return value
 → back to Global Context
*/

/*
----------------------------------------
IMPORTANT INTERVIEW POINTS
----------------------------------------

✔ JavaScript is SINGLE-THREADED
✔ JavaScript executes code SYNCHRONOUSLY
✔ Execution context is managed using CALL STACK
✔ Variables declared with var are hoisted as undefined
✔ Functions are fully hoisted
*/

/*
----------------------------------------
INTERVIEW QUESTIONS
----------------------------------------

Q1. What is Execution Context?
👉 Environment where JS code is executed

Q2. How many global execution contexts exist?
👉 Only ONE

Q3. What are the phases of execution?
👉 Memory Creation Phase & Code Execution Phase

Q4. Why functions are hoisted?
👉 Stored completely during memory phase
*/
