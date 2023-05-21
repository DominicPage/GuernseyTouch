// Select the hamburger menu and the nav element
const hamburgerMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('nav');

// Add an event listener to the hamburger menu
hamburgerMenu.addEventListener('click', () => {
  // Toggle the 'active' class on the nav element
  nav.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function() {
  let navToggle = document.getElementById("nav-toggle");

  navToggle.addEventListener("click", function() {
      this.classList.toggle("open");
      document.querySelector('.nav-links').classList.toggle('nav-active');
  });
});

window.addEventListener('scroll', function () {
  let nav = document.querySelector('.navbar');
  let hero = document.querySelector('.hero');
  let heroBottomPosition = hero.getBoundingClientRect().bottom;

  if (window.scrollY >= heroBottomPosition) {
      nav.classList.add('scrolled');
  } else {
      nav.classList.remove('scrolled');
  }
});


