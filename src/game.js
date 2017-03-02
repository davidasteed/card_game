module.exports = function playGame(playerArray) {

  // store the current timestamp (the delta between now and "Unix epoch")
  let timeStartGame = new Date();

  // create the return object
  let gameResults = {};

  // variable to reference an external function
  let createDeckFunction = require("./deck.js");

  // create the new deck by calling external function
  let gameDeck = createDeckFunction();

  // write the date in the desired format into the return object
  let monthOfYear = (timeStartGame.getMonth() + 1);
  let dayOfMonth = timeStartGame.getDate();

  gameResults.date = ((monthOfYear < 10 ? '0' + monthOfYear : monthOfYear) +
    "-" +
    (dayOfMonth < 10 ? '0' + dayOfMonth : monthOfYear) +
    "-" +
    timeStartGame.getFullYear() +
    " at " +
    timeStartGame.getHours() +
    ":" +
    timeStartGame.getMinutes());

  // initialize the "results object" as an array of objects
  gameResults.players = [];
  gameResults.players[0] = {};
  gameResults.players[1] = {};
  gameResults.players[0].name = playerArray[0];
  gameResults.players[1].name = playerArray[1];
  gameResults.players[0].numberOfWins = 0;
  gameResults.players[1].numberOfWins = 0;
  gameResults.players[0].winRatio = 0;
  gameResults.players[1].winRatio = 0;
  gameResults.numberOfTies = 0;

  // pick pairs of cards (that are already shuffled)
  let card1 = [];
  let card2 = [];

  // print the contents of the array
  for (let i = gameDeck.length; i > 0; i--) {

  }

  // draw two cards, compare, and tally the score
  for (let i = gameDeck.length / 2; i > 0; i--) {
    // extract two cards from the deck
    card1 = gameDeck.splice(0, 1);
    card2 = gameDeck.splice(0, 1);

    // if necessary, convert the face cards into numerical values
    switch (card1[0]) {
      case "J":
        card1[0] = 10;
        break;
      case "Q":
        card1[0] = 11;
        break;
      case "K":
        card1[0] = 12;
        break;
      case "A":
        card1[0] = 13;
        break;
      default:
        break;
    }
    switch (card2[0]) {
      case "J":
        card2[0] = 10;
        break;
      case "Q":
        card2[0] = 11;
        break;
      case "K":
        card2[0] = 12;
        break;
      case "A":
        card2[0] = 13;
        break;
      default:
        break;
    }

    // compare the pair of cards and tally the score
    if (card1[0] > card2[0]) {
      gameResults.players[0].numberOfWins += 1;
    } else if (card1[0] < card2[0]) {
      gameResults.players[1].numberOfWins += 1;
    } else if (card1[0] === card2[0]) {
      gameResults.numberOfTies += 1;
    }

  }

  // calculate and store win ratios
  gameResults.players[0].winRatio = gameResults.players[0].numberOfWins / gameResults.players[1].numberOfWins;
  gameResults.players[1].winRatio = gameResults.players[1].numberOfWins / gameResults.players[0].numberOfWins;

  // // debug: print the gameresults object:
  // console.log("date is" + gameResults.date);
  // console.log("player1 name is: " + gameResults.players[0].name);
  // console.log("player2 name is: " + gameResults.players[1].name);
  // console.log("player1 numberOfWins is: " + gameResults.players[0].numberOfWins);
  // console.log("player2 numberOfWins is: " + gameResults.players[1].numberOfWins);
  // console.log("player1 win ratio is: " + gameResults.players[0].winRatio);
  // console.log("player2 win ratio is: " + gameResults.players[1].winRatio);
  //

  return gameResults;
};
