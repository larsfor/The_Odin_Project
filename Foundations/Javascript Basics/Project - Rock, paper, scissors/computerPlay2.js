// Select all the buttons under the buttons class
const buttons = document.querySelectorAll('.button');

// Use the .forEach to iterate through each button
// small change
buttons.forEach( (button) => {
    
    // For each one we add a 'click' listener
    button.addEventListener('click', () => {
        const choice = button.attributes['data-button'].value;
        const computerSelection = computerPlay();
        playRound(choice, computerSelection)
    })
})

// Let the computer choose between rock, paper and scissors
function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    return computerHand = choices[Math.floor(Math.random() * 3)];
}

// The beginning score
let wins = 0;
let losses = 0;
let draws = 0;

// The function to keep track of the scores and make the computer play
function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection)

    let winPoints = document.querySelector('.winPoints');
    let losePoints = document.querySelector('.losePoints');
    let drawPoints = document.querySelector('.drawPoints');

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            // Lose
            losses += 1;
            losePoints.textContent = `Losses: ${losses}`;
        } else if (computerSelection === "scissors") {
            // Win
            wins += 1;
            winPoints.textContent = `Wins: ${wins}`;
        } else {
            // Draw
            draws += 1;
            drawPoints.textContent = `Draws: ${draws}`;
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            // Lose
            losses += 1;
            losePoints.textContent = `Losses: ${losses}`;
        } else if (computerSelection === "rock") {
            // Win
            wins += 1;
            winPoints.textContent = `Wins: ${wins}`;
        } else {
            // Draw
            draws += 1;
            drawPoints.textContent = `Draws: ${draws}`;
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            // Lose
            losses += 1;
            losePoints.textContent = `Losses: ${losses}`;
        } else if (computerSelection === "paper") {
            // Win
            wins += 1;
            winPoints.textContent = `Wins: ${wins}`;
        } else {
            // Draw
            draws += 1;
            drawPoints.textContent = `Draws: ${draws}`;
        }
    }

    if (wins === 5) {
        // Notifies that you've won, and reset the score
        alert('You won!');
        wins = 0;
        losses = 0;
        draws = 0;
        losePoints.textContent = "Losses: 0";
        winPoints.textContent = "Wins: 0";
        drawPoints.textContent = "Draws: 0";
    } else if (losses === 5) {
        // Notifies that you've lost, and reset the score
        alert('You lose');
        wins = 0;
        losses = 0;
        draws = 0;
        losePoints.textContent = "Losses: 0";
        winPoints.textContent = "Wins: 0";
        drawPoints.textContent = "Draws: 0";
    }
}