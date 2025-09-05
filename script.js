// Toggle mobile nav menu
const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Example form submission handler
const form = document.querySelector("form");
form.addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you for reaching out! We'll get back to you soon.");
  form.reset();
});

// GSAP Animations
gsap.from(".hero h1", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  ease: "power3.out"
});

gsap.from(".hero p", {
  opacity: 0,
  y: 30,
  duration: 1.5,
  delay: 0.5,
  ease: "power3.out"
});

gsap.from(".btn", {
  opacity: 0,
  scale: 0.5,
  duration: 1,
  delay: 1,
  ease: "back.out(1.7)"
});

// Services cards animation
gsap.from(".card", {
  scrollTrigger: {
    trigger: ".card-container",
    start: "top 80%",
  },
  opacity: 0,
  y: 100,
  duration: 1,
  stagger: 0.3
});

// Portfolio items
gsap.from(".portfolio-item", {
  scrollTrigger: {
    trigger: ".portfolio-grid",
    start: "top 85%",
  },
  scale: 0.8,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "back.out(1.7)"
});

// Blog posts
gsap.from(".blog-post", {
  scrollTrigger: {
    trigger: ".blog-container",
    start: "top 85%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3
});
