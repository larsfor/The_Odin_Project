import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./practice"

test('capitalize - the word "capitalize" should become "Capitalize"', () => {
    const capitalizedWord = capitalize('capitalize');
    expect(capitalizedWord).toBe('Capitalize');
    expect(capitalizedWord).not.toBe('capitalize');
});

test('reverse strng - the word "reverse" should become "esrever"', () => {
    const revStr = reverseString('reverse');
    expect(revStr).toBe('esrever');
    expect(revStr).not.toBe('reverse');
});

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
});

describe('testing the caesar cipher', () => {
    test('rotating "test" with 13 should result in "grfg"', () => {
        expect(caesarCipher('test', 13)).toEqual('grfg')
    })
    test('rotating "Test" with 10 should result in "Docd"', () => {
        expect(caesarCipher('Test', 10)).toEqual('Docd')
    })
    test('rotating "Test1" with 7 should result in "Alza1"', () => {
        expect(caesarCipher('Test1', 7)).toEqual('Alza1')
    })
    test('rotating "TEST" with 7 should result in "ALZA"', () => {
        expect(caesarCipher('TEST', 7)).toEqual('ALZA')
    })
    test('rotating "Hello World!" with 33 should result in "Olssv Dvysk!"', () => {
        expect(caesarCipher('Hello World!', 33)).toEqual('Olssv Dvysk!')
    })
});

describe('testing arrayAnalyzer', () => {
    test('Array [1,8,3,4,2,6] should result "{average: 4, min: 1, max: 8, length: 6}"', () => {
        expect(analyzeArray([1,8,3,4,2,6])).toEqual({"average": 4, "length": 6, "max": 8, "min": 1} )
    })
    test('Array [-1,8,3,4,2,6] should result "{"average": 3.6666666666666665, "length": 6, "max": 8, "min": -1}"', () => {
        expect(analyzeArray([-1,8,3,4,2,6])).toEqual({"average": 3.6666666666666665, "length": 6, "max": 8, "min": -1})
    })
    test('An empty array shoud throw an error', () => {
        expect(() => {
            expect(analyzeArray([]));
        }).toThrow();
    })
});