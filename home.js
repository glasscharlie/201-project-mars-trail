var userForm = document.getElementById('Start');
userForm.addEventListener('submit', addPlayer);

function addPlayer(event) {
  event.preventDefault();
  var playerID = event.target.newPlayer.value;
  console.log(playerID);
  userForm.removeEventListener('submit', addPlayer);
  window.location.href = 'game.html';
}
