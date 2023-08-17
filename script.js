const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

let resultsHeading = document.querySelector("#resultsHeading");

let playerWins = 0;
let computerWins = 0;

rockBtn.addEventListener("click", () => {
    playRound(rockBtn.getAttribute("value"), getComputerChoice());
});

const btns = document.querySelectorAll(".decisionBtn");

btns.forEach(btn => btn.addEventListener("click", () => {
    playRound(btn.getAttribute("value"), getComputerChoice());
}));

function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);
    if (randNum == 0) {
        return "rock";
    } else if (randNum == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getUserChoice() {
    let choice = prompt("Rock, Paper or Scissors?")
    return choice;
}

function playRound(playerChoice, computerChoice) {
    let playerDecision = playerChoice.toLowerCase();
    console.log("test");

    if (playerChoice == computerChoice) {
        resultsHeading.textContent = "Draw";
    } else if (playerChoice == "rock") {
        if (computerChoice == "scissors") {
            playerWins++;
            resultsHeading.textContent = "Player Wins: Rock beats Scissors!";
        } else {
            computerWins++;
            resultsHeading.textContent = "Player Wins: Paper beats Rock!";
        }
    } else if (playerChoice == "paper") {
        if (computerChoice == "rock") {
            playerWins++;
            resultsHeading.textContent = "Player Wins: Paper beats Rock!";
        } else {
            computerWins++;
            resultsHeading.textContent = "Computer Wins: Scissors beats Paper!";
        }
    } else {
        if (computerChoice == "paper") {
            playerWins++;
            resultsHeading.textContent = "Player Wins: Scissors beats Paper!";
        } else {
            computerChoice++;
            resultsHeading.textContent = "Computer Wins: Rock beats Scissors";
        }
    }

    console.log(resultsHeading.textContent);
    
}

function game() {
    for (let i = 0; i < 5; i++) {

        playRound(getUserChoice(), getComputerChoice());
    }

    if (playerWins > computerWins) {
        resultsHeading.textContent = "Player Wins!";
    } else {
        resultsHeading.textContent = "Computer Wins!";
    }

    playerWins = 0;
    computerWins = 0;
}