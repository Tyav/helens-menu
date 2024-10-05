const backgrounds = [
  'background1.jpg',
  'background2.jpg',
  'background3.jpg'
];

let currentIndex = 0;

function changeBackground() {
  const newIndex = (currentIndex + 1) % backgrounds.length; // Next index
  const body = document.body;

  // Fade out the current background
  body.style.opacity = '0'; // Start fading out

  // Wait for the fade-out transition to complete before changing the image
  setTimeout(() => {
      body.style.backgroundImage = `url('${backgrounds[newIndex]}')`; // Change the image
      body.style.opacity = '1'; // Fade in
  }, 1000); // Match the timeout duration with the CSS transition duration
  currentIndex = newIndex; // Update the current index
}

// Change background every 5 seconds
setInterval(changeBackground, 5000);
