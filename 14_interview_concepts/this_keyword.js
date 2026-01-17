/*
========================================
JavaScript "this" Keyword
========================================

❓ What is 'this'?
- 'this' is a reference to the execution context
- Its value depends on HOW a function is called
- Not where it is defined
*/

/*
----------------------------------------
1️⃣ Global Context
----------------------------------------
In the global execution context:
- Browser → 'this' = window object
- Node.js → 'this' = global object
*/

console.log(this); // window (browser) or {} (Node.js)

/*
----------------------------------------
2️⃣ Function Context
----------------------------------------
- Regular functions
- Arrow functions
*/

// Regular function
function showThis() {
  console.log(this);
}
showThis(); 
// In browser → window
// In strict mode → undefined

// Arrow function
const arrowFunc = () => {
  console.log(this);
};
arrowFunc();
// 'this' inside arrow function is inherited from outer context

/*
----------------------------------------
3️⃣ Object Method
----------------------------------------
- 'this' refers to the object calling the method
*/

const user = {
  name: "Jaanvi",
  greet: function () {
    console.log("Hello " + this.name);
  },
};

user.greet(); // Hello Jaanvi

/*
----------------------------------------
4️⃣ Changing 'this' using call, apply, bind
----------------------------------------
*/

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

function sayHello(greeting) {
  console.log(`${greeting}, I am ${this.name}`);
}

// call → invokes immediately
sayHello.call(person1, "Hi"); // Hi, I am Alice
sayHello.call(person2, "Hello"); // Hello, I am Bob

// apply → similar to call, arguments as array
sayHello.apply(person1, ["Hey"]); // Hey, I am Alice

// bind → returns a new function with 'this' fixed
const sayHelloBob = sayHello.bind(person2, "Hi there");
sayHelloBob(); // Hi there, I am Bob

/*
----------------------------------------
5️⃣ Class Context
----------------------------------------
*/

class Student {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
}

const s1 = new Student("Jaanvi");
s1.greet(); // Hello, I am Jaanvi

/*
----------------------------------------
6️⃣ Important Points (Interview)
----------------------------------------

✔ Arrow functions do NOT have their own 'this'
✔ Regular functions’ 'this' depends on HOW function is called
✔ call() / apply() / bind() can change 'this'
✔ 'this' in classes refers to instance object
✔ 'this' in global scope → window (browser), global (Node.js)
*/

/*
----------------------------------------
7️⃣ Common Interview Questions
----------------------------------------

Q1. What is the value of 'this' in arrow functions?
👉 Inherited from the outer scope

Q2. Difference between bind(), call(), apply()?
👉 bind → returns new function
👉 call → executes immediately, args separated by commas
👉 apply → executes immediately, args as array

Q3. 'this' in object method?
👉 Refers to the object calling the method

Q4. 'this' in class method?
👉 Refers to the instance of the class
*/
