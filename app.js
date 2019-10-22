
//Global Variables
var leftCardEl = document.getElementById('left');
var centerCardEl = document.getElementById('center');
var rightCardEl = document.getElementById('right');
var containerEl = document.getElementById('imageContainer');
var round = 0;
var allCards = [];
var maxRounds = 3;
var uniqueCardArray = [];
var allRoundCards = [];
var roundOneArray = [];
var roundTwoArray = [];
var roundThreeArray = [];
var leftCard;
var middleCard;
var rightCard;
var endGame;
var pickedCardID;
//game state variable?

containerEl.addEventListener('click', handleClick);

function uniqueCardGenerator() {
  while (uniqueCardArray.length < 3) {
    var random = makeRandom(5);
    while (!uniqueCardArray.includes(random)) {
      uniqueCardArray.push(random);
    }
  }
}

function getCards() {
  uniqueCardGenerator();
  leftCard = allRoundCards[round][uniqueCardArray[0]];
  middleCard = allRoundCards[round][uniqueCardArray[1]];
  rightCard = allRoundCards[round][uniqueCardArray[2]];
  console.log(leftCard, middleCard, rightCard);
  uniqueCardArray = [];
}

function endGameYesNo() {
  pickedCardID = event.target.title;
  console.log(pickedCardID);
  for (var i = 0; i < allCards.length; i++) {
    if (allCards[i].cardID === pickedCardID) {
      endGame = allCards[i].gameOver;
      console.log(endGame);
      if (endGame === false && round < maxRounds) {
        /// continue
        round++;
      } else {
        /// stop game and render scores and stuff
      }
    }
  }
}

//Card Object
function Card(text, cardRound, gameOver, cardID) {
  this.text = text;
  this.cardRound = cardRound;
  this.cardID = cardID;
  this.gameOver = gameOver;
  allCards.push(this);
}

new Card('blah blah blah', 1, false, '1A');
new Card('hey hi ho', 1, false, '1B');
new Card('some text', 1, true, '1C');
new Card('be or not to be', 1, true, '1D');
new Card('jump over rock', 1, true, '1E');

new Card('Mars mars mars', 2, false, '2A');
new Card('spaceships', 2, false, '2B');
new Card('open the airlock', 2, true, '2C');
new Card('fix door', 2, true, '2D');
new Card('turn on computer', 2, true, '2E');

new Card('Launch rocket', 3, false, '3A');
new Card('connect wire', 3, false, '3B');
new Card('rewire thruster', 3, true, '3C');
new Card('push copilot out airlock', 3, true, '3D');
new Card('Dump cargo', 3, true, '3E');

//Put allCards into array of arrays
function getRounds() {
  for (var i = 0; i < allCards.length; i++) {
    // console.log(allCards[i].cardRound);
    if (allCards[i].cardRound === 1) {
      roundOneArray.push(allCards[i]);
    }
    if (allCards[i].cardRound === 2) {
      roundTwoArray.push(allCards[i]);
    }
    if (allCards[i].cardRound === 3) {
      roundThreeArray.push(allCards[i]);
    }
  }
  allRoundCards = [roundOneArray, roundTwoArray, roundThreeArray];
}
getRounds();

// Makes the random number
function makeRandom(randomCount) {
  return Math.floor(Math.random() * randomCount);
}

// Picking 3 random cards for round
function render() {
  getCards();
  leftCardEl.textContent = leftCard.text;
  leftCardEl.title = leftCard.cardID;
  containerEl.appendChild(leftCardEl);

  centerCardEl.textContent = middleCard.text;
  centerCardEl.title = middleCard.cardID;
  containerEl.appendChild(centerCardEl);

  rightCardEl.textContent = rightCard.text;
  rightCardEl.title = rightCard.cardID;
  containerEl.appendChild(rightCardEl);
}

render();

function handleClick() {
  endGameYesNo();
  render();
  // console.log(event.target.title);
  // pickedCard = event.target.title;
}
