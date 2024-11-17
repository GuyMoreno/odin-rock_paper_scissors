// select all of the buttons
// save them in a VAR that we can later use it
const buttons = document.querySelectorAll('button');


// add event listeners for EACH button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // the game continue run ONLY if score not above 5
        if (humanScore < winningScore && computerScore < winningScore) {
            // saving human selction as button id
            const humanChoice = button.id;
            const computerChoice = getComputerChoice();
            // finally we're playing
            playRound(humanChoice, computerChoice);
        }
    });
});

// vars declerations
let humanScore = 0;
let computerScore = 0;
let winningScore = 5;

// helping functions"
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber === 0 ? "rock" : randomNumber === 1 ? "paper" : "scissors";
}


function playRound(humanChoice, computerChoice) {
    console.log("Player choice:", humanChoice);
    console.log("Computer choice:", computerChoice);

    let roundResult = ''; // Store the result message

    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
        roundResult = "It's a tie!";
    } else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log("You won! Rock beats Scissors.")
            roundResult = "You won! Rock beats Scissors.";
            humanScore += 1;
        } else {
            console.log("You lose! Paper beats Rock")
            roundResult = "You lose! Paper beats Rock.";
            computerScore += 1;
        }

    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You won! Paper beats Rock.")
            roundResult = "You won! Paper beats Rock.";
            humanScore += 1;
        } else {
            console.log("You lose! Scissors beats Paper")
            roundResult = "You lose! Scissors beats Paper.";
            computerScore += 1;
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            console.log("You won! Scissors beats Paper.")
            roundResult = "You won! Scissors beats Paper.";
            humanScore += 1;
        } else {
            console.log("You lose! Rock beats Scissors")
            roundResult = "You lose! Rock beats Scissors.";
            computerScore += 1;
        }

    }
    // Update the result of the round on the screen
    document.getElementById("theWinner").textContent = roundResult;
    // Update the score display dynamically
    document.getElementById("humanScore").textContent = humanScore;
    document.getElementById("computerScore").textContent = computerScore;

    // after every round we check if someone reached 5 pts.
    if (humanScore >= winningScore) {
        document.getElementById("theWinner").textContent = "You won!";
        disableButtons();
    } else if (computerScore >= winningScore) {
        document.getElementById("theWinner").textContent = "You lost the game :/";
        disableButtons();
    }
}


function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    });
}
