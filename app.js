// ---------------------------------------------------------------------------------------------
// for hero image
const slides = document.querySelectorAll('.slider img');
const intervalTime = 5000;
let activeIndex = 0;

setInterval(() => {
  // Set all slides to opacity 0
  slides.forEach(slide => slide.style.opacity = 0);

  // Increment active index
  activeIndex++;

  // If active index is greater than or equal to number of slides, reset to 0
  if (activeIndex >= slides.length) {
    activeIndex = 0;
  }

  // Set active slide to opacity 1
  slides[activeIndex].style.opacity = 1;
  slides[activeIndex].classList.add('active');
}, intervalTime);


// -----------------------------------------------------------------------------------------------------
// for hamburger menu
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}









