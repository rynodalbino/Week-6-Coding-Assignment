

class Card {
    //create cards rank, suit and values variables
    constructor(rank, suit, value) {
        this._rank = rank;
        this._suit = suit;
        this._value = value;

    }
}

class Deck {

    constructor() {
        //stores the deck
        this._cards = [];
    }

        //getter for cards
    get cards() {
        return this._cards;
    }

    //make and populate deck and shuffle
    buildDeck() {
        this.populate();
        this.shuffle();
        return this._cards;
    }
    //populates the deck and assigns them suits and values
    populate() {
        
        const suits = ['♠', '♣', '♥', '♦'];
        const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        //loop through suits first to get four of each
        for (let i = 0; i < suits.length; i++) {
            for(let j = 0; j < ranks.length; j++) {
                this._cards.push(new Card(ranks[j], suits[i], values[j]));
            //value and ranks will be the same so no need to loop values
            }
        }
    }

    shuffle() {
        //shuffles the deck
        if (this._cards.length > 0) {
            const shuffledDeck = this._cards.sort(() => Math.random() - 0.5)
            this._cards = [...shuffledDeck];
            }
        }
    }

class Player {
    //create players
        constructor(name) {
            this._playerName = name;
            this._playerScore = 0;
            this._playerDeck = [];
        }
        //getters for names,deck,score
        get name() {
            return this._playerName;
        }

        get deck() {
            return this._playerDeck;
        }

        get score() {
            return this._playerScore;
        }
        //makes the new deck from array
        set deck(newDeck) {
            if (Array.isArray(newDeck)) {
                this._playerDeck = newDeck;
            }
        }

        set score(newScore) {
            if (!isNaN(newScore)) {
                this._playerScore = newScore;
            }
        }
    }

class WarGame {
    //start the game
        constructor() {
            this._players = [];
            this._deck = [];
        }

        start() {
            debugger;
            //instructors console logs
            console.log("War Game")
            let input = prompt("0- Exit; 1- Play");
                while (input != '0') {
                    switch (input) {
                        
                        case '1':  
                        this._createGame();
                        input = prompt('0- Exit; 1- Play');
                            break;
                    }
                   
                }
            }

        _createGame() { 
//create players
            this._players[0] = new Player("Player 1");
            this._players[1] = new Player("Player 2");
//create new deck
            const cards = new Deck().buildDeck(); 
//give 26 cards to each player
            this._players[0].deck = [...cards.slice(0,26)];
            this._players[1].deck = [...cards.slice(26,52)];
//deal the cards
            console.log("Deal Hands")
            for (let i = 0; i < this._players[0].deck.length; i++) {
                if (this._players[0].deck[i]._value > this._players[1].deck[i]._value) {
                  
                    this._players[0].score +=1;
                    //show who won each hand
                    let winningHand = `${this._players[0].deck[i]._rank} of ${this._players[0].deck[i]._suit}`;
                    console.log(`Player 1 won with a ${winningHand}`);
                } else {
                  
                    this._players[1].score +=1;
                    let winningHand = `${this._players[1].deck[i]._rank} of ${this._players[1].deck[i]._suit}`;
                    console.log(`Player 2 won with a ${winningHand}`);
                }
            }
//show who won the game
            console.log("Hands Finished")
            if (this._players[0].score > this._players[1].score) {
                console.log(`${this._players[0].name.toUpperCase()} Won with a score of ${this._players[0].score}`);
            } else if (this._players[0].score < this._players[1].score){
                console.log(`${this._players[1].name.toUpperCase()} Won with a score of ${this._players[1].score}`);
            } else {
                console.log("Tie!")
            }
        }
    }

    const game = new WarGame();
    game.start();