'use strict';

if (localStorage.Player) {
  var players = JSON.parse(localStorage.Player);
}
// console.log(players);


players.sort(function(a, b){
  return b.score-a.score;
});

function sortTime() {
  for (var j = 0; j < players.length; j++){
    for (var i = 0; i < players.length - 1; i++) {
      console.log('players1 test1',players[i]);
      console.log('player2 test1',players[i + 1]);
      if (players[i].score === players[i + 1].score) {
        if (players[i].time < players[i + 1].time) {
          var a = players[i];
          var b = players[i + 1];
          players[i] = b;
          players[i + 1] = a;
          console.log('players1 test2',players[i]);
          console.log('player2 test2',players[i + 1]);


        }

      }
    }
  }
}
sortTime();

// for (var i = 0; i < players.length; i++) {
//   if (players[i].score === players [i - 1]) {
//     players.sort(function(a, b) {
//     return b.time - a.time;
//   }
// }
// }



while(players.length > 10){
  players.pop();
}


function generateTable() {

  var body = document.getElementById('highscores');
  var tbl = document.createElement('table');
  var tblBody = document.createElement('tbody');

  var newTHead = document.createElement('thead');
  var newTR = document.createElement('tr');
  var newTH = document.createElement('th');
  newTH.textContent = 'Name';
  newTR.appendChild(newTH);
  newTHead.appendChild(newTR);
  tbl.appendChild(newTHead);

  newTH = document.createElement('th');
  newTH.textContent = 'Score';
  newTR.appendChild(newTH);

  newTH = document.createElement('th');
  newTH.textContent = 'Time';
  newTR.appendChild(newTH);

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

    for (var l = 0; l < 1; l++){
      var cellThree = document.createElement('td');
      var cellTextThree = document.createTextNode(players[i].time);
      cellThree.appendChild(cellTextThree);
      row.appendChild(cellThree);
    }

  }
  // console.log('AHHHHHHH', players);
  body.appendChild(tbl);
  tbl.appendChild(tblBody);


}
generateTable();


