let btnsNumber = document.querySelectorAll(".number");
let screen = document.querySelector("#screen");
let numberTyped = false;

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