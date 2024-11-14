// select all of the buttons
// save them in a VAR that we can later use it
const buttons = document.querySelectorAll('button');


// add event listeners for EACH button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const humanChoice = button.id;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});

let humanScore = 0;
let computerScore = 0;
let winningScore = 5;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber === 0 ? "rock" : randomNumber === 1 ? "paper" : "scissors";
}

function playRound(humanChoice, computerChoice) {
    console.log("Player choice:", humanChoice);
    console.log("Computer choice:", computerChoice);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
        document.getElementById("theWinner").textContent = "It's a tie!";
    } else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log("You won! Rock beats Scissors.")
            humanScore += 1;
            document.getElementById("theWinner").textContent = "You won! Rock beats Scissors.";
        } else {
            console.log("You lose! Paper beats Rock")
            computerScore += 1;
            document.getElementById("theWinner").textContent = "You lose! Paper beats Rock.";
        }

    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You won! Paper beats Rock.")
            humanScore += 1;
            document.getElementById("theWinner").textContent = "You won! Paper beats Rock.";
        } else {
            console.log("You lose! Scissors beats Paper")
            computerScore += 1;
            document.getElementById("theWinner").textContent = "You lose! Scissors beats Paper.";
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            console.log("You won! Scissors beats Paper.")
            humanScore += 1;
            document.getElementById("theWinner").textContent = "You won! Scissors beats Paper.";
        } else {
            console.log("You lose! Rock beats Scissors")
            computerScore += 1;
            document.getElementById("theWinner").textContent = "You lose! Rock beats Scissors.";
        }

        // Update the score display dynamically
        document.getElementById("humanScore").textContent = humanScore;
        document.getElementById("computerScore").textContent = computerScore;

    }

}

// Display the running score, and announce a winner of the game once one player reaches 5 points.

if (humanScore >= winningScore) {
    document.getElementById("theWinner").textContent = "You won!";
} else if (computerScore >= winningScore) {
    document.getElementById("theWinner").textContent = "You lost the game :/";
}

