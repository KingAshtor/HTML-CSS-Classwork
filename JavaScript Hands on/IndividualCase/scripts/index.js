//simplifies getElementById
function getEleId(input) {
  return document.getElementById(input);
}

// code for sticky nav
window.onscroll = function() {
  sticky();
};

function sticky() {
  let nav = getEleId("navHeader")
  let sticky = nav.offsetTop;

  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky")
  }
}


//code for calculator tool
function eventListen() {
  getEleId("submitButton").addEventListener("click", compare());
}


function compare() {
  let suit1 = getEleId('suit1').value;
  let suit2 = getEleId('suit2').value;
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

    getEleId("output").innerHTML = output;
  } catch (e) {
    getEleId("output").innerHTML = e;
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

//code for time until calculator tool
function eventListen2() {
  getEleId("submitButton2").addEventListener("click", timeSinceSetup());
}

function timeSinceSetup() {
  // get paragraphs and date from input it then splits it
  let dateIn = getEleId("dateIn");
  let dateCur = getEleId("dateCur")
  let dateInput = document.querySelector('input[type="date"]').value
  let dateSplit = dateInput.split("-");

  //get current date
  let today = new Date();
  let dayCur = today.getDate();
  let monthCur = today.getMonth() + 1;
  let yearCur = today.getFullYear();

  // Input month, day, year
  let dayIn = parseInt(dateSplit[2]);
  let monthIn = parseInt(dateSplit[1]);
  let yearIn = parseInt(dateSplit[0]);

  console.log(dayIn);
  console.log(monthIn);
  console.log(yearIn);

  dateCur.innerHTML = "Current Date:" + monthCur + "-" + dayCur + "-" + yearCur;
  dateIn.innerHTML = "Inputed Date:" + monthIn + "-" + dayIn + "-" + yearIn;

  timeSinceCalc(dayIn, monthIn, yearIn, dayCur, monthCur, yearCur);
}

// calculates time since the date punched in
function timeSinceCalc(dayIn, monthIn, yearIn, dayCur, monthCur, yearCur) {

  // gets turns to days since zero bc for quick math
  let daysIn = dateToDays(dayIn, monthIn, yearIn);
  let daysCur = dateToDays(dayCur, monthCur, yearCur);

  // Does the Math
  let daysDif = daysCur - daysIn

  // converts value back to days months and years in a string to output
  let dateOut = daysToDate(daysDif)

  // sets the dateDif to the diffence
  getEleId("dateDif").innerHTML = dateOut
}

// function that convets month days and years to just days
function dateToDays(day, month, year) {
  day += (year * 365 + month * 31);
  return day;
}

// function to convert days back into days years and months
function daysToDate(daysIn) {
  let days = daysIn
  let years = 0;
  let months = 0;
  let x = 0;

  x = days / 365
  years = Math.floor(x) //the whole number is years
  days = (x - Math.floor(x)) * 365 //subtracts the whole nuber (years) and turns the rest back to days

  x = days / 31
  months = Math.floor(x) //the whole number is months
  days = Math.round((x - Math.floor(x)) * 31) //subtracts the whole nuber (months) and turns the rest back to days

  return "The inputed date is " + years + " years, " + months + " months, and " + days + " days ago"
}
