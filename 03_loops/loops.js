// Day 03: Loops in JavaScript
// ---------------------------
// Loops are used to execute a block of code repeatedly.

// 1. for loop (when number of iterations is known)
for (let i = 1; i <= 5; i++) {
  console.log("For loop iteration:", i);
}

// 2. while loop (condition-based loop)
let count = 1;
while (count <= 3) {
  console.log("While loop count:", count);
  count++;
}

// 3. do-while loop (runs at least once)
let num = 1;
do {
  console.log("Do-While number:", num);
  num++;
} while (num <= 2);

// 4. break statement (stops the loop)
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log("Break example:", i);
}

// 5. continue statement (skips current iteration)
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log("Continue example:", i);
}

// 6. for...of loop (used for arrays, strings)
// Gives VALUES
const fruits = ["Apple", "Banana", "Mango"];

for (const fruit of fruits) {
  console.log("Fruit:", fruit);
}

// for...of with string
const name = "JS";
for (const char of name) {
  console.log("Character:", char);
}

// 7. for...in loop (used for objects)
// Gives KEYS
const user = {
  name: "Jaanvi",
  role: "Developer",
  age: 21
};

for (const key in user) {
  console.log(key, ":", user[key]);
}

/*
INTERVIEW POINTS:
- for → when iterations count is known
- while → condition-based looping
- do-while → runs at least once
- for...of → iterates over VALUES (arrays, strings)
- for...in → iterates over KEYS (objects)
- break → exits loop
- continue → skips iteration

MERN TIP:
- for...of → commonly used with arrays
- for...in → used with objects (props, state, data)
*/
