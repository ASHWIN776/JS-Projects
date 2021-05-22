const game_options = ["rock", "paper", "scissor"];

// Key beats value
const rules = {
  rock: "scissor",
  paper: "rock",
  scissor: "paper"
};

let playerScore = 0;
let computerScore = 0;
const gamesCount = parseInt(prompt("How many rounds?"));
console.log(game(gamesCount));

// All functions
function playRound(playerSelection, computerSelection) {
  if(playerSelection == computerSelection)
    return "TIE";

  // Checking who wins the round
  for(option in rules)
  {
    // User winning case
    if(playerSelection === option && computerSelection === rules[option])
    {
      playerScore++;
      return `Haha..You win!! ${playerSelection} beats ${computerSelection}`; 
    }
  }
  // Computer winning case
  computerScore++;
  return `Badluck, You lost!! ${computerSelection} beats ${playerSelection}`;
}
  
function computerPlay()
{
  // ~~ is faster than using Math.floor()
    let idx = ~~(Math.random() * 3);
    console.log(`Computer Selection : ${game_options[idx]}`);

    return game_options[idx];
}


function game(howMany)
{ 
  for(let i = 0; i < howMany; ++i)
  {
    const playerSelection = prompt("Rock Paper or Scissor?").toLowerCase();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
  return "Result: " + displayResult();
}

function displayResult()
{
  console.log(`User Points = ${playerScore}, Computer Points = ${computerScore}`);

  return playerScore < computerScore ? "Computer Wins the tournament" 
  : playerScore > computerScore ? "You win the tournament"
  : "Tournament Tied";
}
