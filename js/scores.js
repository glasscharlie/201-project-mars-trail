'use strict';
//gets player name from localStorage
if (localStorage.Player) {
  var players = JSON.parse(localStorage.Player);
}

// sorts the table by player score (highest to lowest)
players.sort(function(a, b){
  return b.score-a.score;
});
// if two player scores are equal, sorts them on the table by who has the lowest time played
// looks at two players in the array, and if their scores are the same, and the 2nd one in the array has a lower time played, it switches them
function sortTime() {
  for (var j = 0; j < players.length; j++){
    for (var i = 0; i < players.length - 1; i++) {
      if (players[i].score === players[i + 1].score) {
        if (players[i].time > players[i + 1].time) {
          var a = players[i];
          var b = players[i + 1];
          players[i] = b;
          players[i + 1] = a;
        }
      }
    }
  }
}
sortTime();

// sets the player array length to cap at 10 so that only 10 show up on the table
while(players.length > 10){
  players.pop();
}

// function to generates the table
function generateTable() {
// gets elements from html to render the table to
  var body = document.getElementById('highscores');
  var tbl = document.createElement('table');
  var tblBody = document.createElement('tbody');
  // renders the name heading and appends it to the table
  var newTHead = document.createElement('thead');
  var newTR = document.createElement('tr');
  var newTH = document.createElement('th');
  newTH.textContent = 'Name';
  newTR.appendChild(newTH);
  newTHead.appendChild(newTR);
  tbl.appendChild(newTHead);
  // renders the score heading and appends it
  newTH = document.createElement('th');
  newTH.textContent = 'Score';
  newTR.appendChild(newTH);
  // renders the time heading and appends it
  newTH = document.createElement('th');
  newTH.textContent = 'Time';
  newTR.appendChild(newTH);
  //Creates a row for each player in the player array (array caps at 10)
  for (var i = 0; i < players.length; i++) {
    var row = document.createElement('tr');
    tblBody.appendChild(row);
    //creates the table data to render to the table rows
    for (var j = 0; j < 1; j++){
      var cell = document.createElement('td');
      var cellText = document.createTextNode(players[i].name);
      cell.appendChild(cellText);
      row.appendChild(cell);
      var cellTwo = document.createElement('td');
      var cellTextTwo = document.createTextNode(players[i].score);
      cellTwo.appendChild(cellTextTwo);
      row.appendChild(cellTwo);
      var cellThree = document.createElement('td');
      var cellTextThree = document.createTextNode(players[i].time);
      cellThree.appendChild(cellTextThree);
      row.appendChild(cellThree);
    }

  }
  // appends the table body to the table
  body.appendChild(tbl);
  tbl.appendChild(tblBody);

}
generateTable();
