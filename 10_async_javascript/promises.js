// Day 10: Promises
// ----------------
// Promise represents future completion or failure.

const fetchData = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("Data fetched successfully");
    } else {
      reject("Error fetching data");
    }
  }, 2000);
});

fetchData
  .then(result => console.log(result))
  .catch(error => console.log(error));

/*
INTERVIEW POINTS:
- Promises avoid callback hell
- States: pending, fulfilled, rejected
*/
