/*----- constants -----*/
    //create variables that contains an array of suits and values of all 52 cards

let currentDeck = [
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

let player = {
    currentHand: [],
    cardTotal: 0,
    
}

let dealer = {
    currentHand: [],
    cardTotal: 0
}
/*----- cached element references -----*/
let cardsInPlay;
let msgEl = document.querySelector('h1');
const dealBtn = document.getElementById('new-deal');
const hitBtn = document.getElementById('hit')
let playerCurrentHand = document.getElementById('playerCurrentHand')
let dealerCurrentHand = document.getElementById('dealerCurrentHand')

/*----- event listeners -----*/
document.getElementById('hit').addEventListener('click', hit);
document.getElementById('stand').addEventListener('click', stand);

/*----- functions -----*/
initalize()


function initalize() {
    // 1)give 2 cards to player
    dealPlayerCards()
    dealPlayerCards()
    // 2)give 2 cards to dealer
    dealDealerCards()
    dealDealerCards()
    // 3)render selected cards 
    render()
}

function dealPlayerCards() {
    // chooses random card from current deck
    let card = currentDeck[Math.floor(Math.random() * currentDeck.length)];
    // finds index of card that was just chosen
    const cardIdx = currentDeck.findIndex((e,i) => {
        return e == card
    })
    // splice removes card from current deck (by index, # removed(below is 1))
    currentDeck.splice(cardIdx,1)
    // adds card to player's current hand
    player.currentHand.push(card)

}

function dealDealerCards() {
    //  follow same logic of player card function above ^
    let card = currentDeck[Math.floor(Math.random() * currentDeck.length)];
    const cardIdx = currentDeck.findIndex((e, i) => {
        return e == card
    })

    currentDeck.splice(cardIdx, 1);
    dealer.currentHand.push(card);


}

function render() {
    console.log("PLAYER HAND: ", player.currentHand)
    for(let i = 0; i < player.currentHand.length; i++) {
        var div = document.createElement('div');
        let faceVal = player.currentHand[i].face
        div.classList.add('card',faceVal);
        // div.innerHTML = 'test'
        playerCurrentHand.appendChild(div)
    }

    var div = document.createElement('div'); 
    for(let i = 0; i < dealer.currentHand.length; i++) {
        let faceVal = dealer.currentHand[i].face
        div.classList.add('card',faceVal);
        // div.innerHTML = 'test'
        dealerCurrentHand.appendChild(div)
    }

    //1)render selected cards to player
    
    //2)render selected cards to dealer
}









