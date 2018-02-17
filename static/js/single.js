"use strict";

var nav = document.querySelector("nav");
var topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY > topOfNav) {
    document.body.classList.add("fixed-nav-parent");
  } else {
    document.body.classList.remove("fixed-nav-parent");
  }
}

window.addEventListener("scroll", fixNav);
