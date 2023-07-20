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


function caesarCipher(str, rot) {
    let rotString = ""
    for (let i = 0; i < str.length; i++) {
        let ord = str.charCodeAt(i);
        const alpha = /[A-Za-z]/.test(str[i]);
        if (!alpha) {
            rotString += str[i];
        } else if (ord > 96) {
            let rotOrd = ((ord - 97) + rot) % 26 + 97
            rotString += String.fromCharCode(rotOrd);
        } else if (ord < 96) {
            let rotOrd = ((ord - 65) + rot) % 26 + 65
            rotString += String.fromCharCode(rotOrd);
        }
    }
    return rotString
}

function analyzeArray(arr) {
    if (arr.length < 1) {
        throw new Error("Please provide an array.");
    }

    let avg = arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
    let min = arr.reduce((acc, curr) => acc > curr ? curr : acc, Infinity);
    let max = arr.reduce((acc, curr) => acc > curr ? acc : curr, -Infinity);

    let obj = {
        average: avg,
        min: min,
        max: max,
        length: arr.length
    }

    return obj
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };