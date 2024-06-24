// adding event listener with function to retrieve element from the DOM with id posts
document.addEventListener("DOMContentLoaded", () => {
  const postsContainer = document.getElementById("posts");
  // Function to display posts from localStorage
  const displayPosts = () => {
    const posts = JSON.parse(localStorage.getItem("post")) || [];
    postsContainer.innerHTML = "";
    posts.forEach((post) => {
      const postEL = document.createElement("div");
      postEL.classList.add("post-container"); //each post will have its own container
      postEL.innerHTML = `
          <h2>${post.title}</h2>  
          <li>${post.content}</>
          <p><strong>Author:</strong> ${post.author}</p>
        `; //above code makes a string to post have each post with value of h2, li, p<strong>
      postsContainer.appendChild(postEL);
    });
  };

  // Displays posts on page load
  if (postsContainer) {
    displayPosts();
  }
});
// add event listener to back button made sure back button worked correctly also moved back button to blog.js cause it was giving error on index.html cause no button was there
const backButton = document.getElementById("back");
backButton.addEventListener("click", () => {
  window.location.href = "index.html";
});
