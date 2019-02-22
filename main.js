'use strict';

function main () {
  console.log('JS Running');

  var navbar = document.getElementById("navbar");

  var windowYOffset;
  window.addEventListener("scroll", function() {
    windowYOffset = window.pageYOffset;
    if (windowYOffset >= navbar.offsetTop) {
      navbar.classList.add("navbar-sticky");
      navbar.classList.remove("navbar-block");
    }
    if (windowYOffset === navbar.offsetTop) {
      navbar.classList.remove("navbar-sticky");
      navbar.classList.add("navbar-block")
    }
  })



}

window.addEventListener('load', main);