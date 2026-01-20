// Day 06: Objects in JavaScript
// ------------------------------
// Objects store data in key-value pairs.
// They are one of the most important data structures in JavaScript.

// 1. Creating an Object (Object Literal)
const user = {
  name: "Jaanvi",
  age: 21,
  role: "Developer",
  isActive: true
};

console.log(user);

// 2. Accessing Object Properties
console.log(user.name);       // dot notation
console.log(user["age"]);     // bracket notation

// 3. Adding New Properties
user.country = "India";
console.log(user);

// 4. Updating Properties
user.age = 22;
console.log(user);

// 5. Deleting Properties
delete user.isActive;
console.log(user);

// 6. Object with Methods
const person = {
  firstName: "Jaanvi",
  lastName: "Chouhan",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName());

// 7. Looping Through Objects (for...in)
for (let key in user) {
  console.log(key, ":", user[key]);
}

// 8. Object.keys(), Object.values(), Object.entries()
console.log(Object.keys(user));    // array of keys
console.log(Object.values(user));  // array of values
console.log(Object.entries(user)); // array of key-value pairs

// 9. Nested Objects
const student = {
  name: "Jaanvi",
  marks: {
    math: 90,
    science: 85
  }
};

console.log(student.marks.math);

// 10. Copying Objects
// Shallow copy using spread operator
const copiedUser = { ...user };
copiedUser.name = "New User";

console.log("Original:", user);
console.log("Copy:", copiedUser);

/*
INTERVIEW POINTS:
- Objects store data as key-value pairs
- Access using dot or bracket notation
- for...in is used to loop through objects
- Objects are reference types
- Spread operator creates shallow copy

MERN TIP:
- React props and state are objects
- API responses are mostly objects
- Node.js uses objects extensively
*/
