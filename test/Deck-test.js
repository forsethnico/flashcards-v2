const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Deck = require("../src/Deck");

describe("Deck", () => {
  let card1, card2, card3, deck;

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
  });

  it("should be a function", () => {
    expect(Deck).to.be.a("function");
  });

  it("should be an instance of Deck", () => {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it("should be able to count the number of cards in deck", () => {
    expect(deck.countCards()).to.equal(3);
  });
});
