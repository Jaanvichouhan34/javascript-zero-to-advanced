// Custom implementation of Array.filter()

Array.prototype.myFilter = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

// Example
const numbers = [1, 2, 3, 4, 5];

const even = numbers.myFilter((num) => num % 2 === 0);

console.log(even);