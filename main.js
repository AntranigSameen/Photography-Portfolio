document.addEventListener('DOMContentLoaded', function () {
    showPortraitSlides(1); // Display the first portrait slide initially
});
document.addEventListener('DOMContentLoaded', function () {
    showSlides(1); // Display the first landscape slide initially
});
document.addEventListener('DOMContentLoaded', function () {
    showPortraitSlidesNature(1); // Display the first portrait slide initially
});
document.addEventListener('DOMContentLoaded', function () {
    showNatureSlides(1); // Display the first landscape slide initially
});
document.addEventListener('DOMContentLoaded', function () {
    showPortraitSlidesRandom(1); // Display the first portrait slide initially
});
document.addEventListener('DOMContentLoaded', function () {
    showRandomSlides(1); // Display the first landscape slide initially
});



var slideIndex = 1;
var portraitSlideIndex = 1; // New index for portrait slides
showSlides(slideIndex);

//FUNCTIONS FOR PEOPLE SLIDES

function plusSlides(n, isPortrait){
    if (isPortrait) {
        showPortraitSlides(portraitSlideIndex += n);
    } else {
        showSlides(slideIndex += n);
    }
}

function currentSlides(n, isPortrait){
    if (isPortrait) {
        showPortraitSlides(portraitSlideIndex = n);
    }
    else{
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

//FUNCTIONS FOR NATURE SLIDES

function showNatureSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesNature");
    var dots = document.getElementsByClassName("dotNature");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function showPortraitSlidesNature(n) {
    var i;
    var portraitSlides = document.getElementsByClassName("mySlidesPortNature");
    var dots = document.getElementsByClassName("dotPortNature");
    if (n > portraitSlides.length) { portraitSlideIndex = 1; }
    if (n < 1) { portraitSlideIndex = portraitSlides.length; }
    for (i = 0; i < portraitSlides.length; i++) {
        portraitSlides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    portraitSlides[portraitSlideIndex - 1].style.display = "block";
    dots[portraitSlideIndex - 1].className += " active";
}

function plusNatureSlides(n, isPortrait) {
    if (isPortrait) {
        showPortraitSlidesNature(portraitSlideIndex += n);
    } else {
        showNatureSlides(slideIndex += n);
    }
}

function currentNatureSlides(n, isPortrait) {
    if (isPortrait) {
        showPortraitSlidesNature(portraitSlideIndex = n);
    } else {
        showNatureSlides(slideIndex = n);
    }
}

// FUNCTIONS FOR RANDOM SLIDES

var randomSlideIndex = 1;
var portraitRandomSlideIndex = 1; // New index for portrait slides in the random section

function plusRandomSlides(n, isPortrait) {
    if (isPortrait) {
        showPortraitSlidesRandom(portraitRandomSlideIndex += n);
    } else {
        showRandomSlides(randomSlideIndex += n);
    }
}

function currentRandomSlides(n, isPortrait) {
    if (isPortrait) {
        showPortraitSlidesRandom(portraitRandomSlideIndex = n);
    } else {
        showRandomSlides(randomSlideIndex = n);
    }
}

function showRandomSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesRandom");
    var dots = document.getElementsByClassName("dotRandom");
    if (n > slides.length) { randomSlideIndex = 1; }
    if (n < 1) { randomSlideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[randomSlideIndex - 1].style.display = "block";
    dots[randomSlideIndex - 1].className += " active";
}

function showPortraitSlidesRandom(n) {
    var i;
    var portraitSlides = document.getElementsByClassName("mySlidesPortRandom");
    var dots = document.getElementsByClassName("dotPortRandom");
    if (n > portraitSlides.length) { portraitRandomSlideIndex = 1; }
    if (n < 1) { portraitRandomSlideIndex = portraitSlides.length; }
    for (i = 0; i < portraitSlides.length; i++) {
        portraitSlides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    portraitSlides[portraitRandomSlideIndex - 1].style.display = "block";
    dots[portraitRandomSlideIndex - 1].className += " active";
}
