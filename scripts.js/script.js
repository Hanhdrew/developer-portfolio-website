const btn = document.getElementById("nav-btn");
const nav = document.getElementById("nav-menu");

btn.addEventListener("click", () => {
  nav.classList.toggle("open");
});
