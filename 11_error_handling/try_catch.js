// Day 11: Error Handling in JavaScript
// -----------------------------------
// Error handling prevents the program from crashing
// and helps in debugging and graceful failure.

// 1. Basic try...catch
try {
  let result = 10 / 2;
  console.log("Result:", result);
} catch (error) {
  console.log("Error occurred:", error.message);
}

// 2. Handling Reference Error
try {
  console.log(x); // x is not defined
} catch (error) {
  console.log("Reference Error:", error.message);
}

// 3. Custom Error using throw
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.log("Custom Error:", error.message);
}

// 4. finally block
try {
  console.log("Try block executed");
} catch {
  console.log("Catch block executed");
} finally {
  console.log("Finally block always executes");
}

/*
INTERVIEW POINTS:
- try...catch handles runtime errors
- throw creates custom errors
- finally runs regardless of error
- Used in API error handling (MERN)
*/
