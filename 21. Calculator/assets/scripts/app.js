console.log("Connected");

const calculator = document.querySelector(".calc-main");
const screen = document.querySelector(".calc-screen");

calculator.addEventListener("click", calculate);
let op1, operator, op2, ans;

function calculate(e)
{
    if(e.target.nodeName === "BUTTON")
    {
        // Copy to screen if num
        if(e.target.className.includes("num"))
        {
            // Comes here if number is selected
            if(screen.innerText === "0")
                screen.innerText = e.target.dataset.number;
            else 
                screen.innerText += e.target.dataset.number;
        }

        // If operator, find the operand1 and asssign opertor
        if(e.target.className.includes("operation"))
        {   
            if(ans)
                op1 = ans;
            else
                op1 = parseInt(screen.innerText);
            operator = e.target.dataset.op;
            console.log(`Op1 = ${op1}, operator = ${operator}`);
            screen.innerText = 0;
        }
        
        // Find the operand2 and calculate
        if(e.target.className.includes("equals"))
        {
            op2 = parseInt(screen.innerText);
            console.log(`op2 = ${op2}`);
            switch(operator)
            {
                case "multiply":  ans = op1 * op2;
                break;

                case "divide": 
                    if(op2 === 0)
                        ans = "You Broke Me:(";
                    else 
                        ans = op1 / op2;
                break;

                case "plus": ans = op1 + op2;
                break;

                case "minus": ans = op1 - op2;
                break;

                default: ans = "Select an operator";
            }
            // if decimal, show max 5 places
            if(typeof ans === "number" && ans % 1 !== 0)
                ans = ans.toFixed(5);
            
            // Showing the answer in the screen
            screen.innerText = ans;
        }

        // If C is clicked, reset the screen
        if(e.target.className.includes("reset"))
        {
            screen.innerText = 0;
            op1 = op2 = operator = ans = undefined;
        }

        // Deletes last digit, using <---
        if(e.target.className.includes("delete"))
        {
            if(screen.innerText !== "0")
                screen.innerText = screen.innerText.slice(0, -1);
            
            // by deleting all digits, screen becomes blank
            if(screen.innerText === "")
                screen.innerText = 0;
            
        }
    }
}

