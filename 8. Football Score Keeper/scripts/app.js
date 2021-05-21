const team1 = document.querySelector("#team1");
const team2 = document.querySelector("#team2");
const reset = document.querySelector("#reset");
const maxPointInput = document.querySelector("#maxP");
const team1Display = document.querySelector("#team1Display");
const team2Display = document.querySelector("#team2Display");

let t1Score = 0;
let t2Score = 0;
// maxScore will default to 10
let maxScore = parseInt(maxPointInput.value);

maxPointInput.addEventListener("input", (evt) => {
    maxScore = parseInt(evt.target.value);
});

team1.addEventListener("click", () => {
    team1Display.innerText = ++t1Score;

    // To check Winning status
    if(check(t1Score))
    {
        team1Display.classList.add("win");
        team2Display.classList.add("lose");
        disableButtons();
    }
});

team2.addEventListener("click", () => {
    team2Display.innerText = ++t2Score;

     // To check Winning status
    if(check(t2Score))
    {
        team2Display.classList.add("win");
        team1Display.classList.add("lose");
        disableButtons();
    }
});

reset.addEventListener("click", () => {
    t1Score = 0, t2Score = 0;
    team1Display.innerText = 0, team2Display.innerText = 0;
    enableButtons();
    team1Display.className = "";
    team2Display.className = "";
});


function check(score)
{   console.log(score, maxScore)
    return score === maxScore
}

function disableButtons(){
    team1.disabled = true;
    team2.disabled = true;
}

function enableButtons(){
    team1.disabled = false;
    team2.disabled = false;
}