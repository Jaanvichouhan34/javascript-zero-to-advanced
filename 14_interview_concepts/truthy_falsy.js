// Truthy and Falsy Values in JavaScript
// ------------------------------------

// Falsy values: false values in JS
// There are only 6 falsy values
console.log(Boolean(false)); // false
console.log(Boolean(0));     // false
console.log(Boolean(""));    // false
console.log(Boolean(null));  // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));   // false

// Everything else is truthy
console.log(Boolean(true));  // true
console.log(Boolean(1));     // true
console.log(Boolean("Hello"));// true
console.log(Boolean([]));     // true
console.log(Boolean({}));     // true

/*
INTERVIEW TIPS:
- Know all falsy values
- Common trap: if("") or if(0) might not behave as expected
- MERN relevance: used in conditional rendering, validations
*/
