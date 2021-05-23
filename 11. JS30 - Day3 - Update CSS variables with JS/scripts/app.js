const inputs = document.querySelectorAll("input");

// Selecting my root element
/*
    1. // const root = document.querySelector(":root");
    2. // const root = document.documentElement; -- PREFERRED
*/ 
const root = document.documentElement;

inputs.forEach(input => {
    input.addEventListener("input", handleVariables);
})


function handleVariables(){
    // Getting the value in units(px or rems or blah) or '' for my color
    const unit = this.dataset.unit || '';

    // Selecting my css variables and updating it
    root.style.setProperty(`--${this.name}`, `${this.value}${unit}`);
}