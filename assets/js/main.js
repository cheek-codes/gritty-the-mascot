var images = [
  {image: "assets/images/1.jpg", music: "assets/music/fun-kids-playful-comic-carefree-game-happy-positive-music.mp3"}, 
  {image: "assets/images/2.jpg", music: "assets/music/fun-kids-playful-comic-carefree-game-happy-positive-music.mp3"}, 
  {image: "assets/images/3.jpg", music: "assets/music/fun-kids-playful-comic-carefree-game-happy-positive-music.mp3"}, 
  {image: "assets/images/4.jpg", music: "assets/music/fun-kids-playful-comic-carefree-game-happy-positive-music.mp3"}, 
  {image: "assets/images/5.jpg", music: "assets/music/fun-kids-playful-comic-carefree-game-happy-positive-music.mp3"}, 
  {image: "assets/images/6.jpg", music: "assets/music/fun-kids-playful-comic-carefree-game-happy-positive-music.mp3"}, 
  {image: "assets/images/7.jpg", music: "assets/music/fun-kids-playful-comic-carefree-game-happy-positive-music.mp3"}, 
  {image: "assets/images/8.jpg", music: "assets/music/fun-kids-playful-comic-carefree-game-happy-positive-music.mp3"}, 
  {image: "assets/images/9.jpg", music: "assets/music/fun-kids-playful-comic-carefree-game-happy-positive-music.mp3"},
  {image: "assets/images/momo.jpg", music: "assets/music/Little-Girl-Screaming-A2.mp3"},
  {image: "assets/images/nope.jpg", music: "assets/music/Scream-Short-B5.mp3"},
]
var currentIndex = 0 // Index of the currently displayed image
var defaultImage = "assets/images/giphy.gif"; // Default image file name
var defaultMusic = "assets/music/fun-kids-playful-comic-carefree-game-happy-positive-music.mp3" // Default music file name
var musicPlayer = document.getElementById("music-player") // Get the audio element

var audio = document.getElementsByTagName("audio")[0]
audio.play()




function changeImage() {
  var img = document.getElementById('my-image') // Get the image element
  var currentImage = images[currentIndex] // Get the current image and music file names
  
  if (img.src.indexOf(defaultImage) !== -1) {
    // If the image is the default image, change to a specific image and play its corresponding music file
    var randomIndex = Math.floor(Math.random() * images.length)
    currentIndex = randomIndex; // Set the currentIndex to the index of the new image
    img.src = currentImage.image;
    musicPlayer.src = currentImage.music;
    musicPlayer.play() // Play the music
    setTimeout(function() {
      img.src = defaultImage; // Set the source of the image back to the default image after 2 seconds
      musicPlayer.src = defaultMusic; // Set the source of the music back to the default music file
      musicPlayer.play() // Stop the music
    }, 2000)
  } else {
    // If the image is not the default image, set it back to the default image and stop the music
    img.src = defaultImage
    musicPlayer.src = defaultMusic
    musicPlayer.play()
  }
}

setInterval(changeImage, Math.floor(Math.random() * (12000 - 5000 + 1) + 5000)); // Call the changeImage function at a random interval between 5 and 12 seconds

console.log("hi")