// Ashton Sisson 1-08-2021
'use strict';

//simplifies getElementById (got tired of typeing it)
function getEleId(input) {
  return document.getElementById(input);
}


function populateInfo() {
  if (location.search) {
    let greeting = location.search;
    greeting = greeting.replace("+", " ");
    greeting = greeting.substring(greeting.lastIndexOf("=") + 1);
    getEleId("greetingtext").innerHTML = decodeURIComponent(greeting);
  }
}

if (window.addEventListener) {
  window.addEventListener("load", populateInfo, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", populateInfo);
}
