/*Ashton Sisson
12-18-20 */
'use strict';

//simplifies getElementById (got tired of typeing it)
function getEleId(input) {
  return document.getElementById(input);
}

//simplifies getElementsByTagName (got tired of typeing it)
function getEleTag(input) {
  return document.getElementsByTagName(input);
}

let newAccountArray = [];

function createID() {
  let fname = getEleId("fnameinput");
  let lname = getEleId("lnameinput");
  let zip = getEleId("zipinput");
  let account = getEleId("accountidbox");
  let fields = getEleTag("input");
  let acctid;
  let firstInit;
  let lastInit;

  if (fname != "" && fname != "" && zip != "") {
    firstInit = fname.value.charAt(0).toUpperCase();
    lastInit = lname.value.charAt(0).toUpperCase();
    acctid = firstInit + lastInit + zip.value;
    account.value = acctid;
    newAccountArray = [];
    for (var i = 0; i < fields.length - 1; i++) {
      newAccountArray.push(fields[i].value);
    }
  }
}

function createEventListener() {
  let fname = getEleId("fnameinput");
  let lname = getEleId("lnameinput");
  let zip = getEleId("zipinput");

  if (fname.addEventListener) {
    fname.addEventListener("change", createID, false);
    lname.addEventListener("change", createID, false);
    zip.addEventListener("change", createID, false);
  } else if (submitButton.attachEvent) {
    fname.attachEvent("onchange", createID);
    lname.attachEvent("onchange", createID);
    zip.attachEvent("onchange", createID);
  }
}

if (window.addEventListener) {
  window.addEventListener("load", createEventListener, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", createEventListener);
}
