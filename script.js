// get computer choice
function getComputerChoice() {
    const randomNum = Math.random()
    if (randomNum < 1 / 3) {
        return 'rock';
    } else if (randomNum < 2 / 3) {
        return 'paper';
    }
    return 'scissors';
}

// get user's choice
function getUserChoice() {
    const choice = prompt('Enter your choice: rock, paper, or scissors');
    return choice.toLowerCase();
}






//play 5 rounds
function playGame() {
    //declare player score variables
    let humanScore = 0;
    let computerScore = 0;
    let tieScore = 0;
    //play a round
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        //handle a tie
        if (humanChoice === computerChoice) {
            console.log(`It's a tie! You both chose ${humanChoice}`);
            tieScore++;
            return;
            
        }

        if (
            (humanChoice === ' rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }

    for (let round = 1; round <= 5; round++) {
            const humanChoice = getUserChoice();
            const computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        }
        //announce final score
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}, Tie: ${tieScore}`);
    
}

 //calls function till 5 rounds
playGame();
