const calculator = document.querySelector(".calc-main");

calculator.addEventListener("click", copyToScreen);

function copyToScreen(e)
{
    if(e.nodeName === "BUTTON" && e.className.includes("num"))
    {
        console.log("Number is selected");
    }
}