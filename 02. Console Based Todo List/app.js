let todoList = [];
let run = true;

setTimeout(game, 1000);

function game(){
    while(run)
    {
        let choice =  prompt("What would you like to do?");
    
        // When the user presses cancel, it returns null, and toLowerCase is not defined on null
        if(choice === null)  
        {
            alert('Enter "quit" if you want to quit the app');
            continue;
        }
    
        // console.log(choice);
        choice = choice.toLowerCase();
    
    
        switch(choice)
        {
            case "new" : let todo;
                        // handling null returned from prompt
                        while(!(todo = prompt("Enter new todo")));
                        todoList.push(todo);
                        console.log(`${todo} added to the list`);
            break;
            
            case "list" : if(todoList.length === 0)
                        {
                            console.log("There are currently no pending tasks in the list");
                            break;
                        }
                        
                        console.log("****************");
                        for(let i = 0; i < todoList.length; ++i)
                        {
                            console.log(`${i + 1}: ${todoList[i]}`);
                        }
                        console.log("****************");
            break;
    
            case "delete" : if(todoList.length == 0)
                            {
                                console.log("There are currently no pending tasks in the list");
                                break;
                            }
                            let deleteIdx;
    
                            // To handle the null returned from the prompt 
                            while(!(deleteIdx = prompt("Enter the index of todo to delete")));
                            
                            // Ensuring deleteIdx is a valid Number
                            if(!(deleteIdx >= 1 && deleteIdx <= todoList.length))
                            {
                                alert("Cant delete");
                                break;
                            }
    
                            // to check if the todo is actually deleted
                            todoList.splice(--deleteIdx, 1);
                            console.log("Todo Removed");
            break;
    
            case "quit" : run = false;
                          console.log("Quitting.... Have a nice day ahead");
            break;
            
            default : alert("Sorry, I didnt get you :(");
        }
    }
}