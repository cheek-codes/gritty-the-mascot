var images = ["assets/images/1.jpg", "assets/images/2.jpg", "assets/images/3.jpg", "assets/images/4.jpg", "assets/images/5.jpg", "assets/images/6.jpg", "assets/images/7.jpg", "assets/images/8.jpg", "assets/images/9.jpg"]
var currentIndex = 0 // Index of the currently displayed image
var defaultImage = 'assets/images/giphy.gif'; // Default image file name

function changeImage() {
    var img = document.getElementById('my-image'); // Get the image element
  
    if (img.src.indexOf(defaultImage) !== -1) {
      // If the image is the default image, change to a random image
      var randomIndex = Math.floor(Math.random() * images.length);
      img.src = images[randomIndex];
      setTimeout(function() {
        img.src = defaultImage; // Set the source of the image back to the default image after 2 seconds
      }, 2000);
    } else {
      // If the image is not the default image, set it back to the default image
      img.src = defaultImage;
    }
  }
  
setInterval(changeImage, 6700); // Call the changeImage function every 5 seconds
  