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

    // convert the cards into numerical values
    switch (card1[0]) {
      case "2s":
      case "2c":
      case "2h":
      case "2d":
        card1[0] = 2;
        break;
      case "3s":
      case "3c":
      case "3h":
      case "3d":
        card1[0] = 3;
        break;
      case "4s":
      case "4c":
      case "4h":
      case "4d":
        card1[0] = 4;
        break;
      case "5s":
      case "5c":
      case "5h":
      case "5d":
        card1[0] = 5;
        break;
      case "6s":
      case "6c":
      case "6h":
      case "6d":
        card1[0] = 6;
        break;
      case "7s":
      case "7c":
      case "7h":
      case "7d":
        card1[0] = 7;
        break;
      case "8s":
      case "8c":
      case "8h":
      case "8d":
        card1[0] = 8;
        break;
      case "9s":
      case "9c":
      case "9h":
      case "9d":
        card1[0] = 9;
        break;
      case "10s":
      case "10c":
      case "10h":
      case "10d":
        card1[0] = 10;
        break;
      case "Js":
      case "Jc":
      case "Jh":
      case "Jd":
        card1[0] = 11;
        break;
      case "Qs":
      case "Qc":
      case "Qh":
      case "Qd":
        card1[0] = 12;
        break;
      case "Ks":
      case "Kc":
      case "Kh":
      case "Kd":
        card1[0] = 13;
        break;
      case "As":
      case "Ac":
      case "Ah":
      case "Ad":
        card1[0] = 14;
        break;
      default:
        break;
    }

    switch (card2[0]) {
      case "2s":
      case "2c":
      case "2h":
      case "2d":
        card2[0] = 2;
        break;
      case "3s":
      case "3c":
      case "3h":
      case "3d":
        card2[0] = 3;
        break;
      case "4s":
      case "4c":
      case "4h":
      case "4d":
        card2[0] = 4;
        break;
      case "5s":
      case "5c":
      case "5h":
      case "5d":
        card2[0] = 5;
        break;
      case "6s":
      case "6c":
      case "6h":
      case "6d":
        card2[0] = 6;
        break;
      case "7s":
      case "7c":
      case "7h":
      case "7d":
        card2[0] = 7;
        break;
      case "8s":
      case "8c":
      case "8h":
      case "8d":
        card2[0] = 8;
        break;
      case "9s":
      case "9c":
      case "9h":
      case "9d":
        card2[0] = 9;
        break;
      case "10s":
      case "10c":
      case "10h":
      case "10d":
        card2[0] = 10;
        break;
      case "Js":
      case "Jc":
      case "Jh":
      case "Jd":
        card2[0] = 11;
        break;
      case "Qs":
      case "Qc":
      case "Qh":
      case "Qd":
        card2[0] = 12;
        break;
      case "Ks":
      case "Kc":
      case "Kh":
      case "Kd":
        card2[0] = 13;
        break;
      case "As":
      case "Ac":
      case "Ah":
      case "Ad":
        card2[0] = 14;
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

  return gameResults;
};
