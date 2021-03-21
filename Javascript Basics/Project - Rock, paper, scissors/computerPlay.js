function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    return computerHand = choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    play = playerSelection.toLowerCase();
    if (play === "rock") {
        if (computerSelection === "paper") {
            return "You lose, " + computerSelection + " beats " + play + "."
        } else if (computerSelection === "scissors") {
            return "You win, " + play + " beats " + computerSelection + "."
        } else {
            return "Draw!";
        }
    }

    if (play === "paper") {
        if (computerSelection === "scissors") {
            return "You lose, " + computerSelection + " beats " + play + "."
        } else if (computerSelection === "rock") {
            return "You win, " + play + " beats " + computerSelection + "."
        } else {
            return "Draw!"
        }
    }

    if (play === "scissors") {
        if (computerSelection === "rock") {
            return "You lose, " + computerSelection + " beats " + play + "."
        } else if (computerSelection === "paper") {
            return "You win, " + play + " beats " + computerSelection + "."
        } else {
            return "Draw!"
        }
    }
}

function checkChoice(choice) {
    return ["rock", "paper", "scissors"].includes(choice);
}


function game() {
    let rounds = 0;
    let scoreComputer = 0;
    let scorePlayer = 0;
    let scoreDraw = 0;

    while (true) {
        let playerSelection = window.prompt("Choose between rock, paper and scissors.");
        if (checkChoice(playerSelection) === true) {
            const computerSelection = computerPlay();
            let round = playRound(playerSelection, computerSelection)
            console.log(round);
            if (round[4] === "w") {
                scorePlayer++;
            } else if (round[4] === "l") {
                scoreComputer++;
            } else {
                scoreDraw++;
            }
            rounds++;
        }

        if (rounds === 5) {
            console.log("Score computer: ", scoreComputer);
            console.log("Score player: ",scorePlayer);
            console.log("Draws: ",scoreDraw);
            break;
        }
    }
}