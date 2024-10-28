let computerScore = 0;
let humanScore = 0;

function computerChoice() {
  randNumb = Math.floor(Math.random() * 3);
  return randNumb;
}

function userInput() {
  let input = prompt("Rock, Paper or Scissor!").toLowerCase();
  if (input === "rock") {
    return 0;
  } else if (input === "paper") {
    return 1;
  } else if (input === "scissor") {
    return 2;
  } else userInput();
}

function playRound() {
  if (Number(userInput()) === computerChoice()) {
    alert("You won a point!");
    humanScore++;
  } else {
    alert("Computer wins a point!");
    computerScore++;
  }
  console.log("Your score is : ", humanScore);
  console.log("Computers score is : ", computerScore);
  if (humanScore === 10) {
    alert("You win!");
  } else if (computerScore === 10) {
    alert("Computer wins!");
  } else playRound();
}
playRound();
