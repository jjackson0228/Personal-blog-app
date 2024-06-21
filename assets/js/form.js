// started to add to the form .js
document
  .getElementById("blog-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = {
      username: document.getElementById("username").value,
      blogTitle: document.getElementById("blog-title").value,
      blogContent: document.getElementById("blog-content").value,
    };

    // Save form data to local storage
    localStorage.setItem("blogFormData", JSON.stringify(formData));

    // Navigate to the blog.html page
    window.location.href = "blog.html";
  });
