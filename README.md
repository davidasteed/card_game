Card Game

developer:  David Steed
date:  1 March 2017

General Description:  Create a card game: the game of War. In this game, two players compete against each other. They are each dealt 26 cards (half of a full deck) and they play the cards one at a time. The person with the higher card (Ace being the highest) wins that hand. For this version of the game, we will allow ties to happen, and we will not reshuffle the player's decks. As such, the game is over once all of the cards have been played, and the winner is whomever won the most hands.

Critical path:

1.  deck.js:   create a deck and shuffle it

2.  game.js:  play the hands and store the results

    function logic:

    0.  call deck() and store result into an array "newDeck[]"
    1.  store the current date (timeGameStart)
    2.  create an object to be used for the return value
        a.  for the "date" property:
          - build a string that has:
              mm/dd/yy in the format of "'MM-DD-YYYY"
              "+"
              hh/mm in the format of "HH:mm"


        b.  for the players[] property:
          - create an object to store the info for the first player

          - create an object to store the info for the second player


    3.  game loop (should iterate exactly 26 times for each pair of cards)

    a.  get a random number between 1 and 52

    b.  remove that (random)card from the array (subtract -1 to get correct index) and store the value in "card1" via the array.splice() function and store in card1[]

    c.  get a random number between 1 and 52

    d.  remove that (random)card from the array and store the value in "card2[]) via splice()

    e.  if/else:  compare the values  (need to account for "string" cards vs. "number" cards)

    f.  win/loss/tie?  then increment the correct property
        win (for that player)
        tie

    g.  move to next iteration

    h.  calculate the win ratio and store in the object

    i.  return the object with all the data
