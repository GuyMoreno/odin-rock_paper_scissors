// vars
const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll("button");
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const container = document.getElementById("container");

let playerScore = 0; // Initialize player's score
let computerScore = 0; // Initialize computer's score
let winningScore = 5; // Initialize winning's score

// emojiis object for display on page later
const emojiis = {
  rock: "🪨",
  paper: "✋🏼",
  scissors: "✌🏼",
};

// HELPING FUNCS
function getComputerChoice() {
  // just pick a random number between 0-2 and store it inside randomNumber.
  let randomNumber = Math.floor(Math.random() * 3);
  //accecsing to the choises array in the random num index...
  // other words, pick a random move.
  return choices[randomNumber];
}

// Color Result Function
function colorResult(result) {
  // Clear Preveious color
  resultDisplay.classList.remove("greenText", "redText");
  // Start switching
  switch (result) {
    case "YOU WIN!":
      resultDisplay.classList.add("greenText");
      break;
    case "YOU LOSE!":
      resultDisplay.classList.add("redText");
      break;
  }
}

//.forEach method iterates each button
buttons.forEach((button) => {
  //for each one we add 'click' listener
  button.addEventListener("click", () => playGame(button.id));
});

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return "ITS A TIE!";

  const winCondition =
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper");

  return winCondition ? "YOU WIN!" : "YOU LOSE!";
}

function calculateScore(result) {
  if (result === "YOU WIN!") {
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
  } else if (result === "YOU LOSE!") {
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
  }
  checkGameOver();
}

function disableButtons() {
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function updateGameResultDisplay() {
  container.style.fontWeight = "bold";
  container.style.fontSize = "40px";
  container.style.color = playerScore === winningScore ? "green" : "red";
}

function checkGameOver() {
  if (playerScore === winningScore || computerScore === winningScore) {
    disableButtons();
    container.textContent =
      playerScore === winningScore
        ? "Player wins the game!"
        : "Computer wins the game!";
    updateGameResultDisplay();
  }
}

function playGame(playerChoice) {
  // defining var of computer choice
  // Helped with get computerChoice funct
  const computerChoice = getComputerChoice();
  let result = determineWinner(playerChoice, computerChoice);

  let playerEmoji = emojiis[playerChoice];
  let computerEmoji = emojiis[computerChoice];

  playerDisplay.textContent = `Player: ${playerEmoji}`;
  computerDisplasy.textContent = `Computer: ${computerEmoji} `;
  resultDisplay.textContent = result;
  //Call ColorResult
  colorResult(result);
  calculateScore(result);
}
