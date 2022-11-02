// Author: Keiko Utsumi
// Date: 11/1/2022
// Email: klutsumi@ucsc.edu

function sortUserName(inputName) {
  var userName = inputName

  var nameArray =
  username.split('')

  var sortedArray =
  nameArray.sort();

  var nameSorted =
  sortedArray.join('');

  return(nameSorted);
}

var buttonEl = document.getElementById("my-button");

var outputEl = document.getElementById("output");

buttonEl.addEventListener('click', function() {
  var enteredName = document.getElementById("userName").value;
  var sortedName = sortUserName(enteredName);
  outputEl.innerHTML = sortUserName;
})
