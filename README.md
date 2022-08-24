# FlashCards

## Abstract 
This is an application that simulates a set of flash cards through the command line. A user will be able to see the deck of 30 different questions (cards) about array prototype methods, make guesses, and see a final score at the end of the round on how well they did and a timer that shows how long it took them to complete it. 

## Project Spec
The project spec and rubric can be found [here](https://frontend.turing.edu/projects/flash-cards.html).

## Working Application
The game starts by typing ```node index.js``` in the terminal. Users are prompted for each question, have the opportunity to select an answer, and will be given feedback if the guess was correct or incorrect:

![flashcards-1](https://user-images.githubusercontent.com/18154724/186328459-cf1198e8-b87f-40b1-a7e8-f8757934b41e.gif)


At the end of the deck of cards, the user will be presented with a final score of the % answered correctly and their time (in minutes and seconds) it took to complete the exercise.

![flashcards-2](https://user-images.githubusercontent.com/18154724/186328496-4a4120dd-6177-44f8-9a96-bdca9e551611.gif)


## Technologies Used
The core learning goal of this project was to practice test driven development (TDD) by writing unit tests using Mocha testing framework and Chai assertion library to contribute to a partially constructed object-oriented application. The language used in JavaScript. There are no front end HTML and CSS files since the application is run in the command line. 

## Install/Setup Instructions

On the top right corner of this page, click the **Fork** button.

Clone down the forked repo (from your GitHub) and change the name to something original you want to name it. 
```bash
git clone [remote-address] [what you want to name the repo]
```

Once you have cloned the repo, change into the directory and install the library dependencies. Run:

```bash
npm install
```

To verify that it is setup correctly, run `npm test` in your terminal. You should have 5 pending tests in your `Card` test file that show up.

Running `node index.js` from the root of your project should result in the following message being displayed in your terminal: 

```bash
Your project is running...
```

## Contributors
This solo project was written by Nicole Forseth - a Module 2 Front End Engineering student at the Turing School of Software and Design. 





