/*
========================================
JavaScript Event Loop
========================================

❓ What is Event Loop?
The Event Loop is a mechanism that allows JavaScript
to perform **non-blocking asynchronous operations**,
even though JS is single-threaded.

It manages:
- Call Stack
- Web APIs / Node APIs
- Callback Queue
- Microtask Queue (Promises)
*/

/*
----------------------------------------
How JavaScript Executes
----------------------------------------
1. Global Execution Context is created (call stack)
2. Functions are executed synchronously
3. Asynchronous callbacks are sent to Web APIs
4. When ready, they are added to Callback Queue
5. Event Loop pushes them to Call Stack if empty
*/

/*
----------------------------------------
Example: setTimeout vs Promise
----------------------------------------
*/

console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise resolved");
});

console.log("End");

/*
Expected Output:
Start
End
Promise resolved
Timeout callback

Explanation:
- Synchronous code executes first: "Start", "End"
- Promise goes to Microtask Queue → executed next
- setTimeout goes to Macrotask Queue → executed after Microtasks
*/

/*
----------------------------------------
Visual Representation
----------------------------------------

Call Stack   | Microtask Queue | Callback Queue
------------ | --------------- | --------------
Global       |                 |
console.log  |                 |
setTimeout   |                 |
Promise      | Promise.then    |
End          |                 |

Event Loop moves tasks from queues to stack
when stack is empty.
*/

/*
----------------------------------------
Key Points
----------------------------------------

✔ JS is single-threaded
✔ Event loop allows async behavior
✔ Microtasks (Promises, async/await) have priority over Macrotasks (setTimeout, setInterval)
✔ Browser & Node have slight differences
✔ Understanding Event Loop = understanding async behavior

*/

/*
----------------------------------------
INTERVIEW QUESTIONS
----------------------------------------

Q1. What is the Event Loop?
👉 Mechanism that manages async tasks in single-threaded JS

Q2. Why does Promise resolve before setTimeout 0?
👉 Promise goes to Microtask Queue → higher priority than Callback Queue

Q3. Can JS be multi-threaded?
👉 Only via Web Workers (separate threads)

Q4. How is async/await related to Event Loop?
👉 async/await uses Promises → Microtasks → Event Loop schedules them
*/
