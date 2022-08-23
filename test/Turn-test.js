const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Turn = require("../src/Turn");

describe("Turn", function () {
  let card1, card2, turn1, turn2;

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
    turn1 = new Turn("mutator method", card1);
    turn2 = new Turn("sort()", card2);
  });

  it("should be a function", function () {
    expect(Turn).to.be.a("function");
  });

  it("should be an instance of Turn", function () {
    expect(turn1).to.be.an.instanceof(Turn);
  });

  it("should store a user guess", function () {
    expect(turn2.userGuess).to.equal("sort()");
  });

  it("should store the current card", function () {
    expect(turn1.currentCard).to.deep.equal(card1);
  });

  it("should have a method to return the user guess", function () {
    expect(turn1.returnGuess()).to.equal("mutator method");
  });

  it("should have a method to return the current card", function () {
    expect(turn2.returnCard()).to.equal(card2);
  });

  it("should have a method to tell if user guess is correct", function () {
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it("should be able to tell if user guess is incorrect", function () {
    expect(turn1.evaluateGuess()).to.equal(false);
  });

  it("should have a method to give feedback on the user guess if correct", function () {
    expect(turn2.giveFeedback()).to.equal("correct!");
  });

  it("should give feedback on the user guess if incorrect", function () {
    expect(turn1.giveFeedback()).to.equal("incorrect!");
  });
});
