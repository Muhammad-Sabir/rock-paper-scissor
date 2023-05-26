const choices = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
	let randomIndex = Math.floor(Math.random() * 3);
	return choices[randomIndex];
}

function getPlayerChoice() {
	let playerSelection;

	do {
		playerSelection = prompt('Select one from Rock, Paper, or Scissors.');
		playerSelection = playerSelection.toLowerCase();
	} while (!choices.includes(playerSelection));

	return playerSelection;
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection == computerSelection) return `It's a draw!`;
	else if (
		(playerSelection == 'rock' && computerSelection == 'scissors') ||
		(playerSelection == 'paper' && computerSelection == 'rock') ||
		(playerSelection == 'scissors' && computerSelection == 'paper')
	) {
		playerScore++;
		return `You win! Your ${playerSelection} beats computer's ${computerSelection}.`;
	} else {
		computerScore++;
		return `You lose! Computer's ${computerSelection} beats your ${playerSelection}.`;
	}
}

function getWinner() {
	if (playerScore == computerScore) return `Series Draw!`;
	else if (playerScore > computerScore) return `Player wins the series!`;
	else return `Computer wins the series!`;
}

function game() {
	for (let i = 0; i < 5; i++) {
		let playerSelection = getPlayerChoice();
		let computerSelection = getComputerChoice();

		console.log(playRound(playerSelection, computerSelection));
		console.log(`Computer: ${computerScore} || You: ${playerScore}`);
	}

	console.log(getWinner());
}

game();
