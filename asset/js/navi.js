let menuButton = document.querySelector(".menu_button") 
let closeButton = document.querySelector(".close_button")
let menuWrap = document.querySelector(".fixed_navi ul")
let menuElements = document.querySelectorAll(".fixed_navi ul li")
let container = document.querySelector("#container")

let menu1 = document.querySelector(".fixed_navi ul li:nth-child(1)")
let menu2 = document.querySelector(".fixed_navi ul li:nth-child(2)")
let menu3 = document.querySelector(".fixed_navi ul li:nth-child(3)")
let menu4 = document.querySelector(".fixed_navi ul li:nth-child(4)")

menuButton.addEventListener("click", hello_navi)
closeButton.addEventListener("click", bye_navi)
container.addEventListener("click", bye_navi)

function hello_navi() {
  menu1.classList.remove("showNavi1_")
  menu2.classList.remove("showNavi2_")
  menu3.classList.remove("showNavi3_")
  menu4.classList.remove("showNavi4_")
  
  if ((menuWrap.style.display = "none")) {
    menuButton.style.display = "none"
    menu1.classList.add("showNavi1")
    menu2.classList.add("showNavi2")
    menu3.classList.add("showNavi3")
    menu4.classList.add("showNavi4")
    closeButton.style.transitionDuration = "1s"
    closeButton.style.display = "block"

    menuWrap.style.transitionDuration = "1s"
    menuWrap.style.display = "block"
  } else {
    menuWrap.style.display = "none"
  }
}
function bye_navi() {
  if ((menuWrap.style.display = "block")) {
    menuButton.style.display = "block"
    closeButton.style.display = "none"
    menuWrap.style.display = "none"
  }
}
