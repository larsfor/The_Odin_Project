const Ship = require('./ship');

const Gameboard = (player) => {
    let missed = [];
    let board = Array.from(Array(10), () => new Array(10).fill(0));

    const receiveAttack = (coords) => {
        const [x, y] = coords;
        const attack = board[x][y];
        
        // Check if the attack has been picked previously
        if ( missed.includes(coords) ||  attack === 'X' ) {
            console.log('Coordinates already chosen, try again.');
            return;
        };

        // Check if the cell is eiter a blank cell (0) or already attacked (X)
        // If not, the ship gets hit.
        if ( /[^0xX]/.test(attack) ) {
            const hitShip = attack;
            hitShip.hit();
            board[x][y] = 'X';

            // If all boats are sunk, it's game over!
            if ( allSunk() ) {
                console.log('You lose!');
                return;
            };
            return;
        };

        console.log('Miss!');
        missed.push(coords);
    };

    const placeShip = (coords) => {
        if ( !validShipPlacement(coords, board) ) { return false };
        
        // If valid placement, place the ship on the board with the coords
        let ship = Ship(4);
        ship.type = 'D';
        coords.forEach((c) => {
            ship.coords.push(c);
            const [x, y] = c;
            board[x][y] = ship;
        });
    };

    const allSunk = () => {
        // Checking if there are any more boat parts left on the board
        const types = ['c', 'b', 'd', 's', 'p'];
        let remaining = 0;
        types.forEach((t) => {
            remaining += board.flat().filter(i => String(i.type).toLowerCase() === t).length;
        });

        if (remaining < 1) {
            return true;
        }
        return false;
    }
    
    return { placeShip, allSunk, receiveAttack, player, missed };
}

function validShipPlacement(coords, board) {
    let isValid = true;

    coords.forEach((c) => {
        const [x, y] = c;

        // Checking if the coords are out of bounds 
        if ( x < 0 || y < 0 || x > 9 || y > 9 ) {
            return isValid = false;
        };

        // Checking if the coords are taken / already chosen
        if ( (board[x][y]) != 0 ) {
            return isValid = false;
        };
    });

    // Checking if the coords aren't vertical or horizontal
    const [ start, end ] = [ coords[0], coords[coords.length - 1] ]
    if ( end[0] > start[0] && end[1] > start[1] ) {
        return isValid = false;
    }

    return isValid;
}

let player = 'test';
let coords = [ [[0, 0], [0, 1], [0, 2], [0, 3]], // correct
               [[9, 0], [9, 1], [9, 2], [9, 3]], // correct
               [[0, -1], [0, 0], [0, 1], [0, 2]], // incorrect - y < 0
               [[7, 0], [8, 0], [9, 0], [10, 0]], // incorrect - x > 9
               [[2, 3], [3, 4], [4, 5], [5, 6]], // incorrect - only vertical or horizontal placement
            ];

let b = Gameboard(player);
b.placeShip(coords[0]);
b.receiveAttack([0, 0]);
b.receiveAttack([0, 0]);
b.receiveAttack([0, 1]);
b.receiveAttack([0, 2]);
b.receiveAttack([0, 3]);
// b.placeShip(coords[2]);
// console.log(b.placeShip(coords[1]));
// console.log(b.allSunk());
// console.log(coords[1]);
// console.log(validShipPlacement(coords[0]));
// let Board = b.board;
// Board[0][0] = 'D';
// console.log(Board);
// validShipPlacement(coords[0], Board);
// console.log(b.board);
// console.log(b.player);

// module.exports = Gameboard;
