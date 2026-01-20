// Day 08: Closures
// ----------------
// A closure is a function that remembers variables from its outer scope.

function outerFunction() {
  let outerVar = "I am outer";

  function innerFunction() {
    console.log(outerVar);
  }

  return innerFunction;
}

const closureFunc = outerFunction();
closureFunc();

/*
INTERVIEW POINTS:
- Closures remember lexical scope
- Used in data hiding
- Used in React hooks
*/
