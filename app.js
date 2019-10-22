//Global Variables
var topCardEl = document.getElementById('situation');
var leftCardEl = document.getElementById('left');
var centerCardEl = document.getElementById('center');
var rightCardEl = document.getElementById('right');
var containerEl = document.getElementById('imageContainer');
var round = 0;
var playerScore = 0;
var allPlayers = [];
var allCards = [];
var maxRounds = 5;
var uniqueCardArray = [];
var allRoundCards = [];
var roundOneArray = [];
var roundTwoArray = [];
var roundThreeArray = [];
var roundFourArray = [];
var roundFiveArray = [];
var roundSixArray = [];
var topCard;
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
  // console.log('line 39', allRoundCards[round][uniqueCardArray[0]].gameOver);
  // console.log('line 40', allRoundCards[round][uniqueCardArray[1]].gameOver);
  // console.log('line 41', allRoundCards[round][uniqueCardArray[2]].gameOver);
  if (allRoundCards[round][uniqueCardArray[0]].gameOver === allRoundCards[round][uniqueCardArray[1]].gameOver && allRoundCards[round][uniqueCardArray[0]].gameOver === allRoundCards[round][uniqueCardArray[2]].gameOver) {
    console.log('I was here.');
    for (var i=0; i<allRoundCards[round].length; i++) {
      if (allRoundCards[round][i].gameOver !== allRoundCards[round][uniqueCardArray[0]].gameOver) {
        var randomIndex = makeRandom(2);
        uniqueCardArray[randomIndex] = i;
      }
    }
  }
  // console.log('line 47', allRoundCards[round][uniqueCardArray[0]].gameOver);
  // console.log('line 48', allRoundCards[round][uniqueCardArray[1]].gameOver);
  // console.log('line 49', allRoundCards[round][uniqueCardArray[2]].gameOver);
}

function getCards() {
  uniqueCardGenerator();
  topCard = roundScenarioText[round];
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
      console.log('line 53');
      if (endGame === false && round < maxRounds) {
        /// continue
        round++;
        playerScore++;
        console.log('round: ', round);
        render();
      }
      else if (round === maxRounds && endGame === false) {
        //Winning End game
        removeEventListener('click', handleClick);
        leftCardEl.remove();
        centerCardEl.remove();
        rightCardEl.remove();
        topCardEl.remove();
        var gameOverEl = document.createElement('div');
        gameOverEl.textContent = 'You Win';
        gameOverEl.id = 'gameOverElement';
        containerEl.appendChild(gameOverEl);
        console.log('GAME OVER Win!!!!!');
        playerScore++;
        getStorageData();
      }
      else {
        removeEventListener('click', handleClick);
        leftCardEl.remove();
        centerCardEl.remove();
        rightCardEl.remove();
        topCardEl.remove();
        gameOverEl = document.createElement('div');
        gameOverEl.textContent = 'GAME OVER';
        gameOverEl.id = 'gameOverElement';
        containerEl.appendChild(gameOverEl);
        console.log('GAME OVER lose!!!!!');
        getStorageData();
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
//Round 1
new Card(`Good ${card1AText}`, 1, false, '1A');
new Card(`Good ${card1BText}`, 1, false, '1B');
new Card(`Good ${card1CText}`, 1, false, '1C');
new Card(`Bad ${card1AText}`, 1, true, '1D');
new Card(`Bad ${card1BText}`, 1, true, '1E');
//Round 2
new Card(`Good ${card2AText}`, 2, false, '2A');
new Card(`Good ${card2BText}`, 2, false, '2B');
new Card(`Good ${card2CText}`, 2, false, '2C');
new Card(`Bad ${card2AText}`, 2, true, '2D');
new Card(`Bad ${card2BText}`, 2, true, '2E');
//Round 3
new Card(`Good ${card3AText}`, 3, false, '3A');
new Card(`Good ${card3BText}`, 3, false, '3B');
new Card(`Bad ${card3CText}`, 3, true, '3C');
new Card(`Bad ${card3AText}`, 3, true, '3D');
new Card(`Bad ${card3BText}`, 3, true, '3E');
//Round 4
new Card(`Good ${card4AText}`, 4, false, '4A');
new Card(`Good ${card4BText}`, 4, false, '4B');
new Card(`Bad ${card4CText}`, 4, true, '4C');
new Card(`Bad ${card4AText}`, 4, true, '4D');
new Card(`Bad ${card4BText}`, 4, true, '4E');
//Round 5
new Card(`Good ${card5AText}`, 5, false, '5A');
new Card(`Good ${card5BText}`, 5, false, '5B');
new Card(`Bad ${card5CText}`, 5, true, '5C');
new Card(`Bad ${card5AText}`, 5, true, '5D');
new Card(`Bad ${card5BText}`, 5, true, '5E');
//Round 6
new Card(`Good ${card6AText}`, 6, false, '6A');
new Card(`Good ${card6BText}`, 6, false, '6B');
new Card(`Bad ${card6CText}`, 6, true, '6C');
new Card(`Bad ${card6AText}`, 6, true, '6D');
new Card(`Bad ${card6BText}`, 6, true, '6E');

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
    if (allCards[i].cardRound === 4) {
      roundFourArray.push(allCards[i]);
    }
    if (allCards[i].cardRound === 5) {
      roundFiveArray.push(allCards[i]);
    }
    if (allCards[i].cardRound === 6) {
      roundSixArray.push(allCards[i]);
    }
  }
  allRoundCards = [roundOneArray, roundTwoArray, roundThreeArray, roundFourArray, roundFiveArray, roundSixArray];
}
getRounds();

// Makes the random number
function makeRandom(randomCount) {
  return Math.floor(Math.random() * randomCount);
}

// Picking 3 random cards for round
function render() {
  getCards();
  topCardEl.textContent = topCard;
  containerEl.appendChild(topCardEl);

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
  console.log('endgame: ', endGame);
  // if (endGame !== true) {

  // }
  // console.log(event.target.title);
  // pickedCard = event.target.title;
}


function Player(name, score) {
  this.name = name;
  this.score = score;
  // this.cardID = cardID;
  allPlayers.push(this);
}

function getStorageData() {
  if (localStorage.Data) {
    var person = JSON.parse(localStorage.Data);
    console.log('PERSON', person);
  }
  if(localStorage.Player) {
    allPlayers = JSON.parse(localStorage.Player);
    console.log(allPlayers);
    new Player(person, playerScore);
    localStorage.Player = JSON.stringify(allPlayers);
  }
  // console.log (localStorage.Player);
  // console.log (allPlayers);
  new Player(person, playerScore);
  localStorage.Player = JSON.stringify(allPlayers);
}


