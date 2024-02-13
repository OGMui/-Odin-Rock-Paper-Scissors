
// Return random 'Rock', 'Paper' or 'Scissors'

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


// Function to play single round of Rock, Paper Scissors
// Takes 2 parameters 'playerSelection' and 'computerSelection
// playerSelection must be case-insensitive
// playerSelection comes from prompt()
// returns a string that declares the winner or tie
let scoreComputer = 0;
let scorePlayer = 0;

const playerWin = "You Win!!!"
const PlayerLose = "You Loose!!!"
const PlayerTie = "You Tie!!!"

function playRound (playerSelection, computerSelection) {
    
    // Rules
    // Paper beats Rock
    // Rock beats Scissors
    // Scissors beats Paper

    if ((playerSelection === "rock" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "paper")) {

        return PlayerTie;
    }

    if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock") ) {
        
        scoreComputer += 1;
        return PlayerLose;
    }

    if ((playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "rock" && computerSelection === "scissors") ) {
        
        scorePlayer += 1;
        return playerWin;
    }


}

const playerSelection = prompt("Would you like to choose Rock, Paper, or Scissors?").toLowerCase();
console.log(playerSelection);
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

// Function called 'playGame()' which includes the previous functions
// Game will be played 5 times, can be in a loop or called 5 times


