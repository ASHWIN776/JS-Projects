let userRange = prompt("Enter the range ( Please separate the start and end value with a space) : ");

userRange = userRange.split(" ");
let rangeStart = parseInt(userRange[0]);
let rangeEnd = parseInt(userRange[1]);
let randNum = Math.floor(Math.random() * (rangeEnd - rangeStart)) + rangeStart;
let guessCount = 1;
let guess = prompt("Guess a number : ");

while(true)
{
    let status;
    if(guess === "q")
    {
        break;
    }

    guess = parseInt(guess);

    if(isNaN(guess))
    {
        status = "Not a number";
    }

    else
    {
        if(guess < rangeStart || guess > rangeEnd)
        {
            status = "Out of given range";
        }

        else if(guess === randNum)
        {
            status = `It took you ${guessCount} guesses`;
            alert(status);
            break;
        }

        else if(guess < randNum)
        {
            status = "Too Low";
        }

        else{
           status = "Too high";
        }
        guessCount++;
    }
    guess = prompt(`${status}, Try again`);
}