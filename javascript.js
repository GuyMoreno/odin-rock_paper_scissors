// בוחרת מס׳ רנדומלי בין 0-2
// הפונקציה מת׳ רנדום בוחרת מס׳ בין 0-1 עשרוני ואז מכפיל ב-3
// ואז נעגל למס׳ השלם כלפי מטה... בעזרת פלור

// הפונקציה שמשיגה את הבחירה של המחשב
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        return "rock";
    }
    else if (randomNumber == 1) {
        return "paper";

    }
    else {
        return "scissors"
    }
}

// הפונקציה שמשיגה את הבחירה של המשתמש
function getHumanChoice(text) {
    let choice = prompt("What's your choice?")
    // print check what's out
    return choice;
}

// הגדרת משתנים המכילים את בחירות המחשב והאדם
let hunanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

// הדפסת המשתנים לעיל כדי לבדוק נכונות
console.log(hunanChoice);
console.log(computerChoice);