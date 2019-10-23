//Global Variables
var topCardEl = document.getElementById('situation');
var leftCardEl = document.getElementById('left');
var centerCardEl = document.getElementById('center');
var rightCardEl = document.getElementById('right');
var containerEl = document.getElementById('imageContainer');
var responseEl = document.getElementById('responseToCardPick');
var counterEl = document.getElementById('Counter');
var round = 0;
var playerScore = 0;
counterEl.textContent = `Current Score: ${playerScore}`;
var allPlayers = [];
var allCards = [];
var maxRounds = 5;
var uniqueCardArray = [];
var allRoundCards = [];
// var roundOneArray = [];
// var roundTwoArray = [];
// var roundThreeArray = [];
// var roundFourArray = [];
// var roundFiveArray = [];
// var roundSixArray = [];
var roundArray = [];
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

function respondToCardPick() {
  responseEl.textContent = '...';
  for (var i = 0; i < allCards.length; i++) {
    if (allCards[i].cardID === pickedCardID) {
      responseEl.textContent = allCards[i].responseText;
    }
  }
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
        counterEl.textContent = `Current Score: ${playerScore}`;
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
        counterEl.textContent = `Current Score: ${playerScore}`;
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
function Card(text, cardRound, gameOver, cardID, responseText) {
  this.text = text;
  this.cardRound = cardRound;
  this.cardID = cardID;
  this.gameOver = gameOver;
  this.responseText = responseText;
  allCards.push(this);
}
//Round 1
new Card(`${card1AText}`, 1, false, '1A', 'card1AResponseText');
new Card(`${card1BText}`, 1, false, '1B', 'card1BResponseText');
new Card(`${card1CText}`, 1, false, '1C', 'card1CResponseText');
new Card(`${card1AText}`, 1, true, '1D', 'card1AResponseText');
new Card(`${card1BText}`, 1, true, '1E', 'card1BResponseText');
//Round 2
new Card(`${card2AText}`, 2, false, '2A', 'card2AResponseText');
new Card(`${card2BText}`, 2, false, '2B', 'card2BResponseText');
new Card(`${card2CText}`, 2, false, '2C', 'card2CResponseText');
new Card(`${card2AText}`, 2, true, '2D', 'card2AResponseText');
new Card(`${card2BText}`, 2, true, '2E', 'card2BResponseText');
//Round 3
new Card(`${card3AText}`, 3, false, '3A', 'card3AResponseText');
new Card(`${card3BText}`, 3, false, '3B', 'card3BResponseText');
new Card(`${card3CText}`, 3, true, '3C', 'card3CResponseText');
new Card(`${card3AText}`, 3, true, '3D', 'card3AResponseText');
new Card(`${card3BText}`, 3, true, '3E', 'card3BResponseText');
//Round 4
new Card(`${card4AText}`, 4, false, '4A', 'card4AResponseText');
new Card(`${card4BText}`, 4, false, '4B', 'card4BResponseText');
new Card(`${card4CText}`, 4, true, '4C', 'card4CResponseText');
new Card(`${card4AText}`, 4, true, '4D', 'card4AResponseText');
new Card(`${card4BText}`, 4, true, '4E', 'card4BResponseText');
//Round 5
new Card(`${card5AText}`, 5, false, '5A', 'card5AResponseText');
new Card(`${card5BText}`, 5, false, '5B', 'card5BResponseText');
new Card(`${card5CText}`, 5, true, '5C', 'card5CResponseText');
new Card(`${card5AText}`, 5, true, '5D', 'card5AResponseText');
new Card(`${card5BText}`, 5, true, '5E', 'card5BResponseText');
//Round 6
new Card(`${card6AText}`, 6, false, '6A', 'card6AResponseText');
new Card(`${card6BText}`, 6, false, '6B', 'card6BResponseText');
new Card(`${card6CText}`, 6, true, '6C', 'card6CResponseText');
new Card(`${card6AText}`, 6, true, '6D', 'card6AResponseText');
new Card(`${card6BText}`, 6, true, '6E', 'card6BResponseText');

//Put allCards into array of arrays
function getRounds() {
  for (var j = 0;j < 6;j++) {
    console.log('j: ',j);
    roundArray = [];
    for (var i = 0; i < allCards.length; i++) {
    // console.log(allCards[i].cardRound);
      if (allCards[i].cardRound === (j+1)) {
        roundArray.push(allCards[i]);
      }
    }
    allRoundCards[j] = roundArray;
  }
}
getRounds();

// Makes the random number
function makeRandom(randomCount) {
  return Math.floor(Math.random() * randomCount);
}

// Picking 3 random cards for round
function render() {
  respondToCardPick();
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
    console.log('test', allPlayers);
    
  }
  // console.log (localStorage.Player);
  // console.log (allPlayers);
  new Player(person, playerScore);
  localStorage.Player = JSON.stringify(allPlayers);
}


