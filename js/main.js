/*----- constants -----*/
    //create an object that contains the suits and values of all 52 cards
const cardDeck = {
    suits: ['Hearts', 'Spades', 'Clubs', 'Diamonds'],
    values: ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'],
}



/*----- app's state (variables) -----*/
    //track cards pulled from deck
let cardPulled = 0;

    //create objects representing player hand and dealer hand

let playerOne = {
    cardsDelt: [],
    cardTotal: 0,
    playerCash: 100,
}

let dealer = {
    cardsDelt: [],
    cardTotal: 0,
}
/*----- cached element references -----*/

/*----- event listeners -----*/
document.getElementById('new-game').addEventListener('click', initalize);
document.getElementById('hit').addEventListener('click', hit);
document.getElementById('stand').addEventListener('click', stand);
/*----- functions -----*/

function initalize () {

}

function render () {

}


function hit () {

}

function stand() {

}
    //make function that calculates value of player and dealer cards. Include logic to decide if an Ace is worth 11 or 1.



    //make a betting function that tracks if player wins or loses money based on end result and will add or subtract the betting amount to players money total.



    //make a reset function that resets the game board without resetting players money
    //use a for/of loop to loop through the values of our cards object




    //When game is initialized set players and computer cards face down and set values to null
