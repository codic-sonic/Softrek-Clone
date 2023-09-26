const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].clientWidth;
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;
console.log(slides)

function goToSlide(index) {
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }

    currentIndex = index;

    const translateX = -currentIndex * slideWidth;
    slider.style.transform = `translateX(${translateX}px)`;
}

function nextSlide() {
    goToSlide(currentIndex + 1);
}

function prevSlide() {
    goToSlide(currentIndex - 1);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Automatic slide change (uncomment this block to enable)
// setInterval(nextSlide, 3000);


//---Scroll reveal---
const sr = ScrollReveal({
    distance: "85px",
    duration: 2500,
    reset: false
});

sr.reveal(".about", { origin: "bottom", delay: 300 });
sr.reveal(".section-title", { origin: "bottom", delay: 200 });
sr.reveal(".icon-box", { origin: "bottom", delay: 300 });
sr.reveal(".grid", { origin: "bottom", delay: 200 });
