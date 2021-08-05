const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

getVideo();


video.addEventListener("canplay", paintToConvas);




async function getVideo()
{
    console.dir(navigator);
    try{
        const localMediaStream = await navigator.mediaDevices.getUserMedia({video: true, audio: false});
        video.srcObject = localMediaStream;
        video.play();
    }
    catch(e)
    {
        console.log("OH NO,", e);
    }
}

function paintToConvas(e)
{
    console.log(e);
    const width = video.videoWidth;
    const height = video.videoHeight;

    // Canvas should have the same dimensions of the video
    canvas.width = width;
    canvas.height = height;

    // this return which help us to clear the interval
    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
    }, 16)
}


function takePhoto()
{
    // Run the audio when taking a photo
    snap.currenTime = 0;
    snap.play();


    // take the data out of the canvas
    const data = canvas.toDataURL("image/jpeg"); 
    console.log(data);  // logs a text based representation of the image


    const link = document.createElement("a");
    link.href = data;
    link.innerText = "Download Image";
    link.setAttribute("download", "myPic");
    link.innerHTML = `<img src ='${data}'>`
    strip.insertBefore(link, strip.firstChild);
}