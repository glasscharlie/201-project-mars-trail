'use strict';
//gets element of the start button
var userForm = document.getElementById('Start');
userForm.addEventListener('submit', addPlayer);

//gets the player name input and stores it in localStorage
function addPlayer(event) {
  event.preventDefault();
  var playerID = event.target.newPlayer.value;
  localStorage.Data = JSON.stringify(playerID);
  userForm.removeEventListener('submit', addPlayer);
  window.location.href = 'html/game.html';
}


