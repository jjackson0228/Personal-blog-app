//added event listener and const for toggle button to switch from light and dark mode
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector("#mode-toggle");
  const body = document.body;

  // get saved theme from storage
  const savedTheme = localStorage.getItem("theme");

  // function to set theme class on body
  const setTheme = (theme) => {
    body.classList.remove("light-mode", "dark-mode");
    body.classList.add(theme);
  };
  //set theme based on saved theme or default to light
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setTheme("light-mode");
    localStorage.setItem("theme", "light-mode");
  }
  //add event listener to toggle theme
  toggleButton.addEventListener("click", () => {
    if (body.classList.contains("light-mode")) {
      setTheme("dark-mode");
      localStorage.setItem("theme", "dark-mode");
    } else {
      setTheme("light-mode");
      localStorage.setItem("theme", "light-mode");
    }
  });
});
