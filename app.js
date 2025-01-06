var paperButton = document.getElementById("paper");
var rockButton = document.getElementById("rock");
var scissorsButton = document.getElementById("scissors");

var playerChoiceDisplay = document.getElementById("image-area");
var computerChoiceDisplay = document.getElementById("image-area-one");
var playerScoreDisplay = document.getElementById("player");
var computerScoreDisplay = document.getElementById("computer");
var resultMessage = document.getElementById("won");

var computerChoice;
var playerChoice;
var playerScore = 0;
var computerScore = 0;

function generateComputerChoice() {
  var choiceNames = ["Rock", "Paper", "Scissors"];
  var choiceKeys = ["rock", "paper", "scissors"];
  var randomIndex = Math.floor(Math.random() * 3);
  computerChoiceDisplay.innerHTML = `<p class="insert-img">${choiceNames[randomIndex]}</p>`;
  computerChoice = choiceKeys[randomIndex];
}

paperButton.addEventListener("click", function () {
  handlePlayerChoice("paper");
});
rockButton.addEventListener("click", function () {
  handlePlayerChoice("rock");
});
scissorsButton.addEventListener("click", function () {
  handlePlayerChoice("scissors");
});

function handlePlayerChoice(choice) {
  playerChoice = choice;
  playerChoiceDisplay.innerHTML = `<p>${choice.charAt(0).toUpperCase() + choice.slice(1)}</p>`;
  generateComputerChoice();
  calculateScores();
  updateUI();
  checkGameWinner();
}

function calculateScores() {
  const winConditions = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };

  if (playerChoice === computerChoice) {
  } else if (winConditions[playerChoice] === computerChoice) {
    playerScore++;
  } else {
    computerScore++;
  }
}

function updateUI() {
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}

function checkGameWinner() {
  if (playerScore >= 5 || computerScore >= 5) {
    paperButton.disabled = true;
    rockButton.disabled = true;
    scissorsButton.disabled = true;

    if (playerScore > computerScore) {
      resultMessage.textContent = "Player (You) Won!!!";
    } else {
      resultMessage.textContent = "Computer Won!!!";
    }

    showReplayButton();
  }
}

function showReplayButton() {
  const replayButton = document.createElement("button");
  replayButton.textContent = "Play Again";
  replayButton.className = "replay-btn";
  replayButton.addEventListener("click", resetGame);
  document.body.appendChild(replayButton);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  resultMessage.textContent = "";
  playerChoiceDisplay.innerHTML = "";
  computerChoiceDisplay.innerHTML = "";
  paperButton.disabled = false;
  rockButton.disabled = false;
  scissorsButton.disabled = false;

  const replayButton = document.querySelector(".replay-btn");
  if (replayButton) replayButton.remove();
}
