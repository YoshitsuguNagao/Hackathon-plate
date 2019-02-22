'use strict';

function main () {
  console.log('JS Running');

  var navbar = document.getElementById("navbar");
  var navbarItems = document.querySelectorAll("section-1-li");
  // var navbarHidden = document.getElementById("navbarHidden");

  var windowYOffset;
  window.addEventListener("scroll", function() {
    windowYOffset = window.pageYOffset;
    if (windowYOffset >= navbar.offsetTop) {
      navbar.classList.add("navbar-sticky");
      navbar.classList.remove("navbar-block");
      navbarItems.forEach(function(li) {
        li.classList.add("section-1-li");
      });
      // navbarHidden.style.display = "none";
    }
    if (windowYOffset === navbar.offsetTop) {
      navbar.classList.remove("navbar-sticky");
      navbar.classList.add("navbar-block");
      navbarItems.forEach(function(li) {
        li.classList.remove("section-1-li");
      });
      // navbarHidden.style.display = "block";
    }
  })



}

window.addEventListener('load', main);