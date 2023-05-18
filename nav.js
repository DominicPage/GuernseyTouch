// Select the hamburger menu and the nav element
const hamburgerMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('nav');

// Add an event listener to the hamburger menu
hamburgerMenu.addEventListener('click', () => {
  // Toggle the 'active' class on the nav element
  nav.classList.toggle('active');
});
