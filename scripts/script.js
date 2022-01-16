const nav = document.querySelector(".nav");
const login = document.querySelector(".login");
const openBtnNav = document.querySelector(".nav__open");
const openBtnLogin = document.querySelector(".login__open");
const arrow = document.querySelector(".nav__open img");
openBtnNav.addEventListener("click", () => {
  nav.classList.toggle("open");
});
openBtnLogin.addEventListener("click", () => {
  login.classList.toggle("open");
});
