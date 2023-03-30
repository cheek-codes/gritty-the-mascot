const container = document.querySelector(".container")
const link = document.querySelectorAll(".link")
const jail = document.querySelector("#jail")
const wendys = document.querySelector("#wendys")
const ramen = document.querySelector("#ramen")
const noods = document.querySelector("#noods")
const text = document.querySelector(".noodz")
const newText = ["JK. Here's some noods", "Do you really want noods", "Sorry, here's actual noods."]
let index = 0
let count = 0


// element moves
document.addEventListener("DOMContentLoaded", move);

function move() {
    link.forEach(link => {
        const maxX = container.clientWidth - link.clientWidth
        const maxY = container.clientHeight - link.clientHeight
        const x1 = Math.floor(Math.random() * maxX)
        const y1 = Math.floor(Math.random() * maxY)

        link.style.left = x1 + 'px'
        link.style.top = y1 + 'px'
    })
}


// toggle images
document.querySelector(".noodz").addEventListener("click", next1)
document.querySelector(".noodz").addEventListener("click", next2)
document.querySelector(".noodz").addEventListener("click", next3)
document.querySelector(".noodz").addEventListener("click", next4)

function next1(){
    jail.classList.toggle("hidden")
    wendys.classList.add("hidden")
    ramen.classList.add("hidden")
    noods.classList.add("hidden")
}

// text change
text.addEventListener("click", function() {
    if (index < newText.length) {
        text.textContent = newText[index]
        index++
    } 
    else {
        index = 0
    }
})