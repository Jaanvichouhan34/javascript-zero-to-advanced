// Day 10: async / await
// ---------------------
// Cleaner way to write promises

function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Async/Await Data");
    }, 2000);
  });
}

async function getData() {
  const result = await fetchData();
  console.log(result);
}

getData();

/*
INTERVIEW POINTS:
- async returns a promise
- await pauses execution until promise resolves
- Used heavily in API calls (MERN)
*/
