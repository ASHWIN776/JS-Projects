let todoList = [];
let run = true;

while(run)
{
    let choice = prompt("What would you like to do?");
    // When the user presses cancel, it returns null, and toLowerCase is not defined on null
    if(isNull(choice))  
    {
        alert('Enter "quit" if you want to quit the app');
        continue;
    }

    choice = choice.toLowerCase();
    let todo;

    switch(choice)
    {
        case "new" : todo = prompt("Enter new todo");
                    todoList.push(todo);
                    console.log(`${todo} added to the list`);
        break;
        
        case "list" : console.log("****************");
                    for(let i = 0; i < todoList.length; ++i)
                    {
                        console.log(`${i + 1}: ${todoList[i]}`);
                    }
                    console.log("****************");
        break;

        case "delete" : let deleteIdx = prompt("Enter the index of todo to delete");
                        todoList.splice(--deleteIdx, 1);
                        console.log("Todo Removed");
        break;

        case "quit" : run = false;
                      console.log("Quitting.... Have a nice day ahead");
        break;
        
        default : alert("Sorry, I didnt get you :(");
    }
}