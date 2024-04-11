

var slideIndex = 1;
var portraitSlideIndex = 1; // New index for portrait slides
showSlides(slideIndex);

function plusSlides(n, isPortrait){
    if (isPortrait) {
        showPortraitSlides(portraitSlideIndex += n);
    } else {
        showSlides(slideIndex += n);
    }
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function currentSlides(n, isPortrait){
    if (isPortrait) {
        showPortraitSlides(portraitSlideIndex = n);
    } else {
        showSlides(slideIndex = n);
    }
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if(n > slides.length) { slideIndex = 1; }
    if(n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active"; 
}

function showPortraitSlides(n){
    var i;
    var portraitSlides = document.getElementsByClassName("mySlidesPort");
    var dots = document.getElementsByClassName("dotPort");
    if(n > portraitSlides.length) { portraitSlideIndex = 1; }
    if(n < 1) { portraitSlideIndex = portraitSlides.length; }
    for (i = 0; i < portraitSlides.length; i++){
        portraitSlides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    portraitSlides[portraitSlideIndex - 1].style.display = "block";
    dots[portraitSlideIndex - 1].className += " active"; 
}