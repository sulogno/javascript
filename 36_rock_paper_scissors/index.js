const choices = ["rock", "paper", "scissors"];

const playerdisplay = document.getElementById("player");
const computerdisplay = document.getElementById("computer");
const resultdisplay = document.getElementById("result");
const playerscoredisplay = document.getElementById("playerscoredisplay")
const computerscoredisplay = document.getElementById("computerscoredisplay")
let playerscore = 0;
let computerscore = 0;

function playgame(playerchoice) {
    const computerchoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerchoice === computerchoice) {
        result = "It's a Tie";
    } else {
        switch (playerchoice) {
            case "rock":
                result = (computerchoice === "scissors") ? "You Win" : "You Lost";
                break;
            case "paper":
                result = (computerchoice === "rock") ? "You Win" : "You Lost";
                break;
            case "scissors":
                result = (computerchoice === "paper") ? "You Win" : "You Lost";
                break;
        }
    }

    playerdisplay.textContent = `Player Choice: ${playerchoice}`;
    computerdisplay.textContent = `Computer Choice: ${computerchoice}`;
    resultdisplay.textContent = result;

    resultdisplay.classList.remove("greentext", "redtext"); // Clear previous result color

    switch (result) {
        case "You Win":
            resultdisplay.classList.add("greentext");
            playerscore++;
            playerscoredisplay.textContent = playerscore;
            pla
            break;
        case "You Lost":
            computerscore++
            computerscoredisplay.textContent = computerscore;
            resultdisplay.classList.add("redtext");
            break;
        case "It's a Tie":
            resultdisplay.classList.add("purpletext");
            break;    
    }
}
