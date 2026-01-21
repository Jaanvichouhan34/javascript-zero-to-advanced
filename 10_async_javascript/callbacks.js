// Day 10: Callbacks
// -----------------
// A callback is a function passed as an argument to another function.

function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 2000);
}

fetchData(function (data) {
  console.log(data);
});

/*
INTERVIEW POINTS:
- Callbacks handle async tasks
- Can cause callback hell
*/
