
module.exports = function buildDeck() {
  // create an array and populate with cards
  let newDeck = [2, 2, 2, 3,
                 3, 3, 3, 3,
                 4, 4, 4, 4,
                 5, 5, 5, 5,
                 6, 6, 6, 6,
                 7, 7, 7, 7,
                 8, 8, 8, 8,
                 9, 9, 9, 9,
                 10, 10, 10, 10,
                 "J", "J", "J", "J",
                 "Q", "Q", "Q", "Q",
                 "K", "K", "K", "K",
                 "A", "A", "A", "A"
               ];

  // shuffle the decks, using "swap" method borrowed from internet
  let random_Number, temp;
  for (let i = newDeck.length - 1; i > 0; i--) {
    random_Number = Math.floor(Math.random() * (i + 1));   // 2nd param needs to be inclusive
    temp = newDeck[i];
    newDeck[i] = newDeck[random_Number];
    newDeck[random_Number] = temp;
  }
  return newDeck;
};
