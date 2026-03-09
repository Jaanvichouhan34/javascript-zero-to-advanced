// Simulating API call with Promise

function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
      ]);
    }, 2000);
  });
}

fetchUsers().then((users) => {
  console.log("Users:", users);
});