let secretNumber;
let attemptsLeft;

function generateNumber() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 10;
  document.getElementById("attemptCount").textContent = attemptsLeft;
  document.getElementById("message").textContent = "";
  document.getElementById("restartBtn").style.display = "none";
  document.getElementById("guessInput").disabled = false;
}

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  const message = document.getElementById("message");

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "Please enter a number between 1 and 100!";
    return;
  }

  if (guess === secretNumber) {
    message.textContent = `🎉 Congratulations! You guessed it right: ${secretNumber}`;
    endGame();
  } else {
    attemptsLeft--;
    document.getElementById("attemptCount").textContent = attemptsLeft;
    if (attemptsLeft === 0) {
      message.textContent = `❌ Game Over! The number was ${secretNumber}`;
      endGame();
    } else {
      message.textContent =
        guess < secretNumber
          ? "📉 Too low! Try again."
          : "📈 Too high! Try again.";
    }
  }
}

function endGame() {
  document.getElementById("guessInput").disabled = true;
  document.getElementById("restartBtn").style.display = "block";
}

function restartGame() {
  document.getElementById("guessInput").value = "";
  generateNumber();
}

generateNumber(); // start game when page loads
