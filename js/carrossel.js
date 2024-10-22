let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function rotateImages() {
    currentIndex = (currentIndex + 1) % totalImages; 
    showImage(currentIndex);
}

showImage(currentIndex);

setInterval(rotateImages, 3000);
