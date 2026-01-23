// Day 12: Prototypes in JavaScript
// --------------------------------
// JavaScript is prototype-based language.

// Constructor Function
function User(name, role) {
  this.name = name;
  this.role = role;
}

// Adding method using prototype
User.prototype.getDetails = function () {
  return `${this.name} is a ${this.role}`;
};

const user1 = new User("Jaanvi", "Developer");
console.log(user1.getDetails());

/*
INTERVIEW POINTS:
- Every JS object has a prototype
- Prototype enables inheritance
- Methods added to prototype are shared
*/
