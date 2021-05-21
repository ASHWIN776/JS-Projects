const team1 = document.querySelector("#team1");
const team2 = document.querySelector("#team2");
const reset = document.querySelector("#reset");
const maxPointInput = document.querySelector("#maxP");

let team1Score = document.querySelector("#team1Score");
let team2Score = document.querySelector("#team2Score");
// maxScore will default to 10
let maxScore = parseInt(maxPointInput.value);

maxPointInput.addEventListener("input", (evt) => {
    maxScore = parseInt(evt.target.value);
});

team1.addEventListener("click", () => {
    team1Score.innerText = parseInt(team1Score.innerText) + 1;
    check(parseInt(team1Score.innerText));

    // To check Winning status
    if(check(parseInt(team1Score.innerText)))
    {
        team1Score.classList.add("win");
        team2Score.classList.add("lose");
        disableButtons();
    }
});

team2.addEventListener("click", () => {
    team2Score.innerText = parseInt(team2Score.innerText) + 1;
    console.log(parseInt(team2Score.innerText));

     // To check Winning status
    if(check(parseInt(team2Score.innerText)))
    {
        team2Score.classList.add("win");
        team1Score.classList.add("lose");
        disableButtons();
    }
});

reset.addEventListener("click", () => {
    team1Score.innerText = 0, team2Score.innerText = 0;
    enableButtons();
    team1Score.className = "";
    team2Score.className = "";
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