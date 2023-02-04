window.addEventListener("DOMContentLoaded", (event) => {
    console.log('DOMContent loaded')

    
    // // adding a click-event to get the  for the table <td>-cells
    // let cells = document.querySelectorAll("td")
    // cells.forEach((cell) => {
    //     cell.addEventListener("click", () => {
    //         // console.log(cell);
    //         return cell;
    //     })
    // });
    game = Game;
    game.newGame();
});

const Game = ( () => {
    const newGame = () => {
        const player1 = Player('Lars', 'X');
        const player2 = Player('Klars', 'O')
        let cur_play = player1
        while (true) {
            // console.log('test');

            // console.log(cur_play);

            let player = getPlayer(cur_play);
            let cur_play = player

            console.log(cur_play);


            if (gameOver) {
                console.log('over');
                break;
            }
        }
    }
    return { newGame }
})();

const getPlayer = ( (player) => {
    let turn = (player == newGame.player1 ? newGame.player2 : newGame.player1);
    return { turn };
})

const gameOver = ( () => {
    let status = true;
    return { status };
})();

// A player constructor as a factory
const Player = (name, marker) => {
    return { name, marker };
  };


// A 3x3 array as a module
const Gameboard = ( () => {
    let board = Array.from(Array(3), () => new Array(3, ''));
    return { board };
})();

// function generateTable() {
//     gameboard = Gameboard;
//     for (let i = 0; i < 3; i++) {
//         for (let j = 0; j < 3; j++) {
//             let GameCell = gameboard.board[i][j];
//             let HTMLcell = document.querySelector(`#\\3${i}-${j}`);
//             HTMLcell.append(GameCell);
//         }
//     }
// }

function placeMarker(cell, marker) {
    
    gameboard = Gameboard;

}