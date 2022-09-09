"use strict";

// Selecting elements
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

let currentScore = 0;
// Rolling Dice

btnRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore = currentScore + dice;
    currentZero.textContent = currentScore;
    // currentScore += dice;
  } else {
  }
});
