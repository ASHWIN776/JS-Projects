const itemForm = document.querySelector("#itemContainer");
const plates = document.querySelector(".plates");
const items = JSON.parse(sessionStorage.getItem("itemsArr")) || [];
const deleteBtn = document.querySelector("#deleteBtn");
const checkBtn = document.querySelector("#checkAllBtn");
const uncheckBtn = document.querySelector("#uncheckAllBtn");

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
    else
        plates.innerHTML = "<li>Loading Tapas...</li>";
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
// Checking an item
plates.addEventListener("click", crossItem);

deleteBtn.addEventListener("click", e => 
{
    items.splice(0, items.length);
    updateStorage();
    populatePlates();
});

checkBtn.addEventListener("click", e => 
{       
    console.log(e);
    items.forEach(item => item.done = true);
    updateStorage();
    populatePlates();
});

uncheckBtn.addEventListener("click", e => 
{   
    console.log(e);
    items.forEach(item => item.done = false);
    updateStorage();
    populatePlates();
});

populatePlates();