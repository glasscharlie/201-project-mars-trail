var players = JSON.parse(localStorage.Player);
console.log (players);


function generateTable() {
  var body = document.getElementById('highscores');

  var tbl = document.createElement('table');
  console.log(typeof(tbl));
  var tblBody = document.createElement('tbody');

  for (var i = 0; i < players.length; i++) {
    var row = document.createElement('tr');

    tblBody.appendChild(row);

    for (var j = 0; j < 1; j++){
      var cell = document.createElement('td');
      var cellText = document.createTextNode(players[i].name);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    
    for (var k = 0; k < 1; k++){
      var cellTwo = document.createElement('td');
      var cellTextTwo = document.createTextNode(players[i].score);
      cellTwo.appendChild(cellTextTwo);
      row.appendChild(cellTwo);
    }

  }

  body.appendChild(tbl);
  tbl.appendChild(tblBody);
  tbl.setAttribute('border', 2);
}
generateTable();
