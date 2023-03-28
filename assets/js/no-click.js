const container = document.getElementById("nein")
const link = document.getElementById("no")
const heading = document.getElementById("change")
const texts = document.getElementById("texts")
const newText = ["Why you no listen again?", "STHAP!", "DON'T DO IT AGAIN!!!", "Quit your tomfoolery!", "Okay fine, you win. Here's your prize. Go ahead click it."]
let index = 0
let count = 0

link.addEventListener("click", function() {
  heading.textContent = "New Heading Text"
})

// change to a link
function changeElement() {
    count++
    if (count === 6) {
        const newElement = document.createElement("a")
        newElement.href = "https://www.google.com"
        newElement.textContent = "New link"
        const oldElement = document.getElementById("no")
        const maxX = container.clientWidth - link.clientWidth
        const maxY = container.clientHeight - link.clientHeight
        const x1 = Math.floor(Math.random() * maxX)
        const y1 = Math.floor(Math.random() * maxY)

        newElement.style.position = "absolute"
        newElement.style.left = x1 + 'px'
        newElement.style.top = y1 + 'px'
        container.appendChild(newElement)
        container.removeChild(oldElement)
    }
}

// element moves
link.addEventListener('click', moveElements)
moveElements()

function moveElements() {
    const maxX = container.clientWidth - link.clientWidth
    const maxY = container.clientHeight - link.clientHeight
    const x1 = Math.floor(Math.random() * maxX)
    const y1 = Math.floor(Math.random() * maxY)

    link.style.left = x1 + 'px'
    link.style.top = y1 + 'px'

    changeElement()
}

// text change
link.addEventListener("click", function() {
    if (index < newText.length) {
        texts.textContent = newText[index]
        index++
    } 
    else {
        index = 0
    }
})