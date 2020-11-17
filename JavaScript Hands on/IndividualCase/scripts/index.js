// document.getElementById("submitButton").addEventListener("click", compare());
function eventListen() {
  document.getElementById("submitButton").addEventListener("click", compare());
}

function compare() {
  let suit1 = document.getElementById('suit1').value;
  let suit2 = document.getElementById('suit2').value;
  let output = "";

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
  } else {
    suit1 = {
      name: "T-60",
      bd: 980,
      ed: 645,
    }
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
  } else {
    suit2 = {
      name: "T-60",
      bd: 980,
      ed: 645,
    }
  }
  console.log(suit1.name);
  console.log(suit1.bd);

  let bdDif = suit1.bd - suit2.bd;

  if (bdDif > 0) {
    output += suit1.name + " has " + bdDif + " more balsitic defence than " + suit2.name;
  } else if (bdDif == 0) {
    output += suit1.name + " has the same balsitic defence as " + suit2.name;
  } else if (bdDif < 0) {
    output += suit1.name + " has " + Math.abs(bdDif) + " less balsitic defence than " + suit2.name;
  }

  document.getElementById("output").innerHTML = output;
}
