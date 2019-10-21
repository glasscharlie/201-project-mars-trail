var leftCardEl = document.getElementById('left');
var centerCardEl = document.getElementById('center');
var rightCardEl = document.getElementById('right');
var containerEl = document.getElementById('imageContainer');


//Global Variables

var round = 1;
var allCards = [];
var maxRounds = 6;
var uniqueCardArray = [];
var allRoundCards = [];
var roundOneArray = [];
var roundTwoArray = [];
var roundThreeArray = [];
var leftCard;
var middleCard;
var rightCard;
//game state variable?


function uniqueCardGenerator() {
  while (uniqueCardArray.length < 3) {
    var random = makeRandom(5);
    while (!uniqueCardArray.includes(random)) {
      uniqueCardArray.push(random);
    }
  }
}

function getCards() {
  for (var i = 0; i < allRoundCards.length; i++) {
    uniqueCardGenerator();
    leftCard = allRoundCards[i][uniqueCardArray[0]];
    middleCard = allRoundCards[i][uniqueCardArray[1]];
    rightCard = allRoundCards[i][uniqueCardArray[2]];
    console.log(leftCard, middleCard, rightCard);
    uniqueCardArray = [];
  }
}

function endGameYesNo() {
  //insert i for 0 when we have it set up properly
  //pickedCard will be connected to an event listener.
  var pickedCard = allCards[0].gameOver;
  if (pickedCard.gameOver = false) {
    getCards();
  } else {
    //render end of game message and score.
    return;
  }
}



//Card Object
function Card(text, cardRound, gameOver) {
  this.text = text;
  this.cardRound = cardRound;
  // this.cardID = cardID;
  this.gameOver = gameOver;
  allCards.push(this);
}

new Card('blah blah blah', 1, false);
new Card('hey hi ho', 1, false);
new Card('some text', 1, true);
new Card('be or not to be', 1, true);
new Card('jump over rock', 1, true);

new Card('Mars mars mars', 2, false);
new Card('spaceships', 2, false);
new Card('open the airlock', 2, true);
new Card('fix door', 2, true);
new Card('turn on computer', 2, true);

new Card('Launch rocket', 3, false);
new Card('connect wire', 3, false);
new Card('rewire thruster', 3, true);
new Card('push copilot out airlock', 3, true);
new Card('Dump cargo', 3, true);

//Put allCards into array of arrays
function getRounds() {
  for (k = 0;k < allCards.length;k++) {
    // console.log(allCards[k].cardRound);
    if (allCards[k].cardRound === 1) {
      roundOneArray.push(allCards[k]);
    }
    if (allCards[k].cardRound === 2) {
      roundTwoArray.push(allCards[k]);
    }
    if (allCards[k].cardRound === 3) {
      roundThreeArray.push(allCards[k]);
    }
  }
  allRoundCards = [roundOneArray,roundTwoArray,roundThreeArray];
}
getRounds();

// Makes the random number
function makeRandom(randomCount) {
  return Math.floor(Math.random() * randomCount);
}

// Picking 3 random cards for round
function render() {
  getCards()
  leftCardEl.textContent = leftCard.text;
  containerEl.appendChild(leftCardEl);
  
  centerCardEl.textContent = middleCard.text;
  containerEl.appendChild(centerCardEl);
  
  rightCardEl.textContent = rightCard.text;
  containerEl.appendChild(rightCardEl);
}

render() 
