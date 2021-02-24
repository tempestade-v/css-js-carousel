/* CAROUSEL-BANNER */
/* ELEMENTS */
let imgNode = document.querySelectorAll('.banner-slide') /* All carousel images */
let imgs = Array.from(imgNode) //node to Array

let carouselNode = document.querySelectorAll(".carousel-nav-dot") /* All carousel-nav dots */
let carouselNav = Array.from(carouselNode)   // node to Array 



let i = (imgs.length) - 1 //last element
let Index = imgs[i]  //currentImage

function IndexAddClass() {
    Index.classList.add('selected')
    Index.style.opacity = "100%"
}

function IndexRemoveClass() {
    Index.classList.remove('selected')
    Index.style.opacity = "0%"

}

function Carousel() {
    IndexRemoveClass()
    if (i == imgs.length - 1) { i = 0 } else { i++ }
    SelectDot(carouselNav[i])
    Index = imgs[i]
    IndexAddClass(Index)
}


/* CAROUSEL-NAVIGATION-BAR */

function RemoveSelectedDot() {
    carouselNav.forEach((e) => {
        e.style.animation = ""
    })
}

function SelectDot(e) {
    RemoveSelectedDot()
    e.style.animation = "dotOpacity 0.1s forwards"
}

carouselNav.forEach((e) => { /* indicates what image have been the user selected and switch to it*/
    e.style.backgroundColor = "rgba(255, 255, 255, 0.3)"
    e.onclick = function (event) {
        let id = event.target.id
        i = id - 1


        //switch image
        IndexRemoveClass()
        Index = imgs[id]
        IndexAddClass(Index)

        //switch selected dot
        SelectDot(e)
    }
})


/* START'S CAROUSEL */
function CarouselLoop() {
    Carousel(Index)
    setInterval(() => {
        Carousel(Index)
    }, 7000);
}

window.addEventListener("load", CarouselLoop)


/* ---------------------------------------------------------------------------------------------*/
/* resize gallerie to avoid from overlap */
let gallerie = document.querySelector(".gallerie")
let content = document.querySelector(".content")

function ResizeGallerie() {
    gallerie.style.top = `calc( 100vh + ${content.clientHeight}px`
}

window.onload = ResizeGallerie
window.onresize = ResizeGallerie


/* ---------------------------------------------------------------------------------------------*/
/*  STICKY HEADER */
window.addEventListener("scroll", () => {
    var header = document.querySelector(".banner-header")
    header.classList.toggle("sticky", window.scrollY > 900)
})