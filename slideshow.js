var slideIndex = 0;

function showSlides() {
  var slides = $(".mySlides");
  var dots = $(".dot");
  if (slideIndex >= slides.length) {slideIndex = 0}
  if (slideIndex < 0) {slideIndex = slides.length - 1}
  slides.css("display", "none");
  dots.removeClass("active");
  slides.eq(slideIndex).fadeIn();
  dots.eq(slideIndex).addClass("active");
}

$(document).ready(function() {
  showSlides(); // İlk slaytı göster
  setInterval(function() {
    slideIndex++;
    showSlides();
  }, 3000); // 3 saniyede bir slayt geçişleri
});

function plusSlides(n) {
  slideIndex += n;
  showSlides();
}

function currentSlide(n) {
  slideIndex = n;
  showSlides();
}
