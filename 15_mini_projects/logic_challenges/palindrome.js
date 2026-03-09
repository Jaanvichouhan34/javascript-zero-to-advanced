// Palindrome Checker
// A palindrome reads the same forward and backward

function isPalindrome(str) {
  // Remove spaces and convert to lowercase
  const cleaned = str.toLowerCase().replace(/\s/g, "");

  // Reverse the string
  const reversed = cleaned.split("").reverse().join("");

  // Compare original and reversed
  return cleaned === reversed;
}

// Test cases
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("madam"));   // true
console.log(isPalindrome("hello"));   // false