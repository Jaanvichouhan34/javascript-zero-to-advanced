// Day 05: Arrays Basics
// ---------------------
// Arrays store multiple values in a single variable.

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// Access elements
console.log(numbers[0]); // first element
console.log(numbers.length); // array length

// Modify elements
numbers[2] = 10;
console.log(numbers);

// Add elements
numbers.push(6); // add at end
numbers.unshift(0); // add at start
console.log(numbers);

// Remove elements
numbers.pop(); // remove last
numbers.shift(); // remove first
console.log(numbers);

// Loop through array
for (let i = 0; i < numbers.length; i++) {
  console.log("Element:", numbers[i]);
}

/*
INTERVIEW POINTS:
- Arrays are zero-indexed
- Arrays are objects in JavaScript
- Used heavily in React for rendering lists
*/
