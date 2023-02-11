window.addEventListener("DOMContentLoaded", () => {
    console.log('DOMContent loaded')

    game = Game;
    game.newGame();
});

const Game = (() => {
    const newGame = () => {
        const player1 = Player('Lars', 'X');
        const player2 = Player('Klars', 'O');
        const board = Gameboard.board;

        player = player1;
        marker = player.marker;

        // Showing which player's turn it is
        playerPrompt = document.querySelector('#playerprompt')
        playerPrompt.innerHTML = `${player.name}'s turn  ( ${player.marker} )`

        // Add a click event to the <td>-cells
        let cells = document.querySelectorAll("td")
        cells.forEach( (cell) => {
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
                        alert('you are the winner');
                        
                        // Remove the placements of the game's board
                        // Gameboard.clearBoard;

                        // Remove the placements of the DOM's board
                        cells.forEach((cell) => {
                            cell.innerHTML = '';
                        })
                    }

                } else {
                    console.log('false');
                }
            });
        });
    }

    // A 3x3 array as a module
    const Gameboard = (() => {
        const board = Array.from(Array(3), () => new Array(3));
        const clearBoard = board.forEach((cell) => {
            cell = '';
        })
        return { board, clearBoard };
    })();

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
            console.log('sann');
            return true;
        } else {
            console.log('usann');
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
    
    // A player constructor as a factory
    const Player = (name, marker) => {
        return { name, marker };
    };

    return { newGame }
})();


