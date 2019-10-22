
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
        console.log(round);
        endGame = null;
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

// Text from http://saganipsum.com/
new Card('Extraplanetary the ash of stellar alchemy rich in mystery Tunguska event star stuff harvesting star light light years? Made in the interiors of collapsing stars stirred by starlight emerged into consciousness permanence of the stars are creatures of the cosmos inconspicuous motes of rock and gas.', 1, false, '1A');
new Card('Kindling the energy hidden in matter colonies hearts of the stars laws of physics take root and flourish made in the interiors of collapsing stars? Something incredible is waiting to be known how far away realm of the galaxies another world something incredible is waiting to be known are creatures of the cosmos?', 1, false, '1B');
new Card('Gathered by gravity across the centuries Apollonius of Perga ship of the imagination extraplanetary brain is the seed of intelligence. A very small stage in a vast cosmic arena Sea of Tranquility the carbon in our apple pies made in the interiors of collapsing stars the sky calls to us another world.', 1, true, '1C');
new Card('Star stuff harvesting star light cosmos Drake Equation Vangelis are creatures of the cosmos corpus callosum. Realm of the galaxies made in the interiors of collapsing stars tesseract stirred by starlight realm of the galaxies dream of the mind\'s eye? Something incredible is waiting to be known how far away citizens of distant epochs the ash of stellar alchemy rich in heavy atoms not a sunrise but a galaxyrise?', 1, true, '1D');
new Card('Prime number emerged into consciousness courage of our questions cosmic ocean explorations Rig Veda. Laws of physics stirred by starlight paroxysm of global death the only home we\'ve ever known with pretty stories for which there\'s little good evidence dispassionate extraterrestrial observer.', 1, true, '1E');

// Text from https://loremipsum.io/generator/?n=5&t=p
new Card('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus ultricies tristique nulla aliquet enim. Nisl nunc mi ipsum faucibus vitae aliquet nec.', 2, false, '2A');
new Card('Feugiat scelerisque varius morbi enim nunc. Eget felis eget nunc lobortis mattis aliquam. Ac auctor augue mauris augue neque. Enim ut sem viverra aliquet. Odio morbi quis commodo odio. Netus et malesuada fames ac turpis egestas. Eu scelerisque felis imperdiet proin fermentum leo. Risus quis varius quam quisque id.', 2, false, '2B');
new Card('Nullam ac tortor vitae purus faucibus ornare. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Ullamcorper a lacus vestibulum sed. Gravida quis blandit turpis cursus in hac habitasse. Scelerisque felis imperdiet proin fermentum. Mauris sit amet massa vitae tortor condimentum lacinia quis vel. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum.', 2, true, '2C');
new Card('Parturient montes nascetur ridiculus mus. Cursus metus aliquam eleifend mi in nulla. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Etiam sit amet nisl purus in mollis nunc sed id. Non consectetur a erat nam at lectus urna duis. Bibendum est ultricies integer quis auctor elit.', 2, true, '2D');
new Card('turn on computer', 2, true, '2E');

new Card('Mauris in aliquam sem fringilla. Ultrices dui sapien eget mi proin sed libero enim sed. Turpis massa sed elementum tempus egestas. Id semper risus in hendrerit gravida rutrum. Cursus in hac habitasse platea dictumst quisque sagittis. Tristique risus nec feugiat in. Tellus molestie nunc non blandit massa enim nec dui nunc.', 3, false, '3A');
new Card('Faucibus in ornare quam viverra orci sagittis eu. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Aliquam vestibulum morbi blandit cursus risus at ultrices. Ac turpis egestas maecenas pharetra convallis posuere morbi.', 3, false, '3B');
new Card('Phasellus egestas tellus rutrum tellus pellentesque. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Amet commodo nulla facilisi nullam vehicula. ', 3, true, '3C');
new Card('Volutpat consequat mauris nunc congue nisi vitae suscipit. Nunc sed blandit libero volutpat. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Id velit ut tortor pretium viverra suspendisse potenti nullam ac.', 3, true, '3D');
new Card('Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Eu augue ut lectus arcu bibendum. Purus gravida quis blandit turpis cursus. Sit amet justo donec enim diam vulputate ut. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis.', 3, true, '3E');

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
