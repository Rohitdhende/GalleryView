var open = document.getElementById('hamburger');
var changeIcon = true;

open.addEventListener("click", function(){

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    }
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
});
window.onscroll =function(){scrollFunction()};
function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.getElementById("myTopnav").style.background = "#080808";
        document.getElementById("myTopnav").style.transition = "1s";
        document.getElementById("myBtn").style.display = "block";
       }
       else{
        document.getElementById("myTopnav").style.background = "transparent";
            document.getElementById("myBtn").style.display = "none";
       }
    }
window.onscroll = function() {scrollFunction()};


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



$(document).ready(function(){

  $('body').bind('cut copy paste',function(e)
  {
    e.preventDefault();
  })
  $("body").on("contextmenu",function(e){
    return false;
  })
})


// This code define not to use inspect in the website. Comment this code when in development mode
// document.onkeydown = function(e) {
//   if(e.code == 123) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyIdentifier == 'I' ||  e.key == 'I' || e.keyCode == 'I'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyIdentifier == 'J' ||  e.key == 'J' || e.keyCode == 'J'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.keyIdentifier == 'U' ||  e.key == 'U' || e.keyCode == 'U'.charCodeAt(0)) {
//      return false;
//   }
// }
    




