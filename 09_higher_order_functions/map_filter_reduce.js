// Day 09: Higher Order Functions
// ------------------------------
// Functions that take another function as argument or return a function

const numbers = [1, 2, 3, 4, 5];

// 1. map()
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// 2. filter()
const even = numbers.filter(num => num % 2 === 0);
console.log(even);

// 3. reduce()
const total = numbers.reduce((sum, num) => sum + num, 0);
console.log(total);

/*
INTERVIEW POINTS:
- map → transforms array
- filter → selects elements
- reduce → reduces to single value
- Extremely important for React & Node
*/
