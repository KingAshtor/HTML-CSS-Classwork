// Author: AshtonSisson
// Date:12-04-2020
"use strict";

// Remove default value and formatting from selection list
function removeSelectDefault() {
  selectBox = document.getElementById("size");
  selectBox.selectedIndex = -1;
  selectBox.style.boxShadow = "none";
}

// Run inital form configuration functions
function setUpPage() {
  removeSelectDefault();
  generatePlaceholder();
}

// Run setup functions when page finish loading
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false)
} else if (window.attachEvent) {
  window.attachEvent("onload", setUpPage);
}


//Remove fallback placeholder
functionzeroPlaceholder() {
  let instrBox = document.getElementById("instructions");
  instrBox.style.color = "black";

  if (instrBox.value === instrBox.placeholder) {
    instrBox.value = "";
  }
}
//Restore placeholder text if box contains no user entry
functioncheckPlaceholder() {
  instrBox = document.getElementById("instructions");

  if (instrBox.value === "") {
    instrBox.style.color = "rgb(178,184,183)";
    instrBox.value = instrBox.placeholder;
  }
}
// Add placeholder text for browsers that dont support placeholder attribute
functiongeneratePlaceholder() {
  if (!Modernizr.input.placeholder) {
    let instrBox = document.getElementById("instructions");
    instrBox.value = instrBox.placeholder;
    instrBox.style.color = "rgb(178,184,183)";

    if (instrBox.addEventListener) {
      instrBox.addEventListener("focus", zeroPlaceholder, false);
      instrBox.addEventListener("blur", checkPlaceholder, false);
    } else if (instrBox.attachEvent) {
      instrBox.attachEvent("onfocus", zeroPlaceholder);
      instrBox.attachEvent("onblur", checkPlaceholder);
    }
  }
}
