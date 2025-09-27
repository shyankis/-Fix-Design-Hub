document.addEventListener('DOMContentLoaded', () => {

    // Initialize Lucide Icons
    lucide.createIcons();

    // Vanta.js Background Animation
    VANTA.NET({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x22d3ee,       // Cyan color for lines
        backgroundColor: 0x0a0a0a, // Background color
        points: 10.00,
        maxDistance: 20.00,
        spacing: 15.00,
        showDots: true
    });

    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // --- Header Scroll Effect ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Animate Sections and Children on Scroll ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // If the target has children with 'reveal-child', animate them sequentially
                const children = entry.target.querySelectorAll('.reveal-child');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('visible');
                    }, index * 200); // 200ms delay between each child animation
                });
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe main sections
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Also observe individual reveal-child elements if they are not inside a .reveal parent
    const revealChildrenNotInSection = document.querySelectorAll('.reveal-child:not(.reveal *)');
    revealChildrenNotInSection.forEach(el => observer.observe(el));
});
