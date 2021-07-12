const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";

let isDrawing = false;
let x = 0;
let y = 0;

canvas.addEventListener("mousedown", initiate);
canvas.addEventListener("mousemove", continueDrawing);
canvas.addEventListener("mouseup", stop);

function initiate(e)
{
    console.log(e);
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
}

function continueDrawing(e)
{
    if(isDrawing)
    {
        console.log(e);
        draw(e.offsetX, e.offsetY);
    }
}

function stop(e)
{
    isDrawing = false;
}


function draw(endX,endY)
{
    ctx.beginPath();
    ctx.moveTo(x, y);
    x = endX;
    y = endY;
    ctx.lineTo(endX, endY);
    // ctx.closePath();
    ctx.stroke();
}