const Ship = require('./ship');
const Board = require('./gameboard');
const Player = require('./player');
import './style.css';

function components() {
    let playerOneHTMLBoard = renderHTMLMBoard('Player1');
    let playerTwoHTMLBoard = renderHTMLMBoard('Player2');

    // Split board one and board two and add game start and player form
    const splitter = document.createElement('div');
    splitter.classList.add('splitter');
    
    const form = document.createElement('form');
    let btn = document.createElement('button');
    btn.innerText = 'Start game'

    let playerOneInput = document.createElement('input'); 
    playerOneInput.placeholder = 'Player one';

    let playerTwoInput = document.createElement('input'); 
    playerTwoInput.placeholder = 'Player two';
    
    splitter.appendChild(form);

     [playerOneInput, playerTwoInput, btn ].forEach( (e) => {
         form.appendChild(e);
     });

    return [playerOneHTMLBoard, splitter, playerTwoHTMLBoard];
}

function gameLogic() {
    let [ playerOne, playerTwo, boardOne, boardTwo ] = gameStart();
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

function gameStart() {
    const playerOne = Player('Player 1');
    playerOne.ID = 1;

    const playerTwo = Player('Player 2');
    playerOne.ID = 2;
    playerTwo.computer = true;

    let boardOne = Board(playerOne.name);
    let boardTwo = Board(playerTwo.name);

    return [playerOne, playerTwo, boardOne, boardTwo];
}

// Placing the game elements on the page
let elements = components();
elements.forEach((e) => {
    document.body.appendChild(e);
})
