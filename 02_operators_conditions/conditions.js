// Day 02: Conditional Statements
// ------------------------------

// 1. if statement
let age = 18;

if (age >= 18) {
  console.log("Eligible to vote");
}

// 2. if-else statement
let marks = 45;

if (marks >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// 3. if-else if ladder
let score = 85;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}

// 4. switch statement
let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Invalid day");
}

// 5. Ternary Operator
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);

/*
INTERVIEW POINTS:
- switch is used when multiple conditions exist
- ternary operator is shorthand for if-else
*/
