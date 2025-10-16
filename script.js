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
        color: 0x22d3ee,
        backgroundColor: 0x0a0a0a,
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
                const children = entry.target.querySelectorAll('.reveal-child');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('visible');
                    }, index * 200);
                });
            }
        });
    }, {
        threshold: 0.1
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
    const revealChildrenNotInSection = document.querySelectorAll('.reveal-child:not(.reveal *)');
    revealChildrenNotInSection.forEach(el => observer.observe(el));

    // --- Initialize Swiper for My Work Slider ---
    const myWorkSwiper = new Swiper(".myWorkSwiper", {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        centeredSlides: true,
        autoplay: {
            delay: 3000, // Auto-slide every 3 seconds
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

});
