const Ship = require('./ship');
const Board = require('./gameboard');
const Player = require('./player');
import './style.css';

function components() {
    let playerOneHTMLBoard = renderHTMLMBoard('Player1');
    let playerTwoHTMLBoard = renderHTMLMBoard('Player2');
    
    let startButton = document.createElement('button');
    startButton.innerText = 'Start game'
    
    let playerOneInput = document.createElement('input'); 
    playerOneInput.placeholder = 'Player one';
    playerOneInput.required = true;
    
    let playerTwoInput = document.createElement('input');     
    playerTwoInput.placeholder = 'Player two';
    playerTwoInput.required = true;

    // Split board one and board two and add game start and player form
    const splitter = document.createElement('div');
    splitter.classList.add('splitter');
    
    // Adding an onsubmit function to start the game
    const form = document.createElement('form');
    form.onsubmit = (e) => {
        e.preventDefault();

        console.log('Starting the game');
        let [ playerOne, playerTwo, boardOne, boardTwo ] = gameStart(playerOneInput.value, playerTwoInput.value);
        gameLogic( playerOne, playerTwo, boardOne, boardTwo );
    };

    // Adding the form to the div separating the boards
    splitter.appendChild(form);

     [ playerOneInput, playerTwoInput, startButton ].forEach( (e) => {
         form.appendChild(e);
     });

    return [playerOneHTMLBoard, splitter, playerTwoHTMLBoard];
}

function gameLogic(playerOne, playerTwo, boardOne, boardTwo) {
    console.log(playerOne, playerTwo, boardOne, boardTwo);
}

function gameStart(playerOneName, playerTwoName) {
    const playerOne = Player(playerOneName);
    playerOne.ID = 1;

    const playerTwo = Player(playerOneName);
    playerTwo.ID = 2;
    playerTwo.computer = true;

    let boardOne = Board(playerOneName);
    let boardTwo = Board(playerTwoName);

    return [playerOne, playerTwo, boardOne, boardTwo];
}

function renderBoard(board) {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let cell = document.createElement('div');
            cell.id = `p2-${i}-${j}`;
            cell.innerText = playerTwoBoard.board[i][j];
            playerTwoBoardDiv.appendChild(cell);
        }
    }
}

function renderHTMLMBoard(player) {
    let gridPlayer = document.createElement('div');

    const playerBoardDiv = document.createElement('div');
    playerBoardDiv.classList.add('grid-container');
    playerBoardDiv.id = `${player}_BoardDiv`;

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let cell = document.createElement('div');
            cell.id = `${player.id}-${i}-${j}`;
            cell.innerText = 0;
            playerBoardDiv.appendChild(cell);
        }
    }

    gridPlayer.appendChild(playerBoardDiv);
    return gridPlayer;
}


// Placing the game elements on the page
let elements = components();
elements.forEach((e) => {
    document.body.appendChild(e);
})
