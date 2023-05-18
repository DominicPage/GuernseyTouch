const serviceCards = document.querySelectorAll('.service');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.visibility = 'visible';
            entry.target.style.animationPlayState = 'running';
        }
    });
});

serviceCards.forEach((card) => {
    observer.observe(card);
});

document.querySelectorAll('section h2').forEach(el => {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(el);
});
