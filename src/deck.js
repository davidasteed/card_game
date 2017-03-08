module.exports = function buildDeck() {
  // create a new unshuffled check
  let newDeck = [];
  let suit = ["s", "c", "h", "d"];

  suit.forEach(function pushCards(thisSuit){
    for (let value = 2; value < 15; value++) {
      if (value < 11) {
        newDeck.push(value + thisSuit);
      } else if (value === 11) {
          newDeck.push("J" + thisSuit);
      } else if (value === 12) {
          newDeck.push("K" + thisSuit);
      } else if (value === 13) {
          newDeck.push("Q" + thisSuit);
      } else if (value === 14) {
          newDeck.push("A" + thisSuit);
      }
    }
  });

  // shuffle the deck, using "swap" method borrowed from internet
  for (let i = newDeck.length - 1; i > 0; i--) {
    randomNumber = Math.floor(Math.random() * (i + 1));   // 2nd param needs to be inclusive
    temp = newDeck[i];
    newDeck[i] = newDeck[randomNumber];
    newDeck[randomNumber] = temp;
  }

  return newDeck;
}
