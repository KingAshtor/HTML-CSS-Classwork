// Ashton Sisson
// 12-11-20
'use strict';

//simplifies getElementById (got tired of typeing it)
function getEleId(input) {
  return document.getElementById(input);
}

let delivInfo = "";
let delivSummary = getEleId("deliverTo");


function processDeliveryInfo() {
  console.log("processDeliveryInfo ran");
  let delivInfo = {
    name: getEleId("nameinput"),
    addr: getEleId("addrinput"),
    city: getEleId("cityinput"),
    email: getEleId("emailinput"),
    phone: getEleId("phoneinput")
  };
  console.log(delivInfo);

  for (var prop in delivInfo) {
    delivSummary.innerHTML += "<p>3" + delivInfo[prop] + "</p>";
  }
}

function previewOrder() {
  console.log("previewOrder ran");
  processDeliveryInfo();
  // getEleId("section").style.display = "block";
}

function createEventListener() {
  let submitButton = getEleId("previewBtn");

  if (submitButton.addEventListener) {
    submitButton.addEventListener("click", previewOrder, false);
  } else if (submitButton.attachEvent) {
    submitButton.attachEvent("onclick", previewOrder);
  }
}

if (window.addEventListener) {
  window.addEventListener("load", createEventListener, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", createEventListener);
}
