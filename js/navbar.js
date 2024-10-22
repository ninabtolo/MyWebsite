const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Alterna o menu no mobile
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Garante que o menu mobile seja fechado ao redimensionar para o desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
    }
});
