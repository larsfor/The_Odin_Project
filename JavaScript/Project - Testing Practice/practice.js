// capitalize function that takes a string and returns it with the first character capitalized.
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1, str.length)
}

// A reverseString function that takes a string and returns it reversed.
function reverseString(str) {
    // let revStr = '';
    // for (let i = str.length; i > 0; i--) {
    //     revStr += str[i - 1];
    // }
    // return revStr

    let revStr = [...str].reverse().join('');
    return revStr
}

// A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. 
// Each of these functions should take two numbers and return the correct calculation.
const calculator = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => {
        if (b === 0) {
            throw "Can't divide by 0!"
        }
        return a / b;
    };
    return {
        add, sub, mul, div
    };
})();

export { capitalize, reverseString, calculator };