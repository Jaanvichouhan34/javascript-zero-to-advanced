// Polyfills in JavaScript
// ----------------------

// What is a Polyfill?
// A polyfill is code that implements a feature on older browsers that do not support it natively.
// It's used to make modern JS features compatible across all environments.

// Example: Array.prototype.map polyfill
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    }
    return result;
  };
}

const arr = [1, 2, 3];
const doubled = arr.myMap(x => x * 2);
console.log(doubled); // [2, 4, 6]

// Another Example: String.includes
if (!String.prototype.includes) {
  String.prototype.includes = function(search) {
    return this.indexOf(search) !== -1;
  };
}

console.log("Hello World".includes("World")); // true

/*
INTERVIEW TIPS:
- Used for backward compatibility
- Often asked in MERN/React interviews
- Example question: "Write your own polyfill for map/filter/reduce"
*/
