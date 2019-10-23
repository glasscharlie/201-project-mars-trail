'use strict';

if (localStorage.Player) {
  var players = JSON.parse(localStorage.Player);
}
console.log(players);
function dynamicSort(property) {
  var sortOrder = 1;
  if(property[0] === '-') {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a,b) {
    var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    return result * sortOrder;
  };
}
players.sort(dynamicSort('-score'));
console.log('test',players);



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
  console.log('AHHHHHHH', players);
  body.appendChild(tbl);
  tbl.appendChild(tblBody);


}
generateTable();


