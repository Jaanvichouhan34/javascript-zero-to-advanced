function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "JavaScript Basics" },
        { id: 2, title: "Understanding Promises" },
      ]);
    }, 1500);
  });
}

fetchPosts().then((posts) => {
  console.log("Posts:", posts);
});