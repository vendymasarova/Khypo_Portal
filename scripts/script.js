const nav = document.querySelector(".nav");
const login = document.querySelector(".sidebar");
const openBtnNav = document.querySelector(".nav__open");
const openBtnNavImg = document.querySelector(".nav__open--img");
const openBtnLogin = document.querySelector(".sidebar__open");
const openBtnLoginImg = document.querySelector(".sidebar__open--img");
const arrow = document.querySelector(".nav__open img");
const links = document.querySelectorAll(".nav__links--item");
const notification = document.querySelector(".notification");

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

//NAVIGATION LINKS
nav.addEventListener("click", (e) => {
  const clicked = e.target.closest(".nav__links--item");
  console.log(clicked);
  if (!clicked) return;

  links.forEach((link) => {
    link.classList.remove("active");
  });

  clicked.classList.add("active");

  // if (clicked.classList.contains("active")) {
  //   notification.style.backgroundColor = "blue";
  // } else {
  //   notification.style.backgroundColor = "white";
  // }
});
