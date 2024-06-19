let currentIndex = 1;
displaySlide(currentIndex);

function changeSlide(n) {
  displaySlide((currentIndex += n));
}

function displaySlide(n) {
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) currentIndex = 1;
  if (n < 1) currentIndex = slides.length;
  Array.from(slides).forEach((slide) => (slide.style.display = "none"));
  slides[currentIndex - 1].style.display = "block";
}

displaySlide(currentIndex);
