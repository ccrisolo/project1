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
let msgEl = document.querySelector('h1')
const dealBtn = document.getElementById('new-deal')
const hitBtn = document.getElementById('hit')
const standBtn = document.getElementById('stand')
let playerCurrentHand = document.getElementById('playerCurrentHand')
let dealerCurrentHand = document.getElementById('dealerCurrentHand')
let playerCardTotal = document.getElementById('playerCardsTotal')
let dealerCardTotal = document.getElementById('dealerCardsTotal')

/*----- event listeners -----*/

// dealBtn.addEventListener('click', dealCards)
hitBtn.addEventListener('click', hit)
standBtn.addEventListener('click', stand)


/*----- functions -----*/
initalize()


function initalize() {
    dealBtn.addEventListener('click', dealCards)
}
function dealCards() {
    // 1)give 2 cards to player
    dealPlayerCards()
    dealPlayerCards()
    // 2)give 2 cards to dealer, 1 face down to start
    dealDealerCards()
    dealDealerCards()
    // 3)render selected cards 
    render()
    //removes deal button function after initial click
    dealBtn.removeEventListener('click', dealCards, false)
    // winOrLose()
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


function hit() {
    dealPlayerCards()
    render()
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
    //this while loop wipes previous array, repopulates the array + 1 card
    while (playerCurrentHand.lastChild) {
        playerCurrentHand.removeChild(playerCurrentHand.lastChild)
    }
    while (dealerCurrentHand.lastChild) {
        dealerCurrentHand.removeChild(dealerCurrentHand.lastChild)
    }

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
            
            //places or appends the image to the created element in()
            dealerCurrentHand.appendChild(div)
        } else {
            
            let div = document.createElement('div')
            //adds a class to the created element
            div.classList.add('card', 'back-red')
            
            //places or appends the image to the created element in()
            dealerCurrentHand.appendChild(div)
        }
    }
    calcPlayerTotal()
    calcDealerTotal()
    winOrLose()
    
}

function calcPlayerTotal() {
    let total = 0
    for (let i = 0; i < player.currentHand.length; i++) {
        total += player.currentHand[i].value;
        // console.log(player.cardTotal)
    }
    player.cardTotal = total
    playerCardTotal.innerHTML = `Player Total: ${player.cardTotal}`;
}


function calcDealerTotal() {
    let total = 0
    //if 
    // for (let i = 0; i < dealer.currentHand.length; i++) {
    total += dealer.currentHand[1].value;
    dealerCardTotal.innerHTML = `Dealer Total: ${total}`;
    // }
    dealer.cardTotal = total
}

function stand(){
    //this loop says while dealercurrenthand has a last child..next line..
    while (dealerCurrentHand.lastChild) {
        //remove the dealercurrenthand last child..
        //does this for both last childs then breaks out of loop and goes into for loop below
        dealerCurrentHand.removeChild(dealerCurrentHand.lastChild)
        debugger
    }
    //this loops through the cards that were delt in while loop above and...next comment
    for (let i = 0; i < dealer.currentHand.length; i++){
            debugger
    
        //creates specified elemtent in HTML (e.g. div)
       
            var div = document.createElement('div');
            //faceVal variable created to hold 
            let faceVal = dealer.currentHand[i].face
            //adds a class to the created element
            div.classList.add('card', faceVal);
            
            //places or appends the image to the created element in()
            dealerCurrentHand.appendChild(div)
        
    }
    
}


function winOrLose() {
    if (player.cardTotal > 21) {
        return msgEl.innerHTML = 'Bust! Sorry dealer wins'
    } else if (player.cardTotal > 21 && player.currentHand ){

    }
     
    
}

//win lose conditions:
//if player stands, dealer flips face down card. 
//if dealer hand is <= 16, dealer must hit.
//if dealer total is >= 17 && <= 21, dealer stands.

//if dealer total > 21, player wins

// ACE LOGIC: if player card total > 21 and player current hand contains an Ace then Ace value -10.















