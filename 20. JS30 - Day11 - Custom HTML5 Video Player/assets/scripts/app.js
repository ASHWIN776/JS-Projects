const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("button[data-skip]");
const ranges = player.querySelectorAll("input[type='range']");

let duration, videoWidth;

// Takes time for the video metadata loads
video.addEventListener("loadedmetadata", () => {
    duration = video.duration;
    videoWidth = video.clientWidth - parseInt(getComputedStyle(progressBar).borderRightWidth);

    console.log(duration, videoWidth);
    progress.addEventListener("click", playHere);
    setInterval(updateProgress, 1000);
})

function updateProgress()
{
    if(!video.paused)
    {
        pxInSec = 1 / (duration / videoWidth);
        widthNow = video.currentTime * pxInSec;
    
        progressBar.style.flexBasis = `${widthNow}px`;
    }
}

function playHere(e)
{
    console.log(e);
}

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
video.addEventListener("play", e => 
{
    console.log(e);
    toggle.innerHTML = "❚ ❚"
}
);
video.addEventListener("pause", e => toggle.innerText = "►");