const allKeys = document.querySelectorAll(".key");


window.addEventListener('keydown', (evt) => {
    for(let key of allKeys)
    {
        if(parseInt(key.dataset.key) === evt.keyCode)
        {
            key.classList.add("playing");
        }
    }
});

window.addEventListener('keyup', (evt) => {
    for(let key of allKeys)
    {
        if(parseInt(key.dataset.key) === evt.keyCode)
        {
            key.classList.remove("playing");
        }
    }
});
