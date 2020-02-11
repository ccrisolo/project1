/*----- constants -----*/

//52 objects in an array for the deck of cards
let currentDeck = [
    { value: 2, face: "c02" },
    { value: 2, face: "s02" },
    { value: 2, face: "h02" },
    { value: 2, face: "d02" },
    { value: 3, face: "c03" },
    { value: 3, face: "s03" },
    { value: 3, face: "h03" },
    { value: 3, face: "d03" },
    { value: 4, face: "c04" },
    { value: 4, face: "s04" },
    { value: 4, face: "h04" },
    { value: 4, face: "d04" },
    { value: 5, face: "c05" },
    { value: 5, face: "s05" },
    { value: 5, face: "h05" },
    { value: 5, face: "d05" },
    { value: 6, face: "c06" },
    { value: 6, face: "s06" },
    { value: 6, face: "h06" },
    { value: 6, face: "d06" },
    { value: 7, face: "c07" },
    { value: 7, face: "s07" },
    { value: 7, face: "h07" },
    { value: 7, face: "d07" },
    { value: 8, face: "c08" },
    { value: 8, face: "s08" },
    { value: 8, face: "h08" },
    { value: 8, face: "d08" },
    { value: 9, face: "c09" },
    { value: 9, face: "s09" },
    { value: 9, face: "h09" },
    { value: 9, face: "d09" },
    { value: 10, face: "c10" },
    { value: 10, face: "s10" },
    { value: 10, face: "h10" },
    { value: 10, face: "d10" },
    { value: 10, face: "cJ" },
    { value: 10, face: "sJ" },
    { value: 10, face: "hJ" },
    { value: 10, face: "dJ" },
    { value: 10, face: "cQ" },
    { value: 10, face: "sQ" },
    { value: 10, face: "hQ" },
    { value: 10, face: "dQ" },
    { value: 10, face: "cK" },
    { value: 10, face: "sK" },
    { value: 10, face: "hK" },
    { value: 10, face: "dK" },
    { value: 11, face: "cA" },
    { value: 11, face: "sA" },
    { value: 11, face: "hA" },
    { value: 11, face: "dA" },
]

let cardBack = { face: "card.back-red" }

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
let msgEl = document.querySelector('h1')
const dealBtn = document.getElementById('new-deal')
const hitBtn = document.getElementById('hit')
const standBtn = document.getElementById('stand')
let playerCurrentHand = document.getElementById('playerCurrentHand')
let dealerCurrentHand = document.getElementById('dealerCurrentHand')
let playerCardTotal = document.getElementById('playerCardsTotal')
let dealerCardTotal = document.getElementById('dealerCardsTotal')

/*----- event listeners -----*/

dealBtn.addEventListener('click', (dealCards) => {
    console.log('deal')
})
hitBtn.addEventListener('click', (hit) => {
    console.log('hit-me')
})
standBtn.addEventListener('click', (stand) => {
    console.log('stand')
})


/*----- functions -----*/
initalize()


function initalize() {
    // 1)give 2 cards to player
    dealPlayerCards()
    dealPlayerCards()
    // 2)give 2 cards to dealer, 1 face down to start
    dealDealerCards()
    dealDealerCards()
    // 3)render selected cards 
    render()
}

function dealPlayerCards() {
    // chooses random card from current deck
    let card = currentDeck[Math.floor(Math.random() * currentDeck.length)];
    // finds index of card that was just chosen
    const cardIdx = currentDeck.findIndex((e, i) => {
        //returns card at index value
        return e == card
    })
    // splice removes card from current deck (by index, amount to be removed(below is 1))
    currentDeck.splice(cardIdx, 1)
    // adds card to player's current hand
    player.currentHand.push(card)

}

function dealCards() {

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
    // console.log("PLAYER HAND: ", player.currentHand)
    for (let i = 0; i < player.currentHand.length; i++) {
        var div = document.createElement('div');
        let faceVal = player.currentHand[i].face
        div.classList.add('card', faceVal);
        playerCurrentHand.appendChild(div)
    }

    //loops through the array to find 
    for (let i = 0; i < dealer.currentHand.length; i++) {
        //creates specified elemtent in HTML (e.g. div)
        if (i > 0) {
            var div = document.createElement('div');

            let faceVal = dealer.currentHand[i].face
            //adds a class to the created element
            div.classList.add('card', faceVal);
            console.log(div)
            //places or appends the image to the created element in()
            dealerCurrentHand.appendChild(div)
        } else {
            console.log("HIT ELSE")
            let div = document.createElement('div')
            //adds a class to the created element
            div.classList.add('card', 'back-red')
            console.log("div: ", div)
            //places or appends the image to the created element in()
            dealerCurrentHand.appendChild(div)
        }
    }
    console.log(dealer.currentHand)

    calcPlayerTotal()
    calcDealerTotal()
}

function calcPlayerTotal() {
    let total = 0
    for(let i = 0; i < player.currentHand.length; i++){
        total += player.currentHand[i].value;
        playerCardTotal.innerHTML = total;
        
    }
    console.log("TOTAL FOR PLAYER: ", total)
}

function calcDealerTotal(){
    let total = 0
    //if 
    for (let i = 0; i < dealer.currentHand.length; i++) {
        total += dealer.currentHand[i].value;
        dealerCardTotal.innerHTML = total;
    }
}
console.log(dealer.currentHand[1].value)














