const rounds = 5; //Plays 5 rounds
const choices = ["rock", "paper", "scissors"]; //valid choices
const results = []; //keeps track of score

function playGame() {
  while (results.length < rounds) {
    game();
  }
}

// Plays a round of the game
function game() {
  const player = userChoice();
  const computer = computerChoice();
  const result = compareChoices(player, computer);
  logRounds(player, computer, result);
}

function logRounds(player, computer, result) {
  console.log("player chooses:", choices[player]);
  console.log("computer chooses:", choices[computer]);
  console.log("result is", result);
}

//Asks user for choice
function userChoice() {
  const question = "Rock, Paper or Scissors?";
  let input = prompt(question);
  while (input === null || choices.includes(input.toLowerCase()) === false) {
    alert("Please input valid option");
    input = prompt(question);
  }
  input = input.toLowerCase();
  // console.log("Player chose", choices[choices.indexOf(input)]);
  return choices.indexOf(input);
}

function computerChoice() {
  let output = Math.floor(Math.random() * choices.length);
  // console.log("Computer chose", choices[output]);rock
  return output;
}
function compareChoices(player, computer) {
  if (player === computer) {
    results.push("Tie");
    return "a tie";
  } else if (
    (player === 0 && computer === 1) ||
    (player === 1 && computer === 2) ||
    (player === 2 && computer === 0)
  ) {
    results.push("computer");
    return "computer wins!";
  } else {
    results.push("player");
    return "player wins!";
  }
}

playGame();
