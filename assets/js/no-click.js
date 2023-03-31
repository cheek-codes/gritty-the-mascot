const container = document.getElementById("nein")
const link = document.getElementById("no")
const heading = document.getElementById("change")
const texts = document.getElementById("texts")
const newText = ["Why you clicked again?", "STHAP!", "DON'T DO IT AGAIN!!!", "Quit your tomfoolery!", "Okay fine, you win. Here's your prize. Go ahead click it."]
let index = 0
let count = 0

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

link.addEventListener("click", function() {
    if (index < newText.length) {
        texts.textContent = newText[index]
        index++
    } 
    else {
        index = 0
    }
})

function changeElement() {
    count++
    if (count === 6) {
        const rick_roll = document.createElement("a")
        rick_roll.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        rick_roll.textContent = "Click here"
        const oldElement = document.getElementById("no")
        const maxX = container.clientWidth - link.clientWidth
        const maxY = container.clientHeight - link.clientHeight
        const x1 = Math.floor(Math.random() * maxX)
        const y1 = Math.floor(Math.random() * maxY)

        rick_roll.style.position = "absolute"
        rick_roll.style.left = x1 + "px"
        rick_roll.style.top = y1 + "px"
        container.appendChild(rick_roll)
        container.removeChild(oldElement)
    }
    if (count === 6){
        const penguins = document.createElement("a")
        penguins.href = "penguins_rule.html"
        penguins.textContent = "DO NOT CLICK HERE"

        const oldElement = document.getElementById("no")
        const maxX = container.clientWidth - link.clientWidth
        const maxY = container.clientHeight - link.clientHeight
        const x1 = Math.floor(Math.random() * maxX)
        const y1 = Math.floor(Math.random() * maxY)

        penguins.style.position = "absolute"
        penguins.style.left = x1 + "px"
        penguins.style.top = y1 + "px"
        container.appendChild(penguins)
        container.removeChild(oldElement)
    }
}
