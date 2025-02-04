document.addEventListener("DOMContentLoaded", function () {
    const menuBar = document.getElementById("menu-bar");
    const navList = document.querySelector(".nav-link");

    menuBar.addEventListener("click", function () {
        navList.classList.toggle("active");
    });
});
