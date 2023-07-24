const Board = require('./gameboard');
const coords = [ [[0, 0], [0, 1], [0, 2], [0, 3]], // horizontal correct
               [[9, 0], [9, 1], [9, 2], [9, 3]], // vertical correct
               [[0, -1], [0, 0], [0, 1], [0, 2]], // horizontal incorrect - y < 0
               [[7, 0], [8, 0], [9, 0], [10, 0]], // vertial incorrect - x > 9
               [[2, 3], [3, 4], [4, 5], [5, 6]], // incorrect - only vertical or horizontal placement
            ];

describe('Testing the gameboard factory', () => {
    // Testing if the type is an object, and exists    
    test('The gameboard should be an object', () => {
        expect(typeof Board()).toBe('object');
    });

    // Testing ship placement
    test('Placing a size 4, horizontal ship inside the board, should pass', () => {
        expect(Board().placeShip(coords[0])).toBe(true);
    });
    test('Placing a size 4, vertical ship inside the board, should pass', () => {
        expect(Board().placeShip(coords[1])).toBe(true);
    });
    test('Placing a size 4, horizontal ship outside the board, should fail', () => {
        expect(Board().placeShip(coords[2])).toBe(false);
    });
    test('Placing a size 4, vertical ship outside the board, should fail', () => {
        expect(Board().placeShip(coords[3])).toBe(false);
    });
    test('Placing a size 4, non-linear ship outside the board, should fail', () => {
        expect(Board().placeShip(coords[4])).toBe(false);
    });

    // Testing the receiveAttack function
    test('Attacking a previously attacked and missed cell, should ask the player to try again', () => {
        const attackCoords = [0, 0];
        let b = Board();
        b.missed.push(attackCoords);
        b.receiveAttack(attackCoords);
        expect(b.receiveAttack(attackCoords)).toBe('Coordinates already chosen, try again.');
    });
    test('Attacking a previously attacked cell, should ask the player to try again', () => {
        const attackCoords = [0, 0];
        let b = Board();
        b.board[0][0] = 'X';
        expect(b.receiveAttack(attackCoords)).toBe('Coordinates already chosen, try again.');
    });
    test('Attacking a cell with a ship on it, should be true', () => {
        const attackCoords = [0, 0];
        let b = Board();
        b.placeShip(coords[0])
        expect(b.receiveAttack(attackCoords)).toBe(true);
    });
    test('Attacking a blank cell should return "Miss!"', () => {
        const attackCoords = [0, 0];
        expect(Board().receiveAttack(attackCoords)).toBe('Miss!');
    });

    // Testing the allSunk function
    test('If there is a boat left, the game should be over.', () => {
        const attackCoords = [0, 0];
        let b = Board();
        b.placeShip(coords[0])
        expect(b.allSunk()).toBe(false);
    });
    test('When the last ship is sunk, the game should be over.', () => {
        let b = Board();
        b.placeShip(coords[0])
        b.receiveAttack([0, 0])
        b.receiveAttack([0, 1])
        b.receiveAttack([0, 2])
        b.receiveAttack([0, 3])
        expect(b.allSunk()).toBe(true);
    });
})