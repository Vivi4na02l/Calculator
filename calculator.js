let btnsNumber = document.querySelectorAll(".number");
let screen = document.querySelector("#screen");
let numberTyped = false;
let symbolTyped = false;
let oldScreen;

let digit;
let number = '';
let symbol;
let equation = [];

/**
 * when any of the numbers' buttons are clicked...
 */
for (const btnNumber of btnsNumber) {
    btnNumber.addEventListener("click", () => {
        digit = btnNumber.innerHTML;

        addOnScreen(btnNumber.innerHTML);

        if (symbolTyped) {
            symbolTyped = false;
            equation.push(symbol);
        }
    })
}

/**
 * adds number to the screen visually
 * @param {*} nbr the number of the button clicked
 */
function addOnScreen(nbr) {
    number += nbr;

    if (digit == ".") {
        oldScreen = screen.innerHTML;
    }

    if (!numberTyped) {
        numberTyped = true;

        screen.innerHTML = nbr;
    } else {
        screen.innerHTML += nbr;
    }
}

/**
 * adds symbol to the screen and allows the user to switch between symbols before adding a new number to the screen
 * @param {*} txtSymbol the symbol as a text to be added visually on the screen
 * @param {*} eSymbol the actual meaning of the symbol that is used logically
 */
function equationSymbol(txtSymbol, eSymbol) {
    if (numberTyped) {
        if (eSymbol == "equal") {
            equationResult();
        } else {
            if (digit == ".") {
                screen.innerHTML = oldScreen; // if the "." was added with no follow-up number, it gets rid of the "."
            }

            // if a symbol hasn't yet been clicked after the last number...
            if (!symbolTyped) {
                equation.push(number);
                number = '';

                oldScreen = screen.innerHTML; // registers the screen.innerHTML before adding the symbol
        
                symbolTyped = true;
            }
        
            if (symbolTyped) {
                symbol = eSymbol;
                screen.innerHTML = oldScreen; // makes the screen.innerHTML be equal to what it was before symbols were added after the last number
                screen.innerHTML += txtSymbol; // adds symbol
            }
        }
    }
}

/**
 * calculates the final result of the equation
 */
function equationResult() {
    if (symbolTyped) {
        screen.innerHTML = oldScreen; // makes the screen.innerHTML be equal to what it was before symbols were added after the last number
    } else {
        equation.push(number);
    }

    // converts the entire array of numbers and equation's symbols into a string that javascript can convert and calculate its result
    let finalEquation = '';
    for (const value of equation) {
        finalEquation += value
    }

    // calculates the result of the string with "eval()" and displays it on the screen
    screen.innerHTML += "=" + eval(finalEquation)
}