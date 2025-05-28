const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function openEmail() {
    setTimeout(function () {
        window.location.href = "https://mail.google.com/mail/?view=cm&fs=1&to=doferreira09034@osae.pt";
    }, 500);
}
