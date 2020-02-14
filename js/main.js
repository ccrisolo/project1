/*----- constants -----*/
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
const newGameBtn = document.getElementById('new-game')
const dealBtn = document.getElementById('deal')
const hitBtn = document.getElementById('hit')
const standBtn = document.getElementById('stand')
let playerCurrentHand = document.getElementById('playerCurrentHand')
let dealerCurrentHand = document.getElementById('dealerCurrentHand')
let playerCardTotal = document.getElementById('playerCardsTotal')
let dealerCardTotal = document.getElementById('dealerCardsTotal')


/*----- event listeners -----*/
// hitBtn.addEventListener('click', hit)
standBtn.addEventListener('click', stand)
newGameBtn.addEventListener('click', newGame)

/*----- functions -----*/
initialize()


function initialize() {
    dealBtn.addEventListener('click', dealCards)
}
function dealCards() {
    dealPlayerCards()
    dealPlayerCards()
    
    dealDealerCards()
    dealDealerCards()
    
    render()
    
    hitBtn.addEventListener('click', hit)
    dealBtn.removeEventListener('click', dealCards, false)
}

function dealPlayerCards() {
    let card = currentDeck[Math.floor(Math.random() * currentDeck.length)];
    const cardIdx = currentDeck.findIndex((e, i) => {
        return e == card
    })
    
    currentDeck.splice(cardIdx, 1)
    player.currentHand.push(card)

}
    
function hit() {
    dealPlayerCards()
    render()
}

function dealDealerCards() {
    let card = currentDeck[Math.floor(Math.random() * currentDeck.length)];
    const cardIdx = currentDeck.findIndex((e, i) => {
        return e == card
    })

    currentDeck.splice(cardIdx, 1);
    dealer.currentHand.push(card);
}
    
function render() {
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

    for (let i = 0; i < dealer.currentHand.length; i++) {
        if (i > 0) {
            var div = document.createElement('div');
            let faceVal = dealer.currentHand[i].face
            div.classList.add('card', faceVal);
            dealerCurrentHand.appendChild(div)
        } else {
            let div = document.createElement('div')
            div.classList.add('card', 'back-red')
            dealerCurrentHand.appendChild(div)
        }
    }
    calcPlayerTotal()
    calcDealerTotal()
    aceLogicPlayer()
    aceLogicDealer()
    checkForBust()
}
        
function calcPlayerTotal() {
    let total = 0
    for (let i = 0; i < player.currentHand.length; i++) {
        total += player.currentHand[i].value;
        
    }
    player.cardTotal = total
    playerCardTotal.textContent = `Player Total: ${player.cardTotal}`;
    aceLogicPlayer()
}


function calcDealerTotal() {
    let total = 0
    total += dealer.currentHand[1].value;
    dealerCardTotal.textContent = `Dealer Total: ${total}`;
    
    dealer.cardTotal = total
    aceLogicDealer()
}

function calcRealDealerTotal() {
    dealer.cardTotal = 0
    for (let i = 0; i < dealer.currentHand.length; i++) {
        dealer.cardTotal += dealer.currentHand[i].value;
    } 
    aceLogicDealer()
    return dealer.cardTotal
}
    
function stand() {
    let dealerTotal = 0
    while (dealerCurrentHand.lastChild) {
        dealerCurrentHand.removeChild(dealerCurrentHand.lastChild)
    }
    for (let i = 0; i < dealer.currentHand.length; i++) {
        var div = document.createElement('div');
        let faceVal = dealer.currentHand[i].face
        div.classList.add('card', faceVal);
        dealerCurrentHand.appendChild(div)
    }

    dealerTotal += dealer.currentHand[0].value + dealer.currentHand[1].value;
    dealerCardTotal.innerHTML = `Dealer Total: ${dealerTotal}`;
    hitBtn.removeEventListener('click', hit, false)
    standBtn.removeEventListener('click', stand, false)
    
        while (dealerTotal <= 16) {
            dealDealerCards()
    
            showDealerHand()
            dealerTotal = calcRealDealerTotal()
        }
        if (dealerTotal >= 17) {
            dealerCardTotal.innerHTML = `Dealer Total: ${dealerTotal}`;
            
            dealerTotal = calcRealDealerTotal()
            aceLogicDealer()
            checkForBust()
            winOrLose()
        }
}

function showDealerHand() {
    while (dealerCurrentHand.lastChild) {
        dealerCurrentHand.removeChild(dealerCurrentHand.lastChild)
    }
    for (let i = 0; i < dealer.currentHand.length; i++) {
        var div = document.createElement('div');
        let faceVal = dealer.currentHand[i].face
        div.classList.add('card', faceVal);
        dealerCurrentHand.appendChild(div)
    }
    dealerCardTotal.innerHTML = `Dealer Total: ${calcRealDealerTotal()}`;
}
        
function aceLogicPlayer() {
    if(player.cardTotal > 21) {
        for(let i = 0; i < player.currentHand.length; i++){
            if(player.currentHand[i].value === 11){
                player.cardTotal -= 10;
                playerCardTotal.textContent = `Player Total: ${player.cardTotal}`;
            }
        }
    }
}   
    
function aceLogicDealer() {
    let aceCount = 0
    for(let i = 0; i < dealer.currentHand.length; i++){
        if (dealer.currentHand[i].value === 11){
                aceCount += 1
                if(dealer.cardTotal > 21) {
                    dealer.cardTotal -= 10;
                }
            }
            if (aceCount > 1 && dealer.cardTotal < 12) {
                dealer.cardTotal -= 10;
        }
    }
}
    

function checkForBust(){
    if(player.cardTotal > 21) {
        msgEl.textContent = "YOU BUSTED! SORRY, DEALER WINS"
    }
    if(dealer.cardTotal > 21) {
        msgEl.textContent = "DEALER BUSTED! YOU WIN!"
    }
}
    
function winOrLose() {
    if ((dealer.cardTotal > player.cardTotal) && (dealer.cardTotal <= 21)) {
        msgEl.textContent = "DEALER WINS"
    } else if ((player.cardTotal > dealer.cardTotal) && (player.cardTotal <= 21)) {
        msgEl.textContent = "YOU WIN!"
    } else if ((player.cardTotal === dealer.cardTotal) && (player.cardTotal <= 21) && (dealer.cardTotal <= 21)) {
        msgEl.textContent = "PUSH"
    }   
    
}

function newGame() {
    console.log("HITINGs")
    document.location.reload(false);
}
    

    
    
        

        

        
        

        



            

            

            

            




        

        















    
  
    
    
    
    
    
    
    
    
    
    
    
    // if(player.cardTotal > 21 && player.currentHand[i].value{
        // return ace === 11; 
    // })){
        // player.cardTotal -= 11;
        // // msgEl.textContent = "YOU BUSTED, DEALER WINS!"
        // console.log(player.cardTotal);
        // return player.cardTotal;
    //fix 
    //win lose conditions:
    //if player stands, dealer flips face down card. 
    //if dealer hand is <= 16, dealer must hit.
    //if dealer total is >= 17 && <= 21, dealer stands.
    
    //if dealer total > 21, player wins
    
    // ACE LOGIC: if player card total > 21 and player current hand contains an Ace then Ace value -10.
    