const Card = require("./Card");
const data = require("./data");
const Deck = require("./Deck");
const Round = require("./Round");
const prototypeQuestions = data.prototypeData;
const util = require("./util");

class Game {
  constructor() {
    this.currentRound = null;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
    util.main(round);
  }

  createGameDeck(cardData) {
    let cards = cardData.map((card) => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer);
    });
    let deck = new Deck(cards);
    this.currentRound = new Round(deck);
  }

  start() {
    this.createGameDeck(prototypeQuestions);
    this.printMessage(this.currentRound.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }
}

module.exports = Game;
