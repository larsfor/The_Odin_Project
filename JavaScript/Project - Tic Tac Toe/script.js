window.addEventListener("DOMContentLoaded", () => {
    console.log('DOMContent loaded')

    const refreshButton = document.querySelector("#refreshButton");
    refreshButton.style.display = "none";

    const startButton = document.querySelector("#startButton");
    startButton.addEventListener("click", startGame);
});

// A 3x3 array as a module
const Gameboard = (() => {
    let board = Array.from(Array(3), () => new Array(3));
    return { board };
})();

// A module to start a new game
const startGame = (() => {
    board = Gameboard.board;
    game = Game;
    game.newGame(board);
});

const Game = (() => {
    const newGame = (board) => {
        // Get the player's names
        let [player1, player2] = getPlayers();

        player = player1;
        marker = player.marker;
        
        const startButton = document.querySelector("#startButton");
        const refreshButton = document.querySelector("#refreshButton");
        startButton.style.display = "none";
        refreshButton.style.display = "inline-block";



        refreshButton.addEventListener("click", () => {
            clearBoard(board);
            removeDOMBoard();
            let [player1, player2] = getPlayers();
            player1 = player1;
            player2 = player2;

            player = player1;
            marker = player.marker;
            playerPrompt.innerHTML = `${player.name}'s turn  ( ${player.marker} )`
        })

        // Showing which player's turn it is
        playerPrompt = document.querySelector('#playerprompt')
        playerPrompt.innerHTML = `${player.name}'s turn ( ${player.marker} )`

        // Add a click event to the <td>-cells
        let cells = document.querySelectorAll("td")
        cells.forEach((cell) => {
            cell.addEventListener("click", () => {
                // If it's a legal placement, continue
                // If not, do nothing
                if (validPlacement(cell, board)) {
                    // Placing marker on webpage and on board
                    placeMarker(cell, board, marker);

                    if (!gameOver(board, marker)) {                      
                        // Change the player and marker
                        player = nextPlayer(player, player1, player2);
                        marker = player.marker;
    
                        // Updating the player prompt
                        playerPrompt.innerHTML = `${player.name}'s turn  ( ${player.marker} )`

                    } else {
                        alert(`${player.name} is the winner!`);
                        
                        // Remove the placements of the DOM's board
                        removeDOMBoard();

                        // Clear the game's board
                        clearBoard(board);
                    }

                } else {
                    console.log('Illegal move!');
                }
            });
        });
    }

    function gameOver(board, marker) {
        let placements = [];

        let index = 1;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] == marker) {
                    placements.push(index);
                }
                index++;
            }
        }

        // No need to check winning conditions a player hasn't
        // placed 3 markers.
        if (placements.length < 3) {
            return;
        }

        if (isWinner(placements)) {
            return true;
        } else {
            return false;
        }
    }
        
    function isWinner(placements) {
        // winning conditions
        let winConditions = [
            [1, 2, 3], // top row
            [4, 5, 6], // middle row
            [7, 8, 9], // bottom row
            
            [1, 4, 7], // left column
            [2, 5, 8], // middle column
            [3, 6, 9], // right column
            
            [1, 5, 9], // diagonal left to right
            [3, 5, 7]  // diagonal right to left
        ]
        
        let isWinner = false;
        const isWinningCondition = (number) => placements.includes(number);
        winConditions.forEach((winCon) => {
            if (winCon.every(isWinningCondition)) {
                isWinner = true;
            }
        })
        return (isWinner);
    }

    function validPlacement(cell, board) {
        // Get the coordinates to check the board
        let r = cell.id[0];
        let c =  cell.id[2];
    
        // Return true if the cell is empty, false if not
        return (board[r][c] == null ? true : false)
    }
    
    function placeMarker(cell, board, marker) {
        // Place marker on the DOM
        cell.innerHTML = marker;
    
        // Place the marker the game's board
        let r = cell.id[0];
        let c =  cell.id[2];
        board[r][c] = marker;
    }
    
    function nextPlayer(player, player1, player2) {
        return (player == player1 ? player2 : player1)
    };

    return { newGame }
})();

// A player constructor as a factory
const Player = (name, marker) => {
    return { name, marker };
};

function getPlayers() {
    pOneName = document.querySelector("#playerone").value;
    pTwoName = document.querySelector("#playertwo").value;
    let player1 = Player(pOneName, 'X');
    let player2 = Player(pTwoName, 'O');

    return [player1, player2];
}

function removeDOMBoard () {
    let cells = document.querySelectorAll("td")
    cells.forEach((cell) => {
        cell.innerHTML = '';
    })
}

function clearBoard(board) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            board[i][j] = null;
        }
    }

    return board;
};

