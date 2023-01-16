// Functions
function classSwitcher(){
    slides.forEach(slide => slide.classList.remove("active"))
    points.forEach(point => point.classList.remove("active"))
    slides[active].classList.add("active")
    points[active].classList.add("active")
}
let goNext = () => {
    active = (active == slides.length - 1) ? 0 : active + 1
    classSwitcher()
}
// variables
let active = 0
let timer = 2000

let slidshow = document.querySelector(".slideshow")
let slides =document.querySelectorAll(".slide")
let points = document.querySelectorAll(".points > span")
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")
// setInterval
setInterval(goNext , timer)