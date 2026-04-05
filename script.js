// Menu mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const contactButtons = document.querySelector('.contact-buttons');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    contactButtons.classList.toggle('active');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Désactiver clic droit sur images
document.addEventListener('contextmenu', e => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        alert('🚫 Téléchargement interdit - © Hajar Abid 2026');
    }
});

// Lightbox simple (optionnel)
document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', () => {
        alert('📸 Contacte-moi pour les droits d\'utilisation !\nthehelloslens@gmail.com');
    });
});
[11:41 PM, 04/04/2026] H: // Menu mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const contactButtons = document.querySelector('.contact-buttons');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    contactButtons.classList.toggle('active');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Désactiver clic droit sur images
document.addEventListener('contextmenu', e => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        alert('🚫 Téléchargement interdit - © Hajar Abid 2026');
    }
});

// Lightbox simple (optionnel)
document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', () => {
        alert('📸 Contacte-moi pour les droits d\'utilisation !\nthehelloslens@gmail.com');
    });
});