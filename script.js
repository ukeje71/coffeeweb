const hamburger = document.querySelector(".menu-bar");
const navMenu = document.querySelector(".link-list");

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
});