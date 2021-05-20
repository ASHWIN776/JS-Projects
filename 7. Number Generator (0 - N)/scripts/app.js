const form = document.querySelector("form");
const input = document.querySelector("input");
const btn = document.querySelector("button");
const numContainer = document.querySelector("#num");

form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    // To reset the container -- otherwise it'll append numbers to it
    numContainer.innerText = "";

    const maxNum = parseInt(form.elements.maxNum.value);

    if(maxNum > 1000) console.log("NOPE");
    else
        for(let i = 0; i < maxNum; ++i)
            createElement(i);
    
});

function createElement(num){
    let reqClass;
    
    if(isPrime(num))
        reqClass = "prime";
    
    else if(num % 2)
        reqClass = "odd";

    else reqClass = "even";

    const span = document.createElement("span");
    span.classList.add("numSpan", reqClass);
    span.innerText = num;
    numContainer.append(span);
}

function isPrime(num){
    if(num <= 1) return false;

    for(let i = 2; i <= num / 2; ++i)
        if(num % i == 0) return false;
    return true;
}

