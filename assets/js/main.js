const container = document.querySelector(".container")
const link = document.querySelector(".link")

// element moves
link.addEventListener("load", move)
move()

function move() {
    const maxX = container.clientWidth - link.clientWidth
    const maxY = container.clientHeight - link.clientHeight
    const x1 = Math.floor(Math.random() * maxX)
    const y1 = Math.floor(Math.random() * maxY)

    link.style.left = x1 + 'px'
    link.style.top = y1 + 'px'

}