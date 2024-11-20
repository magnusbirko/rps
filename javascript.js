const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
  for (let i = 1; i <= 5; i++) {
    playRound(i);
  }
  logWins();
}

function playRound(round) {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice() {
  let input = prompt("Rock, Paper or Scissors?");
  while (input === null) {
    input = prompt("Rock, Paper or Scissors?");
  }
  input = input.toLowerCase();
  let check = validateInput(input);

  while (check === false) {
    input = prompt("Rock, Paper or Scissors?, please spell correctly!");
    while (input === null) {
      input = prompt("Rock, Paper or Scissors?");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }

  return input;
}

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(input) {
  return choices.includes(input);
}

function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    alert("Draw, no points awarded");
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC === "scissors") ||
    (choiceP === "paper" && choiceC === "rock") ||
    (choiceP === "scissors" && choiceC === "paper")
  ) {
    alert("You win, 1 point awarded!");
    return "Player";
  } else {
    alert("Computer wins, 1 point awarded!");
    return "Computer";
  }
}

function logWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "Tie").length;

  console.log("Results:");
  console.log("Player wins:", playerWins);
  console.log("Computer wins:", computerWins);
  console.log("Ties:", ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
  console.log("Round: ", round);
  console.log("Player chose:", playerChoice);
  console.log("Computer chose:", computerChoice);
  if (winner === "Tie") {
    console.log("Round was a", winner);
  } else {
    console.log("Winner is:", winner);
  }
}

game();
