let humanScore = 0;
let computerScore = 0;
let tieScore = 0;

function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum < 1 / 3) return 'rock';
    else if (randomNum < 2 / 3) return 'paper';
    return 'scissors';
}

function playRound(humanChoice, computerChoice) {
    const resultDiv = document.getElementById('result');

    if (humanChoice === computerChoice) {
        resultDiv.textContent = `It's a tie! You both chose ${humanChoice}`;
        tieScore++;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    updateScore();
    checkWinner();
}

function updateScore() {
    document.getElementById('score').textContent =
        `Score - You: ${humanScore}, Computer: ${computerScore}, Ties: ${tieScore}`;
}

function checkWinner() {
    if (humanScore === 5 || computerScore === 5) {
        const resultDiv = document.getElementById('result');
        resultDiv.textContent += humanScore === 5 ? " 🎉 You won the game!" : " 😢 You lost the game.";
        document.querySelectorAll('.btn').forEach(btn => btn.disabled = true);
    }
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const humanChoice = button.getAttribute('data-choice');
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});
