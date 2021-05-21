
// Adding eventListener for keydown event
window.addEventListener('keydown', (evt) => {
    const key = document.querySelector(`.key[data-key="${evt.keyCode}"]`) 
    const audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`)
    
    if(!audio)  return;

    audio.currentTime = 0 // to rewind to the start
    audio.play(); // play the audio
    key.classList.add("playing"); // add the playing class
});


const allKeys = document.querySelectorAll(".key");

// To remove the playing class after the transition(of transform) gets over
for(let key of allKeys)
{
    key.addEventListener('transitionend', (evt) => {
        // We gotta look only for transition for transforms
        if(evt.propertyName !== "transform") return;
        // Remove the playing class
        key.classList.remove("playing");
    });
}