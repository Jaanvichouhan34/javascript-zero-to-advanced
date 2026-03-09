// Fibonacci Generator
// Each number is the sum of the previous two numbers

function generateFibonacci(n) {
  let fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

// Example
console.log(generateFibonacci(10));