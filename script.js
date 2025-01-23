// Hamburger Menu Toggle
const hamburgerMenu = document.getElementById("hamburger-menu");
const navList = document.querySelector(".nav-list");

hamburgerMenu.addEventListener("click", () => {
    navList.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
});

