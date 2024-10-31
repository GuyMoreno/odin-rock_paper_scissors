// בוחרת מס׳ רנדומלי בין 0-2
// הפונקציה מת׳ רנדום בוחרת מס׳ בין 0-1 עשרוני ואז מכפיל ב-3
// ואז נעגל למס׳ השלם כלפי מטה... בעזרת פלור

// הפונקציה שמשיגה את הבחירה של המחשב


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber === 0 ? "rock" : randomNumber === 1 ? "paper" : "scissors";
}

// end of getcomputerchoice func

// הפונקציה שמשיגה את הבחירה של המשתמש
function getHumanChoice() {
    let choice = prompt("What's your choice?").toLowerCase()
    // print to check what's out
    return choice;
}


function playGame() {
    // declaring human and computer scores vars
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        console.log("Human selection:", humanChoice);
        console.log("Computer selection:", computerChoice);
        if (humanChoice === computerChoice) {
            console.log("It's a tie!")
        } else if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                console.log("You won! Rock beats Scissors.")
                humanScore += 1;
            } else {
                console.log("You lose! Paper beats Rock")
                computerScore += 1;
            }

        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                console.log("You won! Paper beats Rock.")
                humanScore += 1;
            } else {
                console.log("You lose! Scissors beats Paper")
                computerScore += 1;
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "paper") {
                console.log("You won! Scissors beats Paper.")
                humanScore += 1;
            } else {
                console.log("You lose! Rock beats Scissors")
                computerScore += 1;
            }

        }
    }

    // Num of rounds to play
    const rounds = 5;
    for (let i = 0; i < rounds; i++) {
        // הגדרת משתנים המכילים את בחירות המחשב והאדם
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log("Final Scores:");
    console.log("Human score: ", humanScore);
    console.log("Computer score: ", computerScore);

    if (computerScore > humanScore) {
        console.log("YOU LOST THE GAME")
    }
    else if (computerScore < humanScore) {
        console.log("Congratulations! YOU WON THE GAME!")

    }
    else {
        console.log("YOUR SCORE IS EVEN")
    }
}


playGame();

