window.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed.");
})

// Making the windows start with the number 0
const numbersWindow = document.getElementById("numbers")
numbersWindow.textContent = 0;

// Buttons to fill the screen with numbers and decimal
const buttonPad = document.querySelector("#buttons");
const decimalButton = document.querySelector("#comma");

// Adding the operators to the calculator
function add(a, b) {
    return (parseFloat(a) + parseFloat(b)).toFixed(1);
}

function subtract(a, b) {
    return (parseFloat(a) - parseFloat(b)).toFixed(1);
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b == 0 ? "Error, can't divide by 0" : Math.round(a / b * 100) / 100;
}

// Adding an operate function 
function operate(operator, num1, num2) {
    switch(operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "x":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return "Unknown command."
    }
}

// Functions that populates the screen
// Variables to calculate the numbers
let currNum = "";
let number1 = "";
let number2 = "";
let oper1 = "";
let oper2 = "";
let commaCount = 0;


// Calculating
buttonPad.addEventListener("click", (e) => {
    // Add a pressing down effect on the buttons, but only for the 
    // buttons, and not the acutal pad.
    if (e.target.type === "submit") {
        buttonPress(e.target);
    }

    // Clicking the operators
    if (e.target.className === "operator") {
        oper1 = oper2;
        oper2 = e.target.textContent;
        numbersWindow.textContent = number1 + " " + oper2;
        currNuM = operate(oper1, number1, number2);
        
        if (number2.length > 0) {
            numbersWindow.textContent = currNuM;
            number1 = currNuM;
            number2 = "";
        }
    }

    // Clicking the equal sign. Can't have it appear on screen. Also
    // can't have it as an operator, as it will mess up the calcuations.
    if (e.target.className === "equals") {
        oper1 = oper2;
        currNuM = operate(oper1, number1, number2);
        
        if (number2.length > 0) {
            numbersWindow.textContent = currNuM;
            number1 = currNuM;
            number2 = "";
            oper2 = "";
        }
    }

    // Entering the numbers on screen
    if (e.target.className === "number" && oper2.length === 0) {
        number1 += e.target.textContent;
        currNum = number1;
        numbersWindow.textContent = number1;
                
        // Only allow one decimal on screen -> disable decimal button if more than
        // one decimal.
        checkComma(number1, number2);

    } else if (e.target.className === "number") {
        number2 += e.target.textContent;
        currNum = number2;
        numbersWindow.textContent = number1 + " " + oper2 + " " + number2;
        
        // Only allow one decimal on screen -> disable decimal button if more than
        // one decimal.
        checkComma(number1, number2);
    }
    
    // Clear function
    if (e.target.className === "clear") {
        number1 = "";
        number2 = "";
        oper1 = "";
        oper2 = "";
        currNum = "";
        numbersWindow.textContent = 0;
        decimalButton.disabled = false;
    }
    
    // Delete function
    if (e.target.className === "delete") {
        if (currNum.length < 2 && number1.length < 1) {
            currNum = "";
            numbersWindow.textContent = 0;
        } else if (number2 === "") {
            currNum = currNum.slice(0, currNum.length-1)
            numbersWindow.textContent = currNum + " " + oper2;
        } else {
            currNum = currNum.slice(0, currNum.length-1)
            numbersWindow.textContent = number1 + " " + oper2 + " " + currNum;
            
            // Only allow one decimal on screen -> disable decimal button if more than
            // one decimal.
            checkComma(number1, number2);

            // Update number1 and number2 accordingly so that we don't start
            // to remove digits from other numbers than the current number
            if (number2.length > 0) {
                number2 = currNum;
            } else {
                number1 = currNum;
            }
        }
    }
})


// Only allow one decimal on screen -> disable decimal button if more than
// one decimal. But you can also have two numbers with decimals. And you can't
// have two decimals on one of the numbers if you have two numbers. E.g.
// 2 + 3.. => should not be possible
function checkComma(number1, number2) {
    commaCount1 = Array.from(number1).filter((d) => d === ".");
    commaCount2 = Array.from(number2).filter((d) => d === ".");
    
    decimalButton.disabled = false;
    
    if (number2 === "") {
        if (commaCount1.length === 1) {
            decimalButton.disabled = true;
        }
    } else if (commaCount1.length + commaCount2.length === 2) {
            decimalButton.disabled = true;
    } 
}

// Function to animate the button press
function buttonPress(button) {
    button.style.transform = "scale(0.85)";
    button.style.borderColor = "grey";
    button.style.boxShadow = "0 0 1rem grey";
    button.style.transition = "all .1s ease";

    setTimeout(() => { 
        button.style.transform = "scale(1)";
        button.style.borderColor = "black";
        button.style.boxShadow = "0 0 black";
    }, 125);
}