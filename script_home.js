
window.onscroll = function() {scrollFunction()};
var on = false
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 1) {
    document.getElementById("Ebene_1").style.width = "100px";
  } else {
    document.getElementById("Ebene_1").style.width = "200px";
  }
}
function open_menu(x) {
  document.getElementById("menu_screen").style.visibility = "visible"
}
function close_menu(x) {
  document.getElementById("menu_screen").style.visibility = "hidden"
}
function animation_menubar(x) {
  x.classList.toggle("change");
  if (on) {
    on = false;
    document.getElementById("menu_screen").classList.toggle("transition")
    setTimeout(() => { document.getElementById("menu_screen").style.visibility = "hidden"; }, 1000);

  } else {
    document.getElementById("menu_screen").style.visibility = "visible"
    document.getElementById("menu_screen").classList.toggle("transition")
    setTimeout(() => { document.getElementById("menu_screen").style.visibility = "visible"; }, 1000);
    on = true

  }
}
function change_color() {
  let myElements = document.querySelectorAll(".cls-1");
  for (let i = 0; i < myElements.length; i++) {
	myElements[i].style.fill = "red";
}}
function change_color_back() {
  console.log("hi")
  let myElements = document.querySelectorAll(".cls-1");
  for (let i = 0; i < myElements.length; i++) {
	myElements[i].style.fill = "#009245";
}}