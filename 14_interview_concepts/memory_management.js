// Memory Management in JavaScript
// --------------------------------

// JavaScript memory is divided mainly into:
// 1️⃣ Stack memory - stores primitive types, function calls (LIFO)
// 2️⃣ Heap memory - stores objects, arrays, dynamic memory

// Example - Stack memory
function sum(a, b) {
  return a + b;
}
sum(10, 20); // Function call stored on stack

// Example - Heap memory
const user = {
  name: "Jaanvi",
  age: 21
};
// Object is stored in heap, reference in stack

// Garbage Collection (GC)
// -----------------------
// JS automatically frees memory that is no longer reachable
let data = { temp: 123 };
data = null; // GC can now remove the object

// Closures & memory
function outer() {
  let counter = 0;
  return function inner() {
    counter++;
    console.log(counter);
  }
}
const myCounter = outer(); // 'counter' stays in memory due to closure
myCounter(); // 1
myCounter(); // 2

/*
INTERVIEW TIPS:
1. Understand stack vs heap
2. Know how GC works
3. Closures can keep memory alive
4. Memory leaks can happen if references are not cleared
5. Browser performance optimization often involves careful memory handling
*/
