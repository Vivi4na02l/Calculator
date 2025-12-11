let btnsNumber = document.querySelectorAll(".number");
let screen = document.querySelector("#screen");
let numberTyped = false;
let symbolTyped = false;
let oldScreen;

let numbers = [];
let equationSymbols = [];

for (const btnNumber of btnsNumber) {
    btnNumber.addEventListener("click", () => {
        addOnScreen(btnNumber.innerHTML);
    })
}

function addOnScreen(number) {
    if (!numberTyped) {
        numberTyped = true;

        screen.innerHTML = number;
    } else {
        screen.innerHTML += number;
    }
}

/**
 * adds symbol to the screen and allows the user to switch between symbols before adding a new number to the screen
 * @param {txtSymbol} txtSymbol the symbol as a text to be added visually on the screen
 * @param {*} equation the actual meaning of the symbol that is used logically
 */
function equationSymbol(txtSymbol, equation) {
    if (equation == "equal") {
        equationResult();
    } else {
        // if a symbol hasn't yet been clicked after the last number...
        if (!symbolTyped) {
            oldScreen = screen.innerHTML; // registers the screen.innerHTML before adding the symbol
    
            symbolTyped = true;
        }
    
        if (symbolTyped) {
            screen.innerHTML = oldScreen; // makes the screen.inner be equal to what it was before symbols were added after the last number
            screen.innerHTML += txtSymbol; // adds symbol
        }
    }
}

function equationResult() {
    
}