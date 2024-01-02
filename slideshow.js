document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    let slideInterval;
  
    function showSlide(index) {
      slides.forEach(function(slide) {
        slide.style.transform = "translateX(-100%)"; // Slide out all slides
        slide.style.opacity = 0; // Set initial opacity to 0
      });
  
      slides[index].style.transform = "translateX(0)"; // Slide in the current slide
      slides[index].style.opacity = 1; // Set current slide opacity to 1
    }
  
    function slideOutSlide(index) {
      slides[index].style.transform = "translateX(100%)"; // Slide out the current slide
      slides[index].style.opacity = 0; // Reset opacity
    }
  
    function slideInSlide(index) {
      slides[index].style.transform = "translateX(0)"; // Slide in the next slide
      slides[index].style.opacity = 1; // Set opacity to 1
    }
  
    function nextSlide() {
      slideOutSlide(currentSlide);
      currentSlide = (currentSlide + 1) % slides.length;
      slideInSlide(currentSlide);
    }
  
    function prevSlide() {
      slideOutSlide(currentSlide);
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      slideInSlide(currentSlide);
    }
  
    const prevButton = document.querySelector(".prev-btn");
    const nextButton = document.querySelector(".next-btn");
  
    prevButton.addEventListener("click", function() {
      prevSlide();
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 10000);
    });
  
    nextButton.addEventListener("click", function() {
      nextSlide();
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 10000);
    });
  
    slideInterval = setInterval(nextSlide, 10000);
    
    nextSlide(); // Start the slideshow automatically
  });
  