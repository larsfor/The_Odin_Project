window.addEventListener("DOMContentLoaded", (event) => {
    console.log('DOMContent loaded')
});

// A player constructor as a factory
const Player = (name, marker) => {
    return { name, marker };
  };


// A 3x3 array as a module
const Gameboard = ( () => {
    board = Array.from(Array(3), () => new Array(3, ''))
    return { board }
})();

function generateTable() {
    gameboard = Gameboard;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let GameCell = gameboard.board[i][j];
            let HTMLcell = document.querySelector(`#\\3${i}-${j}`);
            HTMLcell.append(GameCell);
        }
    }
}