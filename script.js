// Lucide Icons initialization
lucide.createIcons();

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('#mobile-menu a, #header a').forEach(link => {
    link.addEventListener('click', () => {
        // Check if it's a link to a section on the page
        if (link.getAttribute('href').startsWith('#') && !link.parentElement.classList.contains('md:hidden')) {
             mobileMenu.classList.add('hidden');
        } else if(link.parentElement.parentElement.id === 'mobile-menu') {
            mobileMenu.classList.add('hidden');
        }
    });
});

// Header style change on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('glass-effect');
    } else {
        header.classList.remove('glass-effect');
    }
});

// Scroll reveal animation
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

revealElements.forEach(el => {
    observer.observe(el);
});
