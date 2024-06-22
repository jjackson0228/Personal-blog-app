//added event listener and const for toggle button to switch from light and dark mode
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector("#mode-toggle");
  const backButton = document.getElementById("back");
  const body = document.body;
  //   added mainEL and headerEL
  const mainEL = document.body.querySelector("main");
  const headerEL = document.body.querySelector("header");
  console.log(mainEL);
  // get saved theme from storage
  const savedTheme = localStorage.getItem("theme");

  // function to set theme class on body
  const setTheme = (theme) => {
    body.classList.remove("light", "dark");
    body.classList.add(theme);
    mainEL.classList.remove("light", "dark");
    mainEL.classList.add(theme);
    headerEL.classList.remove("light", "dark");
    headerEL.classList.add(theme);

    if (theme === "light") {
      toggleButton.src = "sun.png";
    } else {
      toggleButton.src = "moon.png";
    }
  };
  //set theme based on saved theme or default to light
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setTheme("light");
    localStorage.setItem("theme", "light");
  }
  //add event listener to toggle theme
  document.querySelector("#mode-toggle").addEventListener("click", () => {
    if (body.classList.contains("light")) {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  });
  // add event listener to back button made sure back button worked correctly
  backButton.addEventListener("click", () => {
    window.location.href = "index.html";
  });
});
