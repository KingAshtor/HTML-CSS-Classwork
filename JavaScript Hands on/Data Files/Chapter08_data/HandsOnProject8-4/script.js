// ashtonsisson
// 12-18-2020
// Hands-on Project 8-4
'use strict';

//simplifies getElementById (got tired of typeing it)
function getEleId(input) {
  return document.getElementById(input);
}

//simplifies getElementsByTagName (got tired of typeing it)
function getEleTag(input) {
  return document.getElementsByTagName(input);
}

let list = [];

function generateList() {
  let listItems = getEleTag("li");
  for (var i = listItems.length - 1; i >= 0; i--) {
    getEleTag("ol")[0].removeChild(listItems[i]);
  }

  for (var i = 0; i < list.length; i++) {
    let newItem = "<span class='first'>first</span>" + list[i];
    let newListItem = document.createElement("li");
    newListItem.innerHTML = newItem;
    getEleTag("ol")[0].appendChild(newListItem);

    let firstButtons = document.querySelectorAll(".first");
    let lastFirstButton = firstButtons[firstButtons.length - 1];

    if (lastFirstButton.addEventListener) {
      lastFirstButton.addEventListener("click", moveToTop, false);
    } else if (lastFirstButton.attachEvent) {
      lastFirstButton.attachEvent("onclick", moveToTop);
    }
  }
}

function addItem() {
  let newItem = getEleId("newItem");
  list.push(newItem.value);
  newItem.focus();
  newItem.value = "";
  generateList();
}

function moveToTop(evt) {
  if (evt === undefined) { // get caller element in IE8
    evt = window.event;
  }

  let callerElement = evt.target || evt.srcElement;
  let listItems = document.getElementsByTagName("li");
  let parentItem = callerElement.parentNode;

  for (var i = 0; i < list.length; i++) {
    if (parentItem.innerHTML.search(list[i]) !== -1) {
      let itemToMove = list.splice(i, 1);
      list.unshift(itemToMove)
    }
  }
  generateList();
}

function createEventListener() {
  let addButton = getEleId("button");

  if (addButton.addEventListener) {
    addButton.addEventListener("click", addItem, false);
  } else if (addButton.attachEvent) {
    addButton.attachEvent("onclick", addItem);
  }
}

if (window.addEventListener) {
  window.addEventListener("load", createEventListener, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", createEventListener);
}
