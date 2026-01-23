// Day 12: Classes in JavaScript
// -----------------------------
// Classes are syntactic sugar over prototypes.

// Class Declaration
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person1 = new Person("Jaanvi", 21);
person1.greet();

// Inheritance
class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  getCourse() {
    console.log(`${this.name} is enrolled in ${this.course}`);
  }
}

const student1 = new Student("Jaanvi", 21, "CSE");
student1.getCourse();

/*
INTERVIEW POINTS:
- class uses constructor()
- extends is used for inheritance
- super() calls parent constructor
- Used heavily in backend & JS OOP
*/
