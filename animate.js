const serviceCards = document.querySelectorAll('.article');

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

const newsCards = document.querySelectorAll('.full-article');

const newsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.visibility = 'visible';
            entry.target.style.animationPlayState = 'running';
        }
    });
});

newsCards.forEach((card) => {
    newsObserver.observe(card);
});

document.querySelectorAll('.section-header').forEach(el => {
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

window.addEventListener('scroll', function() {
    let timelineEvents = document.querySelectorAll('.timeline-event');
    timelineEvents.forEach(event => {
      let positionFromTop = event.getBoundingClientRect().top;
      if(positionFromTop - window.innerHeight <= 0) {
        event.style.animation = 'comeIn 1s ease-out forwards';
      }
    });
  });

  document.querySelectorAll('.member-card').forEach(card => {
    card.addEventListener('click', function() {
      let innerCard = this.querySelector('.card-inner');
      if(innerCard.style.transform === 'rotateY(180deg)') {
        innerCard.style.transform = 'rotateY(0deg)';
      } else {
        innerCard.style.transform = 'rotateY(180deg)';
      }
    });
  });


  