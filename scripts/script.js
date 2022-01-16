const nav = document.querySelector(".nav");
const login = document.querySelector(".sidebar");
const openBtnNav = document.querySelector(".nav__open");
const openBtnNavImg = document.querySelector(".nav__open--img");
const openBtnLogin = document.querySelector(".sidebar__open");
const openBtnLoginImg = document.querySelector(".sidebar__open--img");
const arrow = document.querySelector(".nav__open img");

//NAVIGATION
openBtnNav.addEventListener("click", () => {
  nav.classList.toggle("open");
  if (nav.classList.contains("open")) {
    openBtnNavImg.style.transform = "rotate(0)";
  } else {
    openBtnNavImg.style.transform = "rotate(180deg)";
  }
});

//SIDEBAR
openBtnLogin.addEventListener("click", () => {
  login.classList.toggle("open");
  if (login.classList.contains("open")) {
    openBtnLoginImg.style.transform = "rotate(180deg)";
  } else {
    openBtnLoginImg.style.transform = "rotate(0)";
  }
});
