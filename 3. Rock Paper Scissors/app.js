const game_options = ["rock", "paper", "scissor"];

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection)
      return "TIE";

    if((playerSelection == "rock" && computerSelection == "scissor") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissor" && computerSelection == "paper"))
      return `Haha..You win!! ${playerSelection} beats ${computerSelection}`;
    return `Badluck, You lost!! ${computerSelection} beats ${playerSelection}`;
  }
  
function computerPlay()
{
    let idx = Math.floor(Math.random() * 3);
    return game_options[idx];
}

const playerSelection = prompt("Rock Paper or Scissor?");
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));