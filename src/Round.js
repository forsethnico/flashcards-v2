const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck[0];
  }
  takeTurn(guess) {
    this.turns++;
    let turn = new Turn(guess, this.returnCurrentCard());
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.returnCurrentCard().id);
    }
    this.deck.shift();
    return turn.giveFeedback();
  }
  calculatePercentCorrect() {
    let percentCorrect = Math.round(
      ((this.turns - this.incorrectGuesses.length) / this.turns) * 100
    );
    return percentCorrect;
  }
  endRound() {
    console.log(
      `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    );
  }
}

module.exports = Round;
