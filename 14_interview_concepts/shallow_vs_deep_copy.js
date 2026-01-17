// JavaScript: Shallow Copy vs Deep Copy
// --------------------------------------

// Why this matters:
// In JS, objects and arrays are **reference types**.
// Understanding copy behavior is crucial for:
// - Avoiding bugs
// - State management in React
// - Handling data in Node/MERN apps

//-------------------------------------------------------
// 1️⃣ SHALLOW COPY
//-------------------------------------------------------

// Only copies the **top-level** properties
// Nested objects/arrays remain references

const user1 = {
  name: "Jaanvi",
  address: {
    city: "Delhi",
    zip: 110001
  }
};

// Shallow copy using Object.assign
const userShallow1 = Object.assign({}, user1);

// Shallow copy using spread operator
const userShallow2 = { ...user1 };

// Test mutation
userShallow1.name = "Developer";        // ✅ top-level change
userShallow1.address.city = "Mumbai";   // ⚠ nested object changes original

console.log(user1.address.city); // Output: "Mumbai" - affected!
console.log(userShallow1.name);  // Output: "Developer"

// Key takeaway:
// - Top-level props are copied
// - Nested objects remain references

//-------------------------------------------------------
// 2️⃣ DEEP COPY
//-------------------------------------------------------

// Copies **everything recursively**, including nested objects
// Several ways:

// 2a. JSON.parse / JSON.stringify (simple objects)
const userDeep1 = JSON.parse(JSON.stringify(user1));

userDeep1.address.city = "Bangalore";

console.log(user1.address.city); // Output: "Mumbai" - NOT affected
console.log(userDeep1.address.city); // Output: "Bangalore"

// 2b. Using structuredClone (modern JS)
const userDeep2 = structuredClone(user1);
userDeep2.address.zip = 560001;

console.log(user1.address.zip);   // Output: 110001
console.log(userDeep2.address.zip); // Output: 560001

//-------------------------------------------------------
// 3️⃣ Arrays Example
//-------------------------------------------------------

const arr1 = [1, [2, 3], 4];

// Shallow copy
const arrShallow = [...arr1];
arrShallow[1][0] = 999;

console.log(arr1[1][0]); // 999 ❌ nested array affected

// Deep copy
const arrDeep = JSON.parse(JSON.stringify(arr1));
arrDeep[1][0] = 888;

console.log(arr1[1][0]); // 999 ✅ unaffected
console.log(arrDeep[1][0]); // 888

//-------------------------------------------------------
// 4️⃣ Interview Notes
//-------------------------------------------------------

// 1. Shallow copy = top-level copy only
// 2. Deep copy = recursive copy, preserves original
// 3. JSON method cannot copy functions, undefined, symbols
// 4. structuredClone = modern, supports most types
// 5. Spread operator is shallow only
// 6. MERN relevance:
//    - React state updates (avoid mutating state directly)
//    - Backend objects manipulation in Node.js

//-------------------------------------------------------
// 5️⃣ Quick Tip
//-------------------------------------------------------

// Whenever you work with nested objects/arrays:
// - Ask yourself: "Do I need shallow or deep copy?"
// - Use structuredClone / JSON for deep cloning
// - Use spread / Object.assign for shallow copying

