/*
Ashton Sisson
scripts.js
12-18-2020
*/

// hamburger menu function
function hamburger() {
  let menu = getEleId("menu-links");

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

//simplifies getElementById (got tired of typeing it)
function getEleId(input) {
  return document.getElementById(input);
}
