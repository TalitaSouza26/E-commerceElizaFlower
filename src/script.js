let slideIndex = 1;

function showSlides(direcao) {
    let i;
    const slides = document.getElementsByClassName("mySlides");

    if (direcao > slides.length) {
        slideIndex = 1;
    }
    if (direcao < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(direcao) {
    showSlides(slideIndex += direcao);
}

function jumpToSlide() {
    const input = document.getElementById("slideIndex");
    const value = parseInt(input.value);
    if (!isNaN(value)) {
        showSlides(slideIndex = value);
    }
}

showSlides(slideIndex);
