// Day 13: Spread & Rest Operator
// ------------------------------

// Spread operator (...)
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2);

// Spread with objects
const user = { name: "Jaanvi", age: 21 };
const updatedUser = { ...user, role: "Developer" };

console.log(updatedUser);

// Rest operator
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4));

/*
INTERVIEW POINTS:
- Spread copies data (shallow copy)
- Rest collects arguments
- Very common in MERN apps
*/
