// Day 13: JavaScript Modules (ES6)
// --------------------------------

// This file is for understanding syntax
// Actual usage requires browser or Node module setup

// Exporting
export const PI = 3.14;

export function add(a, b) {
  return a + b;
}

// Default export
export default function greet() {
  console.log("Hello from module");
}

/*
IMPORT EXAMPLE:
import greet, { PI, add } from "./file.js";

INTERVIEW POINTS:
- Modules help organize code
- Uses import/export
- Used in React & Node.js
*/
