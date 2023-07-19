import { capitalize, reverseString, calculator } from "./practice"

test('capitalize - the word "capitalize" should become "Capitalize"', () => {
    const capitalizedWord = capitalize('capitalize');
    expect(capitalizedWord).toBe('Capitalize');
    expect(capitalizedWord).not.toBe('capitalize');
})

test('reverse strng - the word "reverse" should become "esrever"', () => {
    const revStr = reverseString('reverse');
    expect(revStr).toBe('esrever');
    expect(revStr).not.toBe('reverse');
})

describe('testing calculator - add, subtract, divide and multiply', () => {
    test('adds 1 + 2 to be equal to 3', () => {
        expect(calculator.add(1, 2)).toEqual(3);
    });
    test('adds 0.1 + 0.2 to be close to 0.3', () => {
        expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
    });
    test('subtracts 1 - 2 to be equal to -1', () => {
        expect(calculator.sub(1, 2)).toEqual(-1);
    });
    test('divide 1 / 2 to be equal to 0.5', () => {
        expect(calculator.div(1, 2)).toEqual(0.5);
    });
    test("20 / 0 throws", () => {
        expect(() => {
          expect(calculator.div(20, 0));
        }).toThrow();
      });

    test('multiplies 1 * 2 to be equal to 2', () => {
        expect(calculator.mul(1, 2)).toEqual(2);
    });
})