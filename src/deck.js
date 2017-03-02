
module.exports = function buildDeck() {
  // create an array and populate with cards
  let newDeck = ["2s", "2c", "2h", "2d",
                 "3s", "3c", "3h", "3d",
                 "4s", "4c", "4h", "4d",
                 "5s", "5c", "5h", "5d",
                 "6s", "6c", "6h", "6d",
                 "7s", "7c", "7h", "7d",
                 "8s", "8c", "8h", "8d",
                 "9s", "9c", "9h", "9d",
                 "10s", "10c", "10h", "10d",
                 "Js", "Jc", "Jh", "Jd",
                 "Qs", "Qc", "Qh", "Qd",
                 "Ks", "Kc", "Kh", "Kd",
                 "As", "Ac", "Ah", "Ad"
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
