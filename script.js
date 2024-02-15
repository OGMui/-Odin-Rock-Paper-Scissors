const playerWin = "Congratulations you won this round!";
const playerLose = "Better luck next time, you lost this round.";
const playerTie = "This round was a tie.";

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

const resultsDiv = document.getElementById("results");
const computerScoreText = document.getElementById("computer-score");
const playerScoreText = document.getElementById("player-score");

const score = document.querySelectorAll(".score");

resultsDiv.innerText = "Are you ready to play?";


let scoreComputer = 0;
let scorePlayer = 0;


playerScoreText.innerText = scorePlayer;
computerScoreText.innerText = scoreComputer;

rockBtn.addEventListener("click", () => playGame("rock"));

paperBtn.addEventListener("click", () => playGame("paper"));

scissorsBtn.addEventListener("click", () => playGame("scissors"));


function getComputerChoice (){

    let computerChoice = "";
    const randNum = Math.floor(Math.random() * 3) + 1;
    switch (randNum) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors"
            break; 
    }

    return computerChoice;
    
}



function playRound (playerSelection, computerSelection) {
    
    // Rules
    // Paper beats Rock
    // Rock beats Scissors
    // Scissors beats Paper


    if ((playerSelection === "rock" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "paper")) {

        return playerTie;
    }

    if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock") ) {
        
        scoreComputer += 1;
        return (scoreComputer === 5) ? announceWinner("Sorry! Computer") :  playerLose;
    }

    if ((playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "rock" && computerSelection === "scissors") ) {
        
        scorePlayer += 1;
        return (scorePlayer === 5) ? announceWinner("Congratulations! Player") : playerWin;
}
}
function resetScore() {
    scoreComputer = 0;
    scorePlayer = 0;
    score.forEach(score => {
        score.style.display = "none";
    });
}

function announceWinner(message) {
    
    resetScore();
    return message + " has won the game!";

}

function updateScore() {
    if (scoreComputer > 0 || scorePlayer > 0){
        score.forEach(score => {
            score.style.display = "inherit";
            playerScoreText.innerText = scorePlayer;
            computerScoreText.innerText = scoreComputer;
        });

    }
}





function playGame(playerSelection) {

    console.log(playerSelection);
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    
    resultsDiv.innerText = playRound(playerSelection, computerSelection);
    console.log(scoreComputer, scorePlayer);

    updateScore();
   
   
    
}


