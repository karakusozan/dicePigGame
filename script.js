"use strict";

// Selecting elements
const playerZero = document.querySelector(".player--0");
const playerOne = document.querySelector(".player--1");
const scoreZero = document.querySelector("#score--0");
const scoreOne = document.getElementById("score--1");
const currentZero = document.getElementById("current--0");
const currentOne = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

scoreZero.textContent = 0;
scoreOne.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
// Rolling Dice

btnRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore = currentScore + dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    // currentScore += dice;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    playerZero.classList.toggle("player--active");
    playerOne.classList.toggle("player--active");
  }
});
