export function initNewsSlider() {
    const sliders = document.querySelectorAll(".home-news-slider");

    sliders.forEach(slider => {
        let currentSlide = 0;
        const slides = slider.querySelectorAll(".news-slide");
        const dots = slider.querySelectorAll(".dot");
        const prevBtn = slider.querySelector(".slider-btn.prev");
        const nextBtn = slider.querySelector(".slider-btn.next");

        if (!slides.length) return;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle("active", i === index);
                dots[i]?.classList.toggle("active", i === index);
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }

        nextBtn?.addEventListener("click", nextSlide);
        prevBtn?.addEventListener("click", prevSlide);
        
        dots?.forEach((dot, i) => {
            dot.addEventListener("click", () => {
                currentSlide = i;
                showSlide(currentSlide);
            });
        });

        setInterval(nextSlide, 3000);
        showSlide(currentSlide);
    });
}
