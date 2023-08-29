var playerScore = 0;
var compScore = 0;

//UI
var playerscoretext = document.querySelector('#playerscore');
var compscoretext = document.querySelector('#compscore');
var result = document.querySelector('#result');
var winner = document.querySelector('#winner');

const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');

// When a button is clicked, one round is played
rockBtn.addEventListener('click', () => game('rock'));
paperBtn.addEventListener('click', () => game('paper'));
scissorsBtn.addEventListener('click', () => game('scissors'));

// Showcases the winner and updates the scores for each round
function game(playerSelection) {
    computerSelection = getComputerChoice();
    gameResult = playRound(playerSelection, computerSelection);
    updateScores(gameResult);
    result.textContent = gameResult;
    if (playerScore == 5) {
        winner.textContent = "You Won!";
        winner.style.color = '#66ff00';
        disableButtons();
        return
    } else if (compScore == 5) {
        winner.textContent = 'You Lost!';
        winner.style.color = '#ff0000';
        disableButtons();
        return
    }
}

function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

// Randomly chooses computer's choice
function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "rock"
    } else if (computerChoice === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

// Updates the respective scores and displays it
function updateScores(gameResult) {
    if (gameResult[4] == "W") {
        playerScore++;
        playerscoretext.textContent = playerScore;
    } else if (gameResult[4] == "L") {
        compScore++;
        compscoretext.textContent = compScore;
    }
}

// Has the player has won or lost?
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        switch(computerSelection) {
            case "rock":
                return "Tied!"
            case "paper":
                return "You Lose! Paper beats Rock!"
            case "scissors":
                return "You Won! Rock beats Scissors!"
        }
    } else if (playerSelection == "scissors") {
        switch(computerSelection) {
            case "rock":
                return "You Lost! Rock beats Scissors!"
            case "paper":
                return "You Won! Scissors beats Paper!"
            case "scissors":
                return "Tied!"
        }
    } else if (playerSelection == "paper") {
        switch(computerSelection) {
            case "rock":
                return "You Won! Paper beats Rock!"
            case "paper":
                return "Tied!"
            case "scissors":
                return "You Lost! Scissors beats Paper!"
        }
    }
}

