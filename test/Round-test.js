const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Turn = require("../src/Turn");
const Round = require("../src/Round");

describe("Round", function () {
  let card1, card2, card3, deck, round;

  beforeEach(() => {
    card1 = new Card(
      5,
      "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?",
      ["mutator method", "accessor method", "iteration method"],
      "iteration method"
    );
    card2 = new Card(
      6,
      "What is an example of a mutator method?",
      ["sort()", "map()", "join()"],
      "sort()"
    );
    card3 = new Card(
      20,
      "forEach() returns an array",
      ["true", "false"],
      "false"
    );
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it("should be a function", function () {
    expect(Round).to.be.a("function");
  });

  it("should be an instance of Round", function () {
    expect(round).to.be.an.instanceof(Round);
  });

  it("should return the current card", function () {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it("should have an initial turn count of 0", function () {
    expect(round.turns).to.equal(0);
  });

  it("should increment a turn count each time a turn is taken", function () {
    round.takeTurn("sea otter");
    expect(round.turns).to.equal(1);
    round.takeTurn("accessor method");
    expect(round.turns).to.equal(2);
  });

  it("should store incorrect guesses in an array", function () {
    expect(round.incorrectGuesses).to.deep.equal([]);
    round.takeTurn("accessor method");
    expect(round.incorrectGuesses).to.deep.equal([5]);
  });

  it("should not store the guess if the guess is correct", function () {
    round.takeTurn("iteration method");
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it("should give feedback for a correct guess", function () {
    expect(round.takeTurn("iteration method")).to.equal("correct!");
  });

  it("should give feedback for an incorrect guess", function () {
    expect(round.takeTurn("accessor method")).to.equal("incorrect!");
  });

  it("should make the next card the current card", function () {
    round.takeTurn("accessor method");
    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it("should have a method to calculate percent of correct guesses", function () {
    round.takeTurn("accessor method");
    round.takeTurn("map()");
    round.takeTurn("false");
    expect(round.calculatePercentCorrect()).to.equal(33);
  });
});
