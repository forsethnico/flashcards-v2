const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Game = require("../src/Game");
const Round = require("../src/Round");

describe("Game", () => {
  let round, game;

  beforeEach(() => {
    cardData = [
      {
        id: 5,
        question:
          "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?",
        answers: ["mutator method", "accessor method", "iteration method"],
        correctAnswer: "iteration method",
      },
      {
        id: 6,
        question: "What is an example of a mutator method?",
        answers: ["sort()", "map()", "join()"],
        correctAnswer: "sort()",
      },
      {
        id: 20,
        question: "forEach() returns an array",
        answers: ["true", "false"],
        correctAnswer: "false",
      },
    ];
    let cards = cardData.map((card) => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer);
    });
    let deck = new Deck(cards);
    round = new Round(deck);
    game = new Game();
  });

  it("should be a function", () => {
    expect(Game).to.be.a("function");
  });

  it("should be an instance of Game", () => {
    expect(game).to.be.an.instanceof(Game);
  });

  it("should keep track of the current round", () => {
    game.createGameDeck(cardData);
    expect(game.currentRound).to.deep.equal(round);
  });
});
