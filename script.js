const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

let resultsHeading = document.querySelector("#resultsHeading");
let matchUpHeading = document.querySelector("#match-up-heading");

let playerImg = document.querySelector("#playerImg");
let computerImg = document.querySelector("#computerImg");

let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");

let playerWins = 0;
let computerWins = 0;

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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function playRound(playerChoice, computerChoice) {
    computerImg.removeAttribute("src");
    matchUpHeading.textContent = "";
    resultsHeading.textContent = "";
    playerImg.setAttribute("src", playerChoice + "Png.png");
    matchUpHeading.textContent = "vs";
    await sleep(1000);
    computerImg.setAttribute("src", computerChoice + "Png.png");
    await sleep(500);
    let playerDecision = playerChoice.toLowerCase();

    if (playerChoice == computerChoice) {
        resultsHeading.textContent = "Draw";
    } else if (playerChoice == "rock") {
        if (computerChoice == "scissors") {
            playerWins++;
            resultsHeading.textContent = "Player Wins: Rock beats Scissors!";
        } else {
            computerWins++;
            resultsHeading.textContent = "Computer Wins: Paper beats Rock!";
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
            computerWins++;
            resultsHeading.textContent = "Computer Wins: Rock beats Scissors";
        }
    }
    
    playerScore.textContent = "Player Score: " + playerWins;
    computerScore.textContent = "Computer Score: " + computerWins;

    if(playerWins == 5) {
        resultsHeading.textContent = "You won, select an option to start again";
        resetScore();
    } else if(computerWins == 5) {
        resultsHeading.textContent = "You lose, select an option to start again";
        resetScore();
    }
}

function resetScore() {
    playerWins = 0;
    computerWins = 0;
}