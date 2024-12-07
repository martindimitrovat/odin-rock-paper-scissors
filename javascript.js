function getComputerChoice() {
    const computerChoice = Math.random();

    if (computerChoice < 1 / 3) {
        return "Rock"
    } else if (computerChoice < 2 / 3) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors?");
    
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();

    if (humanChoice === "Rock" || humanChoice === "Paper" || humanChoice === "Scissors") {
        return humanChoice;
    } else {
        return "invalid";
    }
}

function playGame() {
    
    let computerScore = 0;
    let humanScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "invalid") {
            return "Invalid input.";
        } else if (humanChoice === computerChoice) {
            return `It's a tie. You both chose ${humanChoice}.`;
        } else if ((humanChoice === "Rock" && computerChoice === "Scissors") || (humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Scissors" && computerChoice === "Paper")) {
            humanScore++;
            return `You win. ${humanChoice} beats ${computerChoice}.`;
        } else {
            computerScore++;
            return `You lose. ${computerChoice} beats ${humanChoice}.`;
        }
    }

    // Round 1
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    
    console.log("Round 1");
    console.log(playRound(humanSelection, computerSelection));

    // Round 2
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    console.log("Round 2");
    console.log(playRound(humanSelection, computerSelection));

    // Round 3
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    console.log("Round 3");
    console.log(playRound(humanSelection, computerSelection));

    // Round 4
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    console.log("Round 4");
    console.log(playRound(humanSelection, computerSelection));

    // Round 5
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    console.log("Round 5");
    console.log(playRound(humanSelection, computerSelection));

    if (humanScore > computerScore) {
        return console.log("You win the game.");
    } else {
        return console.log("You lose the game.");
    }
}

playGame();