function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
    micContainerClicked = false; 
}

var slideIndex = 1;
showSlides(slideIndex);
var totalSlides = 9;
var micContainerClicked = false;


function plusSlides(n) {
    if (!micContainerClicked) {
        slideIndex += n;

        if (slideIndex > totalSlides) {
            slideIndex = 1;
        }
        if (slideIndex < 1) {
            slideIndex = totalSlides;
        }
        
        showSlides(slideIndex);
    } else {
        micContainerClicked = false;
    }
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    var descriptionText = document.getElementById("imageDescription");


    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
    captionText.innerHTML = dots[slideIndex - 1].alt;
    
    var description = dots[slideIndex - 1].getAttribute('data-description');
    if (description && description.trim() !== "") {
        descriptionText.innerHTML = description;
        descriptionText.classList.add('hidden');
    } else {
        descriptionText.classList.remove('hidden');
    }
}

function toggleDescription() {
    const descriptionElement = document.getElementById('imageDescription');
    descriptionElement.classList.toggle('hidden');
}