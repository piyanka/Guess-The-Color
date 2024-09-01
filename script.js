const colorCodeContainer = document.getElementById("color-code")
const optionContainer = document.getElementById("options-container")
const scoreContainer = document.getElementById("score")

let randomColor = null;
let score = 0;

function generateRadomNumberBetween(min, max) {
    return min + Math.floor((Math.random() * (max - min + 1)));
}

function incrementScore() {
    score += 1;
    scoreContainer.innerText = score;
}

function validateResult(el) {
    const selectedColor = el.target.style.backgroundColor;
    if (selectedColor == randomColor) {
        incrementScore();
    }
    else {
        score = 0;
    }
    window.localStorage.setItem("score", score);
    startGame();
}

function generateRandomColorRGB() {
    const red = generateRadomNumberBetween(0, 255);
    const green = generateRadomNumberBetween(0, 255);
    const blue = generateRadomNumberBetween(0, 255);

    return `rgb(${red}, ${green}, ${blue})`;
}


function startGame() {
    score = Number(window.localStorage.getItem("score")) ?? 0;
    scoreContainer.innerText = score;
    optionContainer.innerHTML = null;
    randomColor = generateRandomColorRGB();
    colorCodeContainer.innerText = randomColor;

    const ansIndex = generateRadomNumberBetween(0, 5);

    for (let i = 0; i < 6; i++) {
        const div = document.createElement('div');
        div.style.backgroundColor = generateRandomColorRGB();

        div.addEventListener('click', validateResult);

        if (i == ansIndex) {
            randomColor;
        }
        else {
            generateRandomColorRGB();
        }
        optionContainer.append(div)
    }
}


window.addEventListener("load", () => startGame())