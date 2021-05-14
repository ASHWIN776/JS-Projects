const game_options = ["rock", "paper", "scissor"];

// Key beats value
const rules = {
  rock: "scissor",
  paper: "rock",
  scissor: "paper"
};

const results = [0,0];
const gamesCount = parseInt(prompt("How many rounds?"));
console.log(game(gamesCount));

// All functions
function playRound(playerSelection, computerSelection) {
  if(playerSelection == computerSelection)
    return "TIE";

  for(option in rules)
  {
    if(playerSelection === option && computerSelection === rules[option])
    {
      results[0]++;
      return `Haha..You win!! ${playerSelection} beats ${computerSelection}`; 
    }
  }
  results[1]++;
  return `Badluck, You lost!! ${computerSelection} beats ${playerSelection}`;
}
  
function computerPlay()
{
    let idx = Math.floor(Math.random() * 3);
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
  console.log(`User Points = ${results[0]}, Computer Points = ${results[1]}`);

  return results[0] < results[1] ? "Computer Wins the tournament" 
  : results[0] > results[1] ? "You win the tournament"
  : "Tournament Tied";
}
