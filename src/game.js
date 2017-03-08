module.exports = function playGame(playerArray) {

  // return with error message if no playerArray was provided
  if (!playerArray) {
    return("Error:  an array containing two players was not provided, exiting");
  }

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

  // initialize the "results object"
  gameResults.players =
  [ { name: playerArray[0],
      numberOfWins: 0,
      winRatio: 0 },
     { name: playerArray[1],
      numberOfWins: 0,
      winRatio: 0 } ];

  gameResults.numberOfTies = 0;

  // pick pairs of cards (that are already shuffled)
  let card1, card2;

  // draw two cards, compare, and tally the score
  for (let i = gameDeck.length / 2; i > 0; i--) {
    // extract two cards from the deck
    card1 = gameDeck.splice(0, 1);
    card2 = gameDeck.splice(0, 1);

    // convert the cards into numerical values
    if (card1[0].charAt(0) === "J") {
      card1[0] = 11;
    } else if (card1[0].charAt(0) === "Q") {
      card1[0] = 12;
    } else if (card1[0].charAt(0) === "K") {
      card1[0] = 13;
    } else if (card1[0].charAt(0) === "A") {
      card1[0] = 14;
    } else {
      card1[0] = parseInt(card1[0]);
    }

    if (card2[0].charAt(0) === "J") {
      card2[0] = 11;
    } else if (card2[0].charAt(0) === "Q") {
      card2[0] = 12;
    } else if (card2[0].charAt(0) === "K") {
      card2[0] = 13;
    } else if (card2[0].charAt(0) === "A") {
      card2[0] = 14;
    } else {
      card2[0] = parseInt(card2[0]);
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

  return gameResults;
};
