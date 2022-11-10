// Author: Kenice Washington Keiko Utsumi
// Date: 11/7/2022
// Email: klutsumi@ucsc.edu
//Email: kmwashin@ucsc.edu

function sortingHat(str) {
    var length = str.length;
    var mod = length % 4;
    if (mod == 0) {
      return "deer"
    }
    else if (mod == 1) {
      return "turkey"
     }
    else if (mod == 2) {
      return "rabbit"
    }
    else (mod == 3); {
      return "squirrel"

    }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p>You're a silly little critter:" + house + "</p>";
  document.getElementById("output").innerHTML = newText;
})
