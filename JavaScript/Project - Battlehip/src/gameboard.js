const Ship = require('./ship');

const Gameboard = (player) => {
    let ships = [];
    let missed = [];
    let board = Array.from(Array(10), () => new Array(10).fill(0));

    const receiveAttack = (coords) => {
        const [x, y] = coords;
        const attack = board[x][y];

        const a = JSON.stringify(missed);
        const b = JSON.stringify(coords);
        const occupied = a.indexOf(b);

        // Check if the attack has been picked previously
        if ( occupied === 1 ||  attack === 'X' ) {
            return 'Coordinates already chosen, try again.';
        };

        // Check if the cell is a blank cell (0).
        // If not, the ship gets hit.
        if ( attack != 0 ) {
            const hitShip = attack;
            hitShip.hit();
            board[x][y] = 'X';

            // If all boats are sunk, it's game over!
            if ( allSunk() ) {
                return 'You lose!';
            };
            return true;
        };

        // If the cell is a blank cell, the attack misses
        missed.push(coords);
        return 'Miss!';
    };

    const placeShip = (coords) => {
        if ( !validShipPlacement(coords, board) ) { return false };
        
        // If valid placement, place the ship on the board with the coords
        let ship = Ship(4);
        ship.type = 'D';
        coords.forEach((c) => {
            ships.push(ship)
            ship.coords.push(c);
            const [x, y] = c;
            board[x][y] = ship;
        });

        return true;
    };

    const allSunk = () => ships.every(s => s.isSunk());
    
    return { placeShip, allSunk, receiveAttack, player, missed, board };
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
    };

    return isValid;
}

module.exports = Gameboard;
