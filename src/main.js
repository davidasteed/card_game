// Here we will use your `game.js` file to run a game. Feel free to change
// things in here, but once you have created the game correctly, this file
// should run as is.

// epic mode =  accept user input:
// extract and store the command line options, if any.
let players = [];
if (process.argv[2]) {
   players[0] = process.argv[2];
} else {
    console.log("Please enter a name for player 1");
  return;
}

if (process.argv[3]) {
  players[1] = process.argv[3];
} else {
    console.log("Please enter a name for player 2");
  return;
}

// launch game with the player names provided
let game = require('./game.js');
let results = game(players);

// output results
console.log(`A game of War played ${results.date} between ${results.players[0].name} and ${results.players[1].name}...`);
console.log(
    `It appears that ${results.players[0].name} won ${results.players[0].numberOfWins} times
    and ${results.players[1].name} won ${results.players[1].numberOfWins} times.
    (There were ${results.numberOfTies} tie hands.)`
);
