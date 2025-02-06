// Navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}
// Dark Mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}

// Scroll Reveal
const sr = ScrollReveal ({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});


sr.reveal(`.home-text, .home-img,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box`, {
    interval: 200
})


// for automatic slides

let currentSlide = 0;
const slides = document.querySelectorAll('.wrapper input[type="radio"]');
const totalSlides = slides.length;

function showNextSlide() {
    slides[currentSlide].checked = false;
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].checked = true;
}

setInterval(showNextSlide, 3000);


// for carousel slides


let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Optional: Auto-play the carousel
// setInterval(nextSlide, 3000);









document.addEventListener('DOMContentLoaded', function() {
    const bookmarkIcons = document.querySelectorAll('.bx-bookmark-heart');

    bookmarkIcons.forEach(icon => {
        icon.addEventListener('click', function(event) {
            event.preventDefault();
            const box = this.closest('.box');
            const movie = {
                title: box.querySelector('h2').innerText,
                image: box.querySelector('.box-img img').src,
                quality: box.querySelector('h3').innerText
            };

            // Get existing favorites or initialize an empty array
            let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

            // Check if the movie is already in favorites
            const isAlreadyFavorite = favorites.some(fav => fav.title === movie.title);

            if (!isAlreadyFavorite) {
                favorites.push(movie);
                localStorage.setItem('favorites', JSON.stringify(favorites));
                alert('Added to Favorites!');
            } else {
                alert('This movie is already in your Favorites!');
            }
        });
    });
});



// function openVideoPopup() {
//     const videoPopup = document.getElementById('videoPopup');
//     videoPopup.style.display = 'flex';
// }

// function closeVideoPopup() {
//     const videoPopup = document.getElementById('videoPopup');
//     videoPopup.style.display = 'none';
//     const video = videoPopup.querySelector('video');
//     video.pause();
//     video.currentTime = 0;
// }


// for video popup
function openVideoPopup(element) {
    const videoPopup = document.getElementById('videoPopup');
    const video = videoPopup.querySelector('video');
    
    // Get video path from clicked box's data attribute
    const videoPath = element.getAttribute('data-video');
    
    // Set video source and load
    video.src = videoPath;
    video.load();
    
    videoPopup.style.display = 'flex';
}

function closeVideoPopup() {
    const videoPopup = document.getElementById('videoPopup');
    const video = videoPopup.querySelector('video');
    
    video.pause();
    video.currentTime = 0;
    videoPopup.style.display = 'none';
}