const Ship = require('./ship');
const Board = require('./gameboard');
import './style.css';

function component() {
    let playerOneBoard = Board();
    let playerTwoBoard = Board();

    const playerOneBoardDiv = document.createElement('div');
    playerOneBoardDiv.id = 'PlayerOneBoardDiv';

    const splitter = document.createElement('div');

    const playerTwoBoardDiv = document.createElement('div');
    playerTwoBoardDiv.id = 'PlayerTwoBoardDiv';

    playerOneBoardDiv.classList.add('grid-container');
    splitter.classList.add('splitter');
    playerTwoBoardDiv.classList.add('grid-container');

    let gridPlayerOne = document.createElement('div');
    let gridPlayerTwo = document.createElement('div');

    // Creating the 10x10 grid for player one
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let cell = document.createElement('div');
        cell.id = `p1-${i}-${j}`;
        cell.innerText = playerOneBoard.board[i][j];
        playerOneBoardDiv.appendChild(cell);
      }
    }

    // Creating the 10x10 grid for player two
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let cell = document.createElement('div');
        cell.id = `p1-${i}-${j}`;
        cell.innerText = playerTwoBoard.board[i][j];
        playerTwoBoardDiv.appendChild(cell);
      }
    }

    gridPlayerOne.appendChild(playerOneBoardDiv);
    gridPlayerTwo.appendChild(playerTwoBoardDiv);
    
    return [playerOneBoardDiv, splitter, playerTwoBoardDiv];
  }
  
  let element = component();
  element.forEach((e) => {
    document.body.appendChild(e);
  })
