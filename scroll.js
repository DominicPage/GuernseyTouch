const wrapper = document.querySelector('.team-wrapper');
const leftButton = document.querySelector('.scroll-button.left');
const rightButton = document.querySelector('.scroll-button.right');

// Scroll event listener
wrapper.addEventListener('scroll', () => {
    // Hide left button if at the start
    if (wrapper.scrollLeft <= 0) {
        leftButton.style.display = 'none';
    } else {
        leftButton.style.display = '';
    }

    // Hide right button if at the end
    if (wrapper.scrollLeft >= wrapper.scrollWidth - wrapper.offsetWidth) {
        rightButton.style.display = 'none';
    } else {
        rightButton.style.display = '';
    }
});

// Initial button state
wrapper.dispatchEvent(new Event('scroll'));

// Button click event listeners
leftButton.addEventListener('click', () => {
    wrapper.scrollBy({left: -300, behavior: 'smooth'});
});

rightButton.addEventListener('click', () => {
    wrapper.scrollBy({left: 300, behavior: 'smooth'});
});
