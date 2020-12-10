/*Hands on project 6-1
By: Ashton Sisson
12-02-2020*/
"use strict";

let formValidity = true;

function validateRequired() {
  let inputElements = document.querySelectorAll("#contactinfo input");
  let errorDiv = document.getElementById("errorText");
  let elementCount = inputElements.length;
  let requiredValidity = true;
  let currentElement;

  try {
    for (var i = 0; i < elementCount; i++) {
      // validate all input elements in the feildset
      currentElement = inputElements[i];
      if (currentElement.value === "") {
        currentElement.style.background = "rgb(255,233,233)";
        requiredValidity = false;
      } else {
        currentElement.style.background = "white";
      }
    }

    if (requiredValidity === false) {
      throw "Please complete all feilds";
    }

    errorDiv.style.display = "none";
    errorDiv.innerHTML = "";

  } catch (msg) {
    errorDiv.style.display = "block";
    errorDiv.innerHTML = msg;
    formValidity = false;
  }
}

// Create event listeners
function createEventListeners() {
  var form = document.getElementsByTagName("form")[0];

  if (form.addEventListener) {
    form.addEventListener("submit", validateForm, false);
  } else if (form.attachEvent) {
    form.attachEvent("onsubmit", validateForm);
  }
}

//Validate form
function validateForm(evt) {
  if (evt.preventDefault) {
    evt.preventDefault(); //Prevents form from submitting
  } else {
    evt.returnValue = false; //prevents from from submitting in IE8
  }

  formValidity = true //resets value for revalidation
  validateRequired();
  validateNumbers();

  if (formValidity === true) {
    document.getElementsByTagName("form")[0].submit();
  }
}

// run setup function when page finishes loading
if (window.addEventListener) {
  window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", createEventListeners);
}

// Validates number feilds for old browsers
function validateNumbers() {
  let numberInputs = document.querySelectorAll("#contactinfo input[type=number]");
  let elementCount = numberInputs.length;
  let numErrorDiv = document.getElementById("numErrorText");
  let numbersValidity = true;
  let currentElement;

  try {
    for (var i = 0; i < elementCount; i++) {
      // validate all input elements of type "number" in feildset
      currentElement = numberInputs[i];
      if (isNaN(currentElement.value) || (currentElement.value === "")) {
        currentElement.style.background = "rgb(255,233,233)";
        numbersValidity = false;
      } else {
        currentElement.style.barground = "white";
      }
    }

    if (numbersValidity === false) {
      throw "Zip and Social Security values must be numbers.";
    }

    numErrorDiv.style.display = "none";
    numErrorDiv.innerHTML = "";
  } catch (msg) {
    numErrorDiv.style.display = "block";
    numErrorDiv.innerHTML = msg;
    formValidity = false;
  }
}
