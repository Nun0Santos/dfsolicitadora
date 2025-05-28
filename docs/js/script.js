document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const navLinks = document.querySelector(".nav-links");
    const menuToggle = document.getElementById("menu-toggle");
    const navLinkItems = document.querySelectorAll(".nav-links a");

    function updateMenuTop() {
        if (header && navLinks) {
            const height = header.offsetHeight;
            const offset = 31;  // sobe o menu 30px em relação à base do header
            navLinks.style.top = (height - offset) + "px";
        }
    }

    updateMenuTop();
    window.addEventListener("resize", updateMenuTop);

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Fecha o menu quando clicas numa opção do menu
    navLinkItems.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
});
