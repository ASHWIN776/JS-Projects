const itemForm = document.querySelector("#itemContainer");
const plates = document.querySelector(".plates");
const items = JSON.parse(sessionStorage.getItem("itemsArr")) || [];

function addItems(e)
{
    e.preventDefault();
    const value = itemForm.querySelector('input[name="item"]').value;
    
    const item = {
        text : value,
        done: false
    };
    items.push(item);
    // Resetting the inputs
    itemForm.reset();
    updateStorage();
    populatePlates();

}

function populatePlates()
{
    if(items.length)
    {
        let listHTML = items.map((item, index) => 
        `<li>
        <input id="item-${index}" data-id="${index}" type="checkbox" ${item.done ? 'checked' : ''}> 
        <label for="item-${index}">${item.text}</label>
        </li>`)
        .join("");
        
        plates.innerHTML = listHTML;
    }
}

function crossItem(e)
{
    if(e.target.nodeName === "INPUT")
    {
        // Update the "done" key of the items array of objects
        let cb_id = parseInt(e.target.dataset.id);
        items[cb_id].done = !items[cb_id].done;
        updateStorage();
    }
}


function updateStorage()
{
    sessionStorage.setItem("itemsArr", JSON.stringify(items));
}

// Getting the items
itemForm.addEventListener("submit", addItems);

plates.addEventListener("click", crossItem);

populatePlates();