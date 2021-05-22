const h1 = document.querySelector("h1");
const btn = document.querySelector("button");

// Added Eventlistener to the button
btn.addEventListener('click', displayColor);

// Call back to addEventListener
function displayColor(){
    let color = rgbColorGenerator();
    document.body.style.backgroundColor = color;
    h1.innerText = color;
    btn.innerText = "Change Color";
};

// Heart of the program
function rgbColorGenerator(){
    return `rgb(${~~(Math.random() * 256)},${~~(Math.random() * 256)},${~~(Math.random() * 256)})`
}
