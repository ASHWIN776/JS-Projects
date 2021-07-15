const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("button[data-skip]");
const ranges = player.querySelectorAll("input[type='range']");

function togglePlay(e)
{
    if(video.paused)
        video.play();

    else 
        video.pause();
}

toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);

// Updates Button
video.addEventListener("play", e => toggle.innerHTML = "❚ ❚");
video.addEventListener("pause", e => toggle.innerText = "►");