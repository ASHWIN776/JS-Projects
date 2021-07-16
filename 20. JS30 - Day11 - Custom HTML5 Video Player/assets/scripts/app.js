const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("button[data-skip]");
const ranges = player.querySelectorAll("input[type='range']");

let duration, videoWidth, pxInSec;



function adjust(e)
{
    console.log(e);
    
    if(e.target.name === "volume")
    video.volume = e.target.value;
    
    else 
    video.playbackRate = e.target.value;
}

function calcWidthOfProgress()
{
    if(!video.paused)
    {
        const widthNow = video.currentTime * pxInSec; // the width in pixels that the progressBar should have at a specific video.currentTime
        updateProgress(widthNow);
    }
}

function updateProgress(width)
{
    progressBar.style.flexBasis = `${width}px`;
}

function playHere(e)
{
    // This will give the mouse coordinates relative to the element, as theres no padding
    const mouseCoordX = e.offsetX;
    // This will give the video.currentTime at this width
    const timeNow = mouseCoordX / pxInSec;
    updateProgress(mouseCoordX);
    video.currentTime = timeNow;
}

function togglePlay(e)
{
    if(video.paused)
    video.play();
    
    else 
    video.pause();
}



/*
************
All Event Listeners here
************
*/
// Updates Button
video.addEventListener("play", e => 
{
    console.log(e);
    toggle.innerHTML = "❚ ❚"
}
);
video.addEventListener("pause", e => toggle.innerText = "►");

toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);

// To adjust volume or playbackRates
ranges.forEach(range => range.addEventListener("input", adjust));

// Takes time for the video metadata loads
video.addEventListener("loadedmetadata", () => {
    duration = video.duration;
    videoWidth = video.clientWidth - parseInt(getComputedStyle(progressBar).borderRightWidth);
    pxInSec = 1 / (duration / videoWidth); // Pixels to move in 1s

    console.log(duration, videoWidth);
    progress.addEventListener("click", playHere);

    // Updates the progressBar in intervals of 1s
    setInterval(calcWidthOfProgress, 1000);

    // Skip
    skipButtons.forEach(button => {
        button.addEventListener("click", () => {
            const skipSec = parseInt(button.dataset.skip);
            video.currentTime += skipSec;
            progressWidth = video.currentTime * pxInSec;
            updateProgress(progressWidth);
        })
    })
})
