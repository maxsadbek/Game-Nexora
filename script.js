let secretNumber = Math.trunc(Math.random() * 20 + 1)
let score = 20
let highScore = 0

let body = document.querySelector("body")
console.log(secretNumber);

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message
}

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    // message if
    if (!guess) {
        displayMessage("Plase enter a Number!")
    }
    else if (guess === secretNumber) {
        displayMessage("Correct Number!");
        body.style.backgroundColor = "a60b347"
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector(".number").style.width = "20rem"
    }

    else if (guess !== secretNumber) {
        if (score > 1) {
            score--
            document.querySelector(".score").textContent = score
        }
    }

    else if (guess <= 0) {
        displayMessage("Number must be > 0");
    }

})

