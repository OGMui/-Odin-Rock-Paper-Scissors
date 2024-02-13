
// Return random 'Rock', 'Paper' or 'Scissors'

function getComputerChoice (){

    let computerChoice = "";
    const randNum = Math.floor(Math.random() * 3) + 1;
    switch (randNum) {
        case 1:
            computerChoice = "Rock";
            break;
        case 2:
            computerChoice = "Paper";
            break;
        case 3:
            computerChoice = "Scissors"
            break; 
    }

    return computerChoice;
    
}

// Function to play single round of Rock, Paper Scissors
// Takes 2 parameters 'playerSelection' and 'computerSelection
// playerSelection must be case-insensitive
// playerSelection comes from prompt()
// returns a string that declares the winner or tie

// Function called 'playGame()' which includes the previous functions
// Game will be played 5 times, can be in a loop or called 5 times


