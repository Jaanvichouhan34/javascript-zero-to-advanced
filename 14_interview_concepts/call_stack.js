/*
========================================
JavaScript Call Stack
========================================

❓ What is Call Stack?
Call Stack is a data structure that keeps track of
function calls in JavaScript.

It follows:
👉 LIFO principle (Last In, First Out)
*/

/*
----------------------------------------
How Call Stack Works
----------------------------------------
- When a function is called → pushed to stack
- When function finishes → popped from stack
- JavaScript executes code from the TOP of stack
*/

function first() {
  console.log("First function");
}

function second() {
  first();
  console.log("Second function");
}

function third() {
  second();
  console.log("Third function");
}

third();

/*
Execution Order (Call Stack):
1. Global Execution Context
2. third()
3. second()
4. first()
5. first() removed
6. second() continues
7. second() removed
8. third() continues
9. third() removed
*/

/*
----------------------------------------
Visual Representation
----------------------------------------

| first()  |  <- pushed last, executed first
| second() |
| third()  |
| Global   |

(Stack clears when functions return)
*/

/*
----------------------------------------
Call Stack & Execution Context
----------------------------------------
- Every execution context is pushed to call stack
- Global Execution Context is at the bottom
- Only ONE call stack in JavaScript
*/

/*
----------------------------------------
Stack Overflow
----------------------------------------
When stack size exceeds limit due to
too many nested calls or infinite recursion
*/

function infinite() {
  infinite(); // ❌ keeps calling itself
}

// infinite(); // Uncomment → Stack Overflow Error

/*
----------------------------------------
IMPORTANT INTERVIEW POINTS
----------------------------------------

✔ JavaScript has ONE call stack
✔ Call stack is synchronous
✔ Blocking code blocks the stack
✔ Stack overflow happens due to deep recursion
*/

/*
----------------------------------------
INTERVIEW QUESTIONS
----------------------------------------

Q1. What is Call Stack?
👉 Tracks execution of functions using LIFO

Q2. Is JavaScript multi-threaded?
👉 No, single-threaded with one call stack

Q3. What causes stack overflow?
👉 Infinite recursion or too many nested calls
*/
