// Ashton Sisson 1-08-2021
'use strict';

//simplifies getElementById (got tired of typeing it)
function getEleId(input) {
  return document.getElementById(input);
}

//simplifies getElementsByTagName (got tired of typeing it)
function getEleTag(input) {
  return document.getElementsByTagName(input);
}


// code start
function processCookie() {
  let expiresDate = new Date();
  if (getEleId("rememberinput").checked) {
    expiresDate.setMinutes(expiresDate.getMinutes() + 2);
    document.cookie = "username=" + getEleId("usernameinput").value +"; expires="+ expiresDate.toUTCString();
    console.log("cookie proccesed");
  } else {
    expiresDate.setDate(expiresDate.getDate() - 7);
    document.cookie = "username=null; expires=" + expiresDate.toUTCString();
  }
}

function populateInfo() {
  if (document.cookie) {
    let uname = document.cookie;
    uname = uname.substring(uname.lastIndexOf("=") + 1);
    getEleId("usernameinput").value = uname;
  }
}

function handleSubmit(evt) {
  if (evt.preventDefault) {
    evt.preventDefault();
  } else {
    evt.returnValue = false;
  }

  processCookie();
  getEleTag("form")[0].submit();
}

function createEventListener() {
  var loginForm = document.getElementsByTagName("form")[0];

  if (loginForm.addEventListener) {
    loginForm.addEventListener("submit", handleSubmit, false);
  } else if (loginForm.attachEvent) {
    loginForm.attachEvent("onsubmit", handleSubmit);
  }
}

function setUpPage() {
  populateInfo();
  createEventListener();
}

if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", setUpPage);
}
