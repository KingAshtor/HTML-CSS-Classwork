/* Ashton Sisson
12-18-2020
Hands-on Project 8-3 */
'use strict';

// 378282246310005

//simplifies getElementById (got tired of typeing it)
function getEleId(input) {
  return document.getElementById(input);
}

function selectCardType() {
  let cardNumValue = getEleId("ccNum").value;
  let visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
  let mc = /^5[1-5][0-9]{14}$/;
  let discover = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
  let amex = /^3[47][0-9]{13}$/;

  if (visa.test(cardNumValue)) {
    getEleId("visa").checked = "checked";
  } else if (mc.test(cardNumValue)) {
    getEleId("mc").checked = "checked";
  } else if (discover.test(cardNumValue)) {
    getEleId("discover").checked = "checked";
  } else if (amex.test(cardNumValue)) {
    getEleId("amex").checked = "checked";
  }
}

function createEventListener() {
  let cardNum = getEleId("ccNum");

  if (cardNum.addEventListener) {
    cardNum.addEventListener("change", selectCardType, false);
    console.log("changed");
  } else if (cardNum.attachEvent) {
    cardNum.attachEvent("onchange", selectCardType);
    console.log("changed");
  }
}

if (window.addEventListener) {
  window.addEventListener("load", createEventListener, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", createEventListener);
}
