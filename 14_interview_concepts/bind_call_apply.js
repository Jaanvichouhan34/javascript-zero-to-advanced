/*
========================================
JavaScript: bind(), call(), apply()
========================================

❓ What are bind, call, apply?

- They are used to **control the "this" keyword** inside a function.
- Very common in JS, React, and event handling.
- All three are function methods.

*/

/*
----------------------------------------
1️⃣ call()
----------------------------------------
- Calls a function with a **given this value** and **arguments separately**
*/

const person1 = {
  name: "Jaanvi",
  age: 21
};

function greet(city, country) {
  console.log(
    `Hello, my name is ${this.name}, I am ${this.age} years old. I live in ${city}, ${country}`
  );
}

// Using call
greet.call(person1, "Delhi", "India");

/*
Output:
Hello, my name is Jaanvi, I am 21 years old. I live in Delhi, India
*/

/*
----------------------------------------
2️⃣ apply()
----------------------------------------
- Similar to call(), but **arguments are passed as an array**
*/

greet.apply(person1, ["Mumbai", "India"]);

/*
Output:
Hello, my name is Jaanvi, I am 21 years old. I live in Mumbai, India
*/

/*
----------------------------------------
3️⃣ bind()
----------------------------------------
- Returns a **new function** with "this" bound
- Does NOT call immediately
*/

const greetPerson1 = greet.bind(person1, "Bangalore", "India");
greetPerson1();

/*
Output:
Hello, my name is Jaanvi, I am 21 years old. I live in Bangalore, India
*/

/*
----------------------------------------
Key Differences
----------------------------------------
1. call() → Calls function immediately, arguments separately
2. apply() → Calls function immediately, arguments as array
3. bind() → Returns new function, can be called later

*/

/*
----------------------------------------
INTERVIEW NOTES
----------------------------------------
✔ bind() is widely used in React (event handlers)
✔ call() & apply() are used for function borrowing
✔ Helps in maintaining correct 'this' context
✔ Interviewers often ask: difference between bind, call, apply
*/

/*
----------------------------------------
INTERVIEW QUESTIONS
----------------------------------------
Q1. What does bind() do?
👉 Returns a new function with a bound "this"

Q2. Difference between call() and apply()?
👉 call() → arguments separately  
👉 apply() → arguments as an array

Q3. Can bind() be used to borrow a function?
👉 Yes

Q4. Why bind is used in React?
👉 To maintain 'this' in class components
*/
