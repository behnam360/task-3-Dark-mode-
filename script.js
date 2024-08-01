const modeSwitch = document.getElementById("mode-switch");
modeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
});
