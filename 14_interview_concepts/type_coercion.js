// Type Coercion in JavaScript
// ---------------------------

// Type coercion is automatic or implicit conversion of values from one type to another
// Examples:

console.log("5" + 1);   // "51"  -> string concatenation (implicit conversion)
console.log("5" - 1);   // 4     -> string converted to number
console.log(5 == "5");  // true  -> loose equality coerces string to number
console.log(5 === "5"); // false -> strict equality, no coercion

// Boolean coercion
console.log(Boolean(0));      // false
console.log(Boolean(""));     // false
console.log(Boolean("Hello"));// true

/*
INTERVIEW TIPS:
- Difference between == and ===
- Implicit vs explicit coercion
- Common traps in JS: '0', false, '', null
- Often asked in frontend/React interviews
*/
