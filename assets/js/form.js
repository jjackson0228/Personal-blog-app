// started to add to the form .js
document.addEventListener("DOMContentLoaded", () => {
  const blogForm = document.getElementById("blog-form");
  //  added if event listener to check for submission the prevent default stops the page from defaulting to reloading or navigating to new url
  if (blogForm) {
    blogForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // gave all values to form locations to save the data and trim the excess spaces if necessary
      const username = document.getElementById("username").value.trim();
      const title = document.getElementById("blog-title").value.trim();
      const content = document.getElementById("blog-content").value.trim();
      const errorMessage = document.getElementById("errorMessage");
      // added this if for a error message to make sure all the form is finished and nothing is left empty
      if (!username || !title || !content) {
        errorMessage.style.display = "block";
      } else {
        errorMessage.style.display = "none";
        const newPost = { author: username, title: title, content: content };
        const posts = JSON.parse(localStorage.getItem("post")) || [];
        posts.push(newPost);
        localStorage.setItem("post", JSON.stringify(posts));
        window.location.href = "blog.html"; // Redirect to the posts page
      }
    });
  }
});
