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

                    // Change the player and marker
                    player = nextPlayer(player, player1, player2);
                    marker = player.marker;

                    // Updating the player prompt
                    playerPrompt.innerHTML = `${player.name}'s turn  ( ${player.marker} )`
                } else {
                    console.log('false');
                }
            });
        });
    }

    // A 3x3 array as a module
    const Gameboard = (() => {
        const board = Array.from(Array(3), () => new Array(3));
        return { board };
    })();

    const gameOver = ( () => {
        let status = true;
        return { status };
    })();


    return { newGame }
})();

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
