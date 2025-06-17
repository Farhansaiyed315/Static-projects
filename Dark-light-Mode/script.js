const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "Switch to Light Mode 🌞";
  } else {
    toggleBtn.textContent = "Switch to Dark Mode 🌙";
  }
});
