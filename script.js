// Get the logo element
const logo = document.getElementById('logo');

// Add a click event listener to the logo
logo.addEventListener('click', function() {
  // Redirect to the homepage when the logo is clicked
  window.location.href = 'index.html';
});

// Get the current year
const currentYear = new Date().getFullYear();

// Update the copyright year in the footer
const yearSpan = document.getElementById('current-year');
yearSpan.textContent = currentYear;

document.addEventListener("DOMContentLoaded", function() {
  const logos = document.querySelectorAll(".logo");

  logos.forEach(logo => {
      let rotated = false;
      logo.addEventListener("click", () => {
          rotated = !rotated;
          if (rotated) {
              logo.style.transform = "scale(1.2) rotate(360deg)";
          } else {
              logo.style.transform = "scale(1)";
          }
      });
  });
});
