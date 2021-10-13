// scroll to top functionality
const scrollUp = document.getElementById('scroll-up');

scrollUp.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

// Burguer button navigation
const burguer = document.querySelector('.burguer-menu');
const ul = document.querySelector('nav ul');
const nav = document.querySelector('nav');

burguer.addEventListener('click', function() {
  ul.classList.toggle('show');
});

// Close hamburguer menu when a link is clicked
const navLink = document.querySelectorAll('.nav-link');

navLink.forEach((link) =>
  link.addEventListener('click', function() {
    ul.classList.remove('show');
  })
);