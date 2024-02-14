var slideImage = document.getElementById("slider-img");
var storeSliderImages = [
    "images/afriwoodstrewams-audition1.png", 
    "images/afriwoodstrewams-audition2.jpg",   
    "images/afriwoodstrewams-audition3.jpg",
    "images/afriwoodstrewams-audition4.jpg", 
    "images/afriwoodstrewams-audition5.jpg",
    "images/afriwoodstrewams-audition7.jpg",
    "images/afriwoodstrewams-audition8.jpg",
    "images/afriwoodstrewams-audition9.png"
];

var len = storeSliderImages.length;
var i = 0;

function slider() {
    if (i > len - 1) {
        i = 0;
    }

    slideImage.src = storeSliderImages[i];
    i++;
    setTimeout(slider, 5000); 
}

// Start the slider
slider();



// Set the date for the audition
const auditionDate = new Date('2024-02-24T10:00:00').getTime();


// Update the countdown every second
  const timer = setInterval(function() {
  const now = new Date().getTime();
  const distance = auditionDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById('timer').innerHTML = 'The audition has started!';
  }
}, 1000);
