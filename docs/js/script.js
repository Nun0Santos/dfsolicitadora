document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const navLinks = document.querySelector(".nav-links");
    const menuToggle = document.getElementById("menu-toggle");

    function updateMenuTop() {
        if (header && navLinks) {
            const height = header.offsetHeight;
            const offset = 30;  // sobe o menu 20px em relação à base do header
            navLinks.style.top = (height - offset) + "px";
        }
    }

    updateMenuTop();
    window.addEventListener("resize", updateMenuTop);

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
