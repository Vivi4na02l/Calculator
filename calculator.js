let btnsNumber = document.querySelectorAll(".number");
let screen = document.querySelector("#screen");
let numberTyped = false;
let symbolTyped = false;
let oldScreen;

let number = '';
let symbol;
let numbers = [];
let equationSymbols = [];

/**
 * when any of the numbers' buttons are clicked...
 */
for (const btnNumber of btnsNumber) {
    btnNumber.addEventListener("click", () => {
        addOnScreen(btnNumber.innerHTML);

        if (symbolTyped) {
            symbolTyped = false;
            equationSymbols.push(symbol);
        }
    })
}

/**
 * adds number to the screen visually
 * @param {*} nbr the number of the button clicked
 */
function addOnScreen(nbr) {
    number += nbr;

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
 * @param {*} equation the actual meaning of the symbol that is used logically
 */
function equationSymbol(txtSymbol, equation) {
    if (numberTyped) {
        if (equation == "equal") {
            equationResult();
        } else {
            // if a symbol hasn't yet been clicked after the last number...
            if (!symbolTyped) {
                numbers.push(number);

                oldScreen = screen.innerHTML; // registers the screen.innerHTML before adding the symbol
        
                symbolTyped = true;
            }
        
            if (symbolTyped) {
                symbol = equation;
                screen.innerHTML = oldScreen; // makes the screen.inner be equal to what it was before symbols were added after the last number
                screen.innerHTML += txtSymbol; // adds symbol
            }
        }
    }
}

function equationResult() {
    
}