document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    const carouselTracks = document.querySelectorAll('.carousel-track');

    carouselTracks.forEach(function(track) {
        const cards = track.querySelectorAll('.card');
        const prevBtn = track.parentElement.querySelector('.prev-btn');
        const nextBtn = track.parentElement.querySelector('.next-btn');

        let index = 0;
        const cardWidth = cards[0].offsetWidth + 20; // Considerando margin-right: 20px

        nextBtn.addEventListener('click', function() {
            index = Math.min(index + 1, cards.length - 1);
            track.style.transform = `translateX(${-index * cardWidth}px)`;
        });

        prevBtn.addEventListener('click', function() {
            index = Math.max(index - 1, 0);
            track.style.transform = `translateX(${-index * cardWidth}px)`;
        });
    });
});