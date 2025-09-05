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
