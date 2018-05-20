"use strict";

var nav = document.querySelector("nav");
nav.classList.add("nav--fixed");
document.body.style.paddingTop = nav.offsetHeight + "px";
