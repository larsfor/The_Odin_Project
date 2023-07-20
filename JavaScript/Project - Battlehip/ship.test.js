import { Ship } from './ship';

test('creating a ship works',  () => {
    const ship = Ship();
    expect(typeof ship).toBe('object');
})

test('a size 1 ship getting hit once is sunk',  () => {
    const ship = Ship(1);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
})

test('a size 2 ship getting hit once is not sunk',  () => {
    const ship = Ship(2);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
})