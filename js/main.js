/*----- constants -----*/
    //create variables that contains an array of suits and values of all 52 cards
//let suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
//let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
let cards = [
    {value: 2, face:"c02"},
    {value: 2, face:"s02"},
    {value: 2, face:"h02"},
    {value: 2, face:"d02"},
    {value: 3, face:"c03"},
    {value: 3, face:"s03"},
    {value: 3, face:"h03"},
    {value: 3, face:"d03"},
    {value: 4, face:"c04"},
    {value: 4, face:"s04"},
    {value: 4, face:"h04"},
    {value: 4, face:"d04"},
    {value: 5, face:"c05"},
    {value: 5, face:"s05"},
    {value: 5, face:"h05"},
    {value: 5, face:"d05"},
    {value: 6, face:"c06"},
    {value: 6, face:"s06"},
    {value: 6, face:"h06"},
    {value: 6, face:"d06"},
    {value: 7, face:"c07"},
    {value: 7, face:"s07"},
    {value: 7, face:"h07"},
    {value: 7, face:"d07"},
    {value: 8, face:"c08"},
    {value: 8, face:"s08"},
    {value: 8, face:"h08"},
    {value: 8, face:"d08"},
    {value: 9, face:"c09"},
    {value: 9, face:"s09"},
    {value: 9, face:"h09"},
    {value: 9, face:"d09"},
    {value: 10, face:"c10"},
    {value: 10, face:"s10"},
    {value: 10, face:"h10"},
    {value: 10, face:"d10"},
    {value: 10, face:"cJ"},
    {value: 10, face:"sJ"},
    {value: 10, face:"hJ"},
    {value: 10, face:"dJ"},
    {value: 10, face:"cQ"},
    {value: 10, face:"sQ"},
    {value: 10, face:"hQ"},
    {value: 10, face:"dQ"},
    {value: 10, face:"cK"},
    {value: 10, face:"sK"},
    {value: 10, face:"hK"},
    {value: 10, face:"dK"},
    {value: 11, face:"cA"},
    {value: 11, face:"sA"},
    {value: 11, face:"hA"},
    {value: 11, face:"dA"},
]
//build a deck of card objects
let deck = new Array();


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
document.getElementById('start-new-game').addEventListener('click', initalize);
document.getElementById('hit').addEventListener('click', hit);
document.getElementById('stand').addEventListener('click', stand);
document.getElementById('new-deal').addEventListener('click', newDeal)
/*----- functions -----*/

function initalize () {
// this function will start the game
}

function deal() {
//this function will deal 2 cards face up to the player and 1 card face up 1 card down to the dealer
}

function render () {
//this function will render the cards when dealt
}

function bet () {
    //this function will allow player to bet money 
}


function hit () {
// this function will deal one card 
}

function stand() {
//this function will keep player with current cards 
}

function checkBust() {
    //this function will check if player has gone over 21
}


function winOrLose() {
//this function will compare player cardTotal to dealerCardTotal and determine who won the hand.
//include logic for value of Ace being worth 11 or 1  
}


    
function newDeal() {
    //this function will shuffle and deal out new cards while keeping players current money total
}



