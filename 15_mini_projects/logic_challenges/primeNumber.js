// Prime Number Checker
// A prime number is divisible only by 1 and itself

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Test
console.log(isPrime(7));  // true
console.log(isPrime(10)); // false