var images = [
  {image: "assets/images/1.jpg", music: ""}, 
  {image: "assets/images/2.jpg", music: ""}, 
  {image: "assets/images/3.jpg", music: ""}, 
  {image: "assets/images/4.jpg", music: ""}, 
  {image: "assets/images/5.jpg", music: ""}, 
  {image: "assets/images/6.jpg", music: ""}, 
  {image: "assets/images/7.jpg", music: ""}, 
  {image: "assets/images/8.jpg", music: ""}, 
  {image: "assets/images/9.jpg", music: ""},
  {image: "assets/images/momo.jpg", music: "assets/music/Little-Girl-Screaming-A2.mp3"},
  {image: "assets/images/nope.jpg", music: "assets/music/Scream-Short-B5.mp3"},
]

var currentIndex = 0 
var defaultImage = "assets/images/giphy.gif"
var musicPlayer = document.getElementById("music-player")

function changeImage() {
  var img = document.getElementById('my-image')
  var currentImage = images[currentIndex]
  
  if (img.src.indexOf(defaultImage) !== -1) {
    var randomIndex = Math.floor(Math.random() * images.length)
    currentIndex = randomIndex
    img.src = currentImage.image
    musicPlayer.src = currentImage.music
    musicPlayer.play()
    setTimeout(function() {
      img.src = defaultImage
      musicPlayer.pause()
    }, 2000)
  }
}
setInterval(changeImage, Math.floor(Math.random() * (12000 - 5000 + 1) + 5000))