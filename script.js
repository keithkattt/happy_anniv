// Array of image paths
const images = [
    'img/img1.jpg',
    'img/img2.jpg',
    'img/img3.jpg',
    'img/img4.jpg',
    'img/img5.jpg',
    'img/img6.jpg',
    'img/img7.jpg',         
    'img/img8.jpg',
    'img/img9.jpg',
    'img/img10.jpg',
    'img/img11.jpg',
    'img/img12.jpg',
    'img/img13.jpg'
];

// Get the image element
const imageElement = document.getElementById('clickable-image');

// Track the current image index
let currentIndex = 0;

// Function to change the image with a fade effect
function changeImage() {
    // Add fade-out class
    imageElement.classList.add('fade-out');

    // Wait for the fade-out effect to complete
    setTimeout(() => {
        // Update the index to the next image
        currentIndex = (currentIndex + 1) % images.length;

        // Change the image source
        imageElement.src = images[currentIndex];

        // Remove fade-out and add fade-in class
        imageElement.classList.remove('fade-out');
        imageElement.classList.add('fade-in');
    }, 500); // Match this duration with the CSS fade-out duration
}

// Set an interval to change the image every 3 seconds
setInterval(changeImage, 3000);