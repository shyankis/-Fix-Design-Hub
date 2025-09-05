// Toggle mobile nav menu
const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Form submission handler
const form = document.querySelector("form");
form.addEventListener("submit", function(e){
  e.preventDefault();

  const msg = document.createElement("p");
  msg.textContent = "✅ Thank you for reaching out! We'll get back to you soon.";
  msg.style.color = "green";
  msg.style.marginTop = "10px";
  form.appendChild(msg);

  setTimeout(() => msg.remove(), 5000);
  form.reset();
});

// Scroll fade-in animation
const faders = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    if (rect < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});
