let navmenu = document.querySelector(".navmenu")
let hamburger = document.querySelector(".hamburger")
let button = document.querySelector(".color-toggle");


function toggleHamburger(){
  navmenu.classList.toggle("showNav")
  hamburger.classList.toggle("showClose")
}

hamburger.addEventListener("click", toggleHamburger)


let colors = document.querySelectorAll(".color")
colors.forEach( 
  function(color) { 
    color.addEventListener("click", toggleHamburger) 
  }
)


function changeBodyBg(color){
    document.body.style.background = color;
}
