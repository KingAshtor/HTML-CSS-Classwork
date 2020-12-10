// code for sticky nav
window.onscroll = function() {
  sticky();
};

function sticky() {
  let nav = document.getElementById("navHeader")
  let sticky = nav.offsetTop;

  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky")
  }
}


//code for calculator tool
function eventListen() {
  document.getElementById("submitButton").addEventListener("click", compare());
}


function compare() {
  let suit1 = document.getElementById('suit1').value;
  let suit2 = document.getElementById('suit2').value;
  let output = "";

  try {
    if (suit1 == 't45') {
      suit1 = {
        name: "T-45",
        bd: 500,
        ed: 310,
      }
    } else if (suit1 == 't51') {
      suit1 = {
        name: "T-51",
        bd: 740,
        ed: 490,
      }
    } else if (suit1 == 't60') {
      suit1 = {
        name: "T-60",
        bd: 980,
        ed: 645,
      }
    } else {
      throw "Unknow suit. Please select a suit from the list."
    }

    if (suit2 == 't45') {
      suit2 = {
        name: "T-45",
        bd: 500,
        ed: 310,
      }
    } else if (suit2 == 't51') {
      suit2 = {
        name: "T-51",
        bd: 740,
        ed: 490,
      }
    } else if (suit2 == 't60') {
      suit2 = {
        name: "T-60",
        bd: 980,
        ed: 645,
      }
    } else {
      throw "Unknow suit. Please select a suit from the list."
    }

    let bdDif = suit1.bd - suit2.bd;

    if (bdDif > 0) {
      output += suit1.name + " has " + bdDif + " more balsitic defence than " + suit2.name;
    } else if (bdDif == 0) {
      output += suit1.name + " has the same balsitic defence as " + suit2.name;
    } else if (bdDif < 0) {
      output += suit1.name + " has " + Math.abs(bdDif) + " less balsitic defence than " + suit2.name;
    }

    document.getElementById("output").innerHTML = output;
  } catch (e) {
    document.getElementById("output").innerHTML = e;
  }
}


// code for subform
let formValidity = true;

if (window.addEventListener) {
  window.addEventListener("load", runSubForm, false)
} else if (window.attachEvent) {
  window.attachEvent("onload", runSubForm);
}


function runSubForm() {
  createEventListeners();
}

function createEventListeners() {
  let form = document.getElementsByTagName("form")[0];

  if (form.addEventListener) {
    form.addEventListener("submit", validateForm, false);
  } else if (form.attachEvent) {
    form.attachEvent("onsubmit", validateForm);
  }
}

function validateForm(evt) {
  if (evt.preventDefault) {
    evt.preventDefault(); //Prevents form from submitting
  } else {
    evt.returnValue = false; //prevents from from submitting in IE8
  }

  formValidity = true //resets value for revalidation
  validateRequired();
  // validateCountry();

  if (formValidity === true) {
    document.getElementsByTagName("form")[0].submit();
  }
}

function validateRequired() {
  let inputElements = document.querySelectorAll("#formData input");
  let errorDiv = document.getElementById("feedback");
  let elementCount = inputElements.length;
  let requiredValidity = true;
  let currentElement;

  try {
    for (var i = 0; i <= elementCount; i++) {
      // validate all input elements in the feildset
      currentElement = inputElements[i];
      if (i < elementCount) {
        if (currentElement.value === "") {
          currentElement.style.background = "rgb(255,233,233)";
          requiredValidity = false;
        } else {
          currentElement.style.background = "white";
        }
      } else {
        // validateCountry();
        if (document.getElementById("countryList").value === "placeholder") {
          requiredValidity = false;
          formValidity = false;
          throw "<br><b>Please complete country of origon feild</b><br><br>"
        }
      }
    }

    if (requiredValidity === false) {
      throw "<br><b>Please complete all required feilds</b><br><b>Required feilds are labeled with a * and are now marked red</b><br><br>";
    }

    errorDiv.style.display = "none";
    errorDiv.innerHTML = "";

  } catch (msg) {
    errorDiv.style.display = "block";
    errorDiv.innerHTML = msg;
    formValidity = false;
  }
}
