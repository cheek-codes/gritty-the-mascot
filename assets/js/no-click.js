const container = document.getElementById("nein")
const myElement1 = document.getElementById("no")

// Add event listeners to both elements
myElement1.addEventListener("click", moveElements)

function moveElements() {
  // Get random positions within the container bounds
  const maxX = container.clientWidth - myElement1.clientWidth
  const maxY = container.clientHeight - myElement1.clientHeight
  const x1 = Math.floor(Math.random() * maxX)
  const y1 = Math.floor(Math.random() * maxY)

  // Set the position of each element
  myElement1.style.left = x1 + "px"
  myElement1.style.top = y1 + "px"

}




let count = 0

function changeElement() {
  count++
  if (count === 5) {
    const newElement = document.createElement("a")
    newElement.href = "https://www.google.com"
    newElement.textContent = "New link"
    const container = document.getElementById("nein")
    const oldElement = document.getElementById("no")
    container.replaceChild(newElement, oldElement)
  }
}