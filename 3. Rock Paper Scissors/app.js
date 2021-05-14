const game_options = ["rock", "paper", "scissor"];

// Key beats value
const rules = {
  rock: "scissor",
  paper: "rock",
  scissor: "paper"
};

function playRound(playerSelection, computerSelection) {
  if(playerSelection == computerSelection)
    return "TIE";

  for(option in rules)
  {
    if(playerSelection === option && computerSelection === rules[option])
      return `Haha..You win!! ${playerSelection} beats ${computerSelection}`; 
  }

  return `Badluck, You lost!! ${computerSelection} beats ${playerSelection}`;
}
  
function computerPlay()
{
    let idx = Math.floor(Math.random() * 3);
    console.log(`Computer Selection : ${game_options[idx]}`);

    return game_options[idx];
}

const playerSelection = prompt("Rock Paper or Scissor?").toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));