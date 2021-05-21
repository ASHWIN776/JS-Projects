const team1Btn = document.querySelector("#team1");
const team2Btn = document.querySelector("#team2");
const resetBtn = document.querySelector("#reset");
const maxPointInput = document.querySelector("#maxP");
const team1Display = document.querySelector("#team1Display");
const team2Display = document.querySelector("#team2Display");

// Keeps track of team1 and team2 scores
let t1Score = 0;
let t2Score = 0;
// maxScore will default to 10
let maxScore = parseInt(maxPointInput.value);

// Event listener to the dropdown
maxPointInput.addEventListener("input", (evt) => {
    maxScore = parseInt(evt.target.value);
    reset();
});

team1.addEventListener("click", () => {
    team1Display.innerText = ++t1Score;

    // To check Winning status
    if(checkWinningStatus(t1Score))
    {
        team1Display.classList.add("win");
        team2Display.classList.add("lose");
        // Disable Buttons after a team wins
        disableButtons();
    }
});

team2.addEventListener("click", () => {
    team2Display.innerText = ++t2Score;

     // To check Winning status
    if(checkWinningStatus(t2Score))
    {
        team2Display.classList.add("win");
        team1Display.classList.add("lose");
        // Disable Buttons after a team wins
        disableButtons();
    }
});

resetBtn.addEventListener("click", reset);

function checkWinningStatus(score)
{  
    return score === maxScore
}

function disableButtons(){
    team1Btn.disabled = true;
    team2Btn.disabled = true;
}

function enableButtons(){
    team1Btn.disabled = false;
    team2Btn.disabled = false;
}

function reset(){
    // reset scores
    t1Score = 0, t2Score = 0;
    team1Display.innerText = 0, team2Display.innerText = 0;
 
    // Enable Buttons
    enableButtons();
 
    // Remove classes applied on scorecard
    team1Display.className = "";
    team2Display.className = "";
}