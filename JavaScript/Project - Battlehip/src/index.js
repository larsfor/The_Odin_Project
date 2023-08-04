const Ship = require('./ship');
const Board = require('./gameboard');
const Player = require('./player');
const GameInfo = require('./gameInfo');
import './style.css';

let game = GameInfo(); // An object to handle the game logic (current board, current player etc.)

function components() {
    const titleOne = document.createElement('h3');
    titleOne.innerHTML = 'Player One Board'

    const titleTwo = document.createElement('h3');
    titleTwo.innerHTML = 'Player Two Board'

    // Creating the one board for each player
    let playerOneHTMLBoard = renderHTMLMBoard('p1');
    let playerTwoHTMLBoard = renderHTMLMBoard('p2');
    
    // Creating a button to start the game
    let startButton = document.createElement('button');
    startButton.innerText = 'Start game'
    
    // Creating player one input
    let playerOneInput = document.createElement('input'); 
    playerOneInput.placeholder = 'Player one';
    playerOneInput.required = true;
    
    // Creating player two input
    let playerTwoInput = document.createElement('input');     
    playerTwoInput.placeholder = 'Player two';
    playerTwoInput.required = true;

    // Split board one and board two and add game start and player form
    const splitter = document.createElement('div');
    splitter.classList.add('splitter');
    // TODO: Add check box to chose between computer and non-computer enemy

    // Adding an onsubmit function to start the game
    const form = document.createElement('form');
    form.onsubmit = (e) => {
        e.preventDefault();

        playerOneInput.disabled = true;
        playerTwoInput.disabled = true;

        console.log('Starting the game');
        gameStart(game, playerOneInput.value, playerTwoInput.value);
    };

    // Adding the form to the div separating the boards
    splitter.appendChild(form);

     [ playerOneInput, playerTwoInput, startButton ].forEach( (e) => {
         form.appendChild(e);
     });

    return [ titleOne, playerOneHTMLBoard, splitter, titleTwo, playerTwoHTMLBoard];
}

function playerAction() {
    // Making sure the player isn't attacking its own board
    if ( !enemyBoard(this.id) ) {
        console.log("Only allowed to attack enemy's board");
        playerAction();
    }
    
    // Placing the coordinates in the board that the player chose
    playerAttack(game.curPlayer, this.id);
    
    // Re-render the board to show the attack on the HTML board
    renderBoard();
    changeCurPlayer(); // Setting curPlayer to the player whose turn it is to play
};

function enemyBoard(coords) {
    return coords.slice(1, 2) != game.curPlayer.ID;
}

function renderBoard() {
    console.log('Rendering board');
    let oppPlayer = null;
    let board = null;
    if ( game.curPlayer.ID === 1 ) {
        oppPlayer = 'p2'
        board = game.boardTwo;
    } else {
        oppPlayer = 'p1'
        board = game.boardOne;
    };

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let cell = document.getElementById(`${oppPlayer}-${i}-${j}`);
            cell.innerText = board.board[i][j];
        };
    };
};

function playerAttack(player, coords) {
    let p = coords.slice(1, 2);
    let i = coords.slice(3, 4);
    let j = coords.slice(5);
    let attackedBoard = null;
    ( player.ID === 1 ? attackedBoard = game.boardTwo : attackedBoard = game.boardOne )
    attackedBoard.receiveAttack([i, j]);
};

function changeCurPlayer() {
    return ( game.curPlayer.ID === 1 ?  game.curPlayer = game.playerTwo : game.curPlayer = game.playerOne );
};

function gameStart(game, playerOneName, playerTwoName) {
    // Creating player one
    game.playerOne = Player(playerOneName);
    game.playerOne.ID = 1;

    // Creating player two, and setting it as a computer
    game.playerTwo = Player(playerTwoName);
    game.playerTwo.ID = 2;
    game.playerTwo.computer = true;

    // Creating a board for each player
    game.boardOne = Board(playerOneName);
    game.boardTwo = Board(playerTwoName);

    // Setting player one as the starting player
    game.curPlayer = game.playerOne;
    game.curBoard = game.boardOne;
};

function renderHTMLMBoard(player) {
    let gridPlayer = document.createElement('div');
    const playerBoardDiv = document.createElement('div');
    playerBoardDiv.classList.add('grid-container');
    playerBoardDiv.id = `${player}BoardDiv`;
    
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let cell = document.createElement('div');
            cell.onclick = playerAction;
            cell.id = `${player}-${i}-${j}`;
            cell.innerText = 0;
            playerBoardDiv.appendChild(cell);
        };
    };
    
    gridPlayer.appendChild(playerBoardDiv);
    return gridPlayer;
};

// Placing the game elements on the web page
let elements = components();
elements.forEach((e) => {
    document.body.appendChild(e);
});
