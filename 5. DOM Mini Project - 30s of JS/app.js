const allLis = document.querySelectorAll("li");
const h2 = document.querySelector("h2");
const clock = document.createElement("span");
const year = document.querySelector("#year");

// Styling Li's
for(let li of allLis)
{
    let content = li.innerText.split(" ");
    let reqClass = content[content.length - 1].toLowerCase();
    li.classList.add(reqClass);
}

// Styling 2020
setInterval( () => year.style.color = rgbColorGenerator(), 1000);
setInterval(showTime, 1000);

// So that the clock comes as soon as the page loads
showTime();

// Generates random rgb colors
function rgbColorGenerator()
{   
    return `rgb(${~~(Math.random() * 256)},${~~(Math.random() * 256)},${~~(Math.random() * 256)})`;
}

// Adding a Digital Clock
h2.after(clock)
clock.classList.add("clock");

function showTime()
{ 
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let time = new Date();
    
    let year = time.getFullYear();
    let month = months[time.getMonth()];
    let date = time.getDate();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    let currTime = `${month} ${date}, ${year} ${hour}:${min}:${sec}`;
    clock.innerText = currTime;
    clock.style.backgroundColor = rgbColorGenerator();
}

