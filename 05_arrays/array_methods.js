// Day 05: Array Methods
// ---------------------

const nums = [1, 2, 3, 4, 5];

// 1. map() – transforms array
const squares = nums.map(num => num * num);
console.log("Squares:", squares);

// 2. filter() – filters elements
const evenNumbers = nums.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// 3. reduce() – reduces array to single value
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);

// 4. forEach() – iterates array
nums.forEach(num => {
  console.log("Number:", num);
});

// 5. includes()
console.log(nums.includes(3)); // true

/*
INTERVIEW POINTS:
- map, filter, reduce are higher-order functions
- reduce is commonly used in calculations
- These methods are used heavily in MERN projects
*/
