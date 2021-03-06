const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 1;

let isDrawing = false;
let x = 0;
let y = 0;
let hue = 0;
let direction = true;

canvas.addEventListener("mousedown", initiate);
canvas.addEventListener("mousemove", continueDrawing);
canvas.addEventListener("mouseup", () => {
    isDrawing = false;
}
);
// canvas.addEventListener("mouseout", () => isDrawing = false);

function initiate(e)
{
    console.log(e);
    [x,y] = [e.offsetX,e.offsetY];
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

function draw(endX,endY)
{
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    console.log(x,y,endX,endY);
    ctx.beginPath();
    ctx.moveTo(x, y);
    [x, y] = [endX, endY];
    ctx.lineTo(endX, endY);
    ctx.stroke();
    hue++;
    // resseting, but aint reqd
    if(hue >= 360) hue = 0;

    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1)
    {
        direction = !direction;
    }

    if(direction)
        ctx.lineWidth++;
    else 
        ctx.lineWidth--;
}