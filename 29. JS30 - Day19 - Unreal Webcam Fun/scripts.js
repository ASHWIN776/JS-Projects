const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");


async function getVideo()
{
    console.dir(navigator);
    const localMediaStream = await navigator.mediaDevices.getUserMedia({video: true, audio: false});
    // video.src wont work
    video.srcObject = localMediaStream;
    video.play();
}