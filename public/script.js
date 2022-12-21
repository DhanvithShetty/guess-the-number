"use strict";

let randomNumber = Math.floor(Math.random() * 99) + 1; // Computing random number (1 to 99)
let score = 20;
let highscore = 0;
let guess;
let message = "";
// When check button is pressed
document.querySelector("#check-btn").addEventListener("click", function () {
  guess = Number(document.querySelector("#guessed-number").value);

  //   When guess is empty
  if (!guess) {
    document.querySelector("#message").textContent =
      "🚫Please enter a valid guess";

    //   When guess is correct
  } else if (guess === randomNumber) {
    document.querySelector("#body").style.backgroundColor = "#00A86B";
    document.querySelector("#message").textContent = "💥 You Won!";
    document.querySelector("#random-number").textContent = randomNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector("#highscore").textContent = highscore;
    }

    // When guess is incorrect
  } else if (guess !== randomNumber) {
    if (score > 1) {
      document.querySelector("#message").textContent =
        guess > randomNumber
          ? "⬆️ You Guessed Too High!"
          : "⬇️ You Guessed Too Low!";
      score--;
      document.querySelector("#score").textContent = score;

      //   When user is unable to guess the correct number
    } else {
      document.querySelector("#message").textContent = "👎 You lost!";
      document.querySelector("#body").style.backgroundColor = "#ED2939";
      document.querySelector("#score").textContent = 0;
      document.querySelector("#random-number").textContent = randomNumber;
    }
  }
});

// When user wants to play again
document.querySelector("#again-btn").addEventListener("click", function () {
  document.querySelector("#body").style.backgroundColor = "#1e1e1e";
  randomNumber = Math.floor(Math.random() * 99) + 1;
  document.querySelector("#message").textContent = "Start Guessing...";
  document.querySelector("#guessed-number").value = "";
  score = 20;
  document.querySelector("#score").textContent = score;
  document.querySelector("#random-number").textContent = "?";
});
