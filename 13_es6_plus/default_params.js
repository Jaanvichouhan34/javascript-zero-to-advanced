// Day 13: Default Parameters
// --------------------------

function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}

greet("Jaanvi");
greet();

/*
INTERVIEW POINTS:
- Prevents undefined values
- Cleaner function definitions
*/
