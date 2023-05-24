window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var logoimg= document.getElementById("logoimg");
var topp= document.getElementById("topp");
var links= document.getElementById("links");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= 100) {
    navbar.classList.add("sticky");
    navbar.style.background="white";
    topp.style.display="block";
    logoimg.src = ("assets/images/logo.png");
  } else {
    navbar.classList.remove("sticky");
    logoimg.src = ("assets/images/logo2.png");
    navbar.style.backgroundImage="url('assets/images/home2.jpeg')";
    navbar.style.backgroundRepeat="no-repeat";
    navbar.style.backgroundAttachment="fixed";
    navbar.style.backgroundSize= "cover";
    topp.style.display="none";
  }
}

AOS.init();