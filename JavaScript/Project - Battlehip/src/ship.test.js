import { Ship } from './ship';

describe('Testing Ship factory', () => {
    test('Ship should be an object', () => {
        expect(typeof Ship()).toBe('object');
    });
    test('Ship should have a hit() function', () => {
        expect(Ship()).toHaveProperty('hit');
    });
    test('Ship should have a isSunk() function', () => {
        expect(Ship()).toHaveProperty('isSunk');
    });
    test("A size 4 Ship shouldn't be sunk after 1 hit ", () => {
        let ship = Ship(4);
        ship.hit()
        expect(ship.isSunk()).toBe(false);
    });
    test("A size 1 Ship should be sunk after 1 hit ", () => {
        let ship = Ship(1);
        ship.hit()
        expect(ship.isSunk()).toBe(true);
    });
})
