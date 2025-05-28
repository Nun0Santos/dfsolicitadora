document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const navLinks = document.querySelector(".nav-links");
    const menuToggle = document.getElementById("menu-toggle");

    function updateMenuTop() {
        if (header && navLinks) {
            const height = header.offsetHeight;
            navLinks.style.top = height + "px"; // alinha com navbar
        }
    }

    // Chamada inicial (ligeiramente atrasada para garantir layout calculado)
    setTimeout(updateMenuTop, 50); 

    window.addEventListener("resize", updateMenuTop);

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Fecha o menu quando se clica num link (em mobile)
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
});
