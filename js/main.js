// Menu
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");

// Set initial state of menu
let showMenu = false;

// Change menu state when I click menu button
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        navItems.forEach(item => item.classList.add("show"));

        // Set menu state
        showMenu = true;

    } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        navItems.forEach(item => item.classList.remove("show"));

        // Set menu state
        showMenu = false;
    }
}

/*****************************************************************************/
// Carousel
if (document.URL.includes("projects.html")) {
    const carouselContainer = document.querySelector(".carousel-container");
    const carouselTrack = document.querySelector(".carousel-track");
    const carouselSlides = document.querySelectorAll(".carousel-slide");
    const btnRight = document.querySelector(".btn-right");
    const btnLeft = document.querySelector(".btn-left");
    const carouselNav = document.querySelector(".carousel-nav");
    const carouselIndicators = document.querySelectorAll(".carousel-indicator");

    const slideSize = carouselSlides[0].getBoundingClientRect();
    const slideWidth = slideSize.width;

    // Set slide position, arrange the slides next to one another
    carouselSlides.forEach((slide, i) => slide.style.left = slideWidth * i + "px");

    // When clicking the left arrow, move slides to the left
    btnLeft.addEventListener("click", e => {
        const currentSlide = carouselTrack.querySelector(".current-slide");
        const prevSlide = currentSlide.previousElementSibling;
        const currentIndicator = carouselNav.querySelector(".current-slide");
        const prevIndicator = currentIndicator.previousElementSibling;

        moveSlide(carouselTrack, currentSlide, prevSlide);
        updateIndicators(currentIndicator, prevIndicator);
    });

    // When clicking the right arrow, move slides to the right
    btnRight.addEventListener("click", e => {
        const currentSlide = carouselTrack.querySelector(".current-slide");
        const nextSlide = currentSlide.nextElementSibling;
        const prevSlide = currentSlide.previousElementSibling;
        const currentIndicator = carouselNav.querySelector(".current-slide");
        const nextIndicator = currentIndicator.nextElementSibling;

        moveSlide(carouselTrack, currentSlide, nextSlide);
        updateIndicators(currentIndicator, nextIndicator);
    });

    // When clicking the nav indicators, move to the correct slide
    // (Includes unnecessary repetition, should get rid of it later on)
    carouselIndicators[0].addEventListener("click", e => {
        const currentSlide = carouselTrack.querySelector(".current-slide");
        const newSlide = carouselSlides[0];
        const currentIndicator = carouselNav.querySelector(".current-slide");
        const newIndicator = carouselIndicators[0];

        moveSlide(carouselTrack, currentSlide, newSlide);
        updateIndicators(currentIndicator, newIndicator);
    });

    carouselIndicators[1].addEventListener("click", e => {
        const currentSlide = carouselTrack.querySelector(".current-slide");
        const newSlide = carouselSlides[1];
        const currentIndicator = carouselNav.querySelector(".current-slide");
        const newIndicator = carouselIndicators[1];
        
        moveSlide(carouselTrack, currentSlide, newSlide); 
        updateIndicators(currentIndicator, newIndicator);
    });

    carouselIndicators[2].addEventListener("click", e => {
        const currentSlide = carouselTrack.querySelector(".current-slide");
        const newSlide = carouselSlides[2];
        const currentIndicator = carouselNav.querySelector(".current-slide");
        const newIndicator = carouselIndicators[2];
        
        moveSlide(carouselTrack, currentSlide, newSlide); 
        updateIndicators(currentIndicator, newIndicator);
    });

    // Function for moving to the right slide
    // These functions are used both with arrow buttons and with carousel indicators
    function moveSlide(carouselTrack, currentSlide, newSlide) {
        carouselTrack.style.transform = "translateX(-" + newSlide.style.left + ")";
        currentSlide.classList.remove("current-slide");
        newSlide.classList.add("current-slide");
    }

    // Function for emphasizing the right indicator dot after changing slides
    function updateIndicators(currentIndicator, newIndicator) {
        currentIndicator.classList.remove("current-slide");
        newIndicator.classList.add("current-slide");
    }
}
