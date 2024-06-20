//added event listener and const for toggle button to switch from light and dark mode
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("#mode-toggle");

  //adding theme to be stored in local data
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.add(savedTheme);
  } else {
    //default to light mode
    body.classList.add(".light-mode");
  }
  //adding local storage to even listener click
  toggleButton.addEventListener("click", () => {
    if (body.classList.contains("light-mode")) {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark-mode");
    }
  });
});
