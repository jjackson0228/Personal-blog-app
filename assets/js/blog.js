// adding event listener with function to retrieve element from the DOM with id posts
document.addEventListener("DOMContentLoaded", () => {
  const postsContainer = document.getElementById("posts");
  // Function to display posts from localStorage
  const displayPosts = () => {
    const posts = JSON.parse(localStorage.getItem("post")) || [];
    postsContainer.innerHTML = "";
    posts.forEach((post) => {
      const postEL = document.createElement("div");
      postEL.classList.add("post-container");
      postEL.innerHTML = `
          <h2>${post.title}</h2>
          <ul>${post.content}</ul>
          <p><strong>Author:</strong> ${post.author}</p>
        `;
      postsContainer.appendChild(postEL);
    });
  };

  // Display posts on page load
  if (postsContainer) {
    displayPosts();
  }
});
// add event listener to back button made sure back button worked correctly also moved back button to blog.js cause it was giving error on index.html cause no button was there
const backButton = document.getElementById("back");
backButton.addEventListener("click", () => {
  window.location.href = "index.html";
});
