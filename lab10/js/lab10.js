// Author: Keiko Utsumi
// Date: 11/1/2022
// Email: klutsumi@ucsc.edu

function sortUserName(inputName) {
  var userName = inputName;

  var nameArray = userName.split('');

  var sortedArray = nameArray.sort();

  var nameSorted = sortedArray.join('');

  return(nameSorted);
}

var buttonEl = document.getElementById("my-button");

var outputEl = document.getElementById("output");

buttonEl.addEventListener('click', function() {
  var enteredName = document.getElementById("user-name").value;
  var nameSorted = sortUserName(enteredName);
  outputEl.innerHTML = nameSorted;

});
