document.addEventListener("DOMContentLoaded", function () {
  const slidesContainer = document.getElementById("slides-container");
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.getElementById("slide-arrow-prev");
  const nextButton = document.getElementById("slide-arrow-next");

  let currentSlide = 0;
  const slideCount = slides.length;

  const goToNextSlide = () => {
    currentSlide = (currentSlide + 1) % slideCount;
    const slideWidth = slides[0].clientWidth;
    slidesContainer.scrollLeft = currentSlide * slideWidth;
  };

  const goToPrevSlide = () => {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    const slideWidth = slides[0].clientWidth;
    slidesContainer.scrollLeft = currentSlide * slideWidth;
  };

  // clones de los slides al principio y al final para crear loop infinito
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slideCount - 1].cloneNode(true);
  slidesContainer.insertBefore(lastClone, slides[0]);
  slidesContainer.appendChild(firstClone);

  nextButton.addEventListener("click", goToNextSlide);
  prevButton.addEventListener("click", goToPrevSlide);

  setInterval(goToNextSlide, 3000);
});
