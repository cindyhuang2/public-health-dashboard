document.addEventListener("DOMContentLoaded", function () {
    // Initialize each carousel
    document.querySelectorAll(".gen-info-carousel").forEach((carousel, index) => {
        carousel.dataset.index = index; // Assign an index to each carousel
        let slides = carousel.querySelectorAll(".carousel-slide");
        let dots = carousel.querySelectorAll(".dot");

        let slideIndex = 0;
        showSlides(slideIndex, carousel);

        // Attach event listeners for navigation buttons
        carousel.querySelector(".prev")?.addEventListener("click", () => plusSlides(-1, carousel));
        carousel.querySelector(".next")?.addEventListener("click", () => plusSlides(1, carousel));

        // Attach event listeners for dots
        dots.forEach((dot, dotIndex) => {
            dot.addEventListener("click", () => currentSlide(dotIndex, carousel));
        });

        function plusSlides(n, carousel) {
            slideIndex += n;
            showSlides(slideIndex, carousel);
        }

        function currentSlide(n, carousel) {
            slideIndex = n;
            showSlides(slideIndex, carousel);
        }

        function showSlides(n, carousel) {
            let slides = carousel.querySelectorAll(".carousel-slide");
            let dots = carousel.querySelectorAll(".dot");

            if (n >= slides.length) slideIndex = 0;
            if (n < 0) slideIndex = slides.length - 1;

            slides.forEach((slide) => (slide.style.display = "none"));
            dots.forEach((dot) => dot.classList.remove("active"));

            slides[slideIndex].style.display = "block";
            if (dots.length > 0) dots[slideIndex].classList.add("active");
        }
    });
});