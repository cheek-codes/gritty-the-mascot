const container = document.querySelector(".container")
const link = document.querySelectorAll(".link")
const jail = document.querySelector("#jail")
const wendys = document.querySelector("#wendys")
const ramen = document.querySelector("#ramen")
const noods = document.querySelector("#noods")
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
document.querySelector(".yes").addEventListener("click", yes)
document.querySelector(".dad").addEventListener("click", dad)
document.querySelector(".bowl").addEventListener("click", bowl)
document.querySelector(".nah").addEventListener("click", nah)

function yes(){
    jail.classList.toggle("hidden")
    wendys.classList.add("hidden")
    ramen.classList.add("hidden")
    noods.classList.add("hidden")
}

function dad(){
    jail.classList.add("hidden")
    wendys.classList.toggle("hidden")
    ramen.classList.add("hidden")
    noods.classList.add("hidden")
}

function bowl(){
    jail.classList.add("hidden")
    wendys.classList.add("hidden")
    ramen.classList.toggle("hidden")
    noods.classList.add("hidden")
}

function nah(){
    jail.classList.add("hidden")
    wendys.classList.add("hidden")
    ramen.classList.add("hidden")
    noods.classList.toggle("hidden")
}

// text change
// text.addEventListener("click", function() {
//     if (index < newText.length) {
//         text.textContent = newText[index]
//         index++
//     } 
//     else {
//         index = 0
//     }
// })