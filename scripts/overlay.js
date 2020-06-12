
window.onscroll = function() {scrollFunction()};
var on = false

function scrollFunction() {
  var scrollPos = $(document).scrollTop();
  var width = ""
  width = 200 - scrollPos / 2
  if (width <= 100) {
    width = 100
  }
  $('#Ebene_1').css({
    'width': ''+ width +'px'
});

function opacity_changer() {
  var scrollPos = $(document).scrollTop();
  var targetOpacity = 1;
  targetOpacity = scrollPos / 500;
  $('nav').css({
      'background-color': 'rgba(48, 48, 48  , '+ targetOpacity +')'
  });

};


$(function(){
  $(window).scroll(function() {
    opacity_changer();
  });
});


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
function color_bar_change() {
  document.getElementById("bar1").style.backgroundColor = "#009245";
  document.getElementById("bar2").style.backgroundColor = "#009245";
  document.getElementById("bar3").style.backgroundColor = "#009245";
}
function color_bar_back() {
  document.getElementById("bar1").style.backgroundColor = "white";
  document.getElementById("bar2").style.backgroundColor = "white";
  document.getElementById("bar3").style.backgroundColor = "white";
}
function change_color() {
  let myElements = document.querySelectorAll(".cls-1");
  for (let i = 0; i < myElements.length; i++) {
	myElements[i].style.fill = "rgb(11, 90, 0)";
}}
function change_color_back() {
  let myElements = document.querySelectorAll(".cls-1");
  for (let i = 0; i < myElements.length; i++) {
	myElements[i].style.fill = "#009245";
}}
