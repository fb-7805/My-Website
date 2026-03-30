const slideshows = document.querySelectorAll(".slideshow");

slideshows.forEach(slideshow => {

    let slides = slideshow.querySelectorAll(".slide");
    let index = 0;

    const nextBtn = slideshow.querySelector(".next");
    const prevBtn = slideshow.querySelector(".prev");

    function showSlide(i){
        slides.forEach(slide => slide.classList.remove("active"));
        slides[i].classList.add("active");
    }

    nextBtn.addEventListener("click", () => {
        index++;
        if(index >= slides.length) index = 0;
        showSlide(index);
    });

    prevBtn.addEventListener("click", () => {
        index--;
        if(index < 0) index = slides.length - 1;
        showSlide(index);
    });

});