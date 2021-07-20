const itemForm = document.querySelector("#itemContainer");
const plates = document.querySelector(".plates");
const items = JSON.parse(sessionStorage.getItem("itemsArr")) || [];

// Getting the items
itemForm.addEventListener("submit", e => {
    e.preventDefault();
    const value = itemForm.querySelector('input[name="item"]').value;
    
    const item = {
        text : value,
        done: false
    };
    items.push(item);
    // Resetting the inputs
    itemForm.reset();
    sessionStorage.setItem("itemsArr", JSON.stringify(items));
    populatePlates();
})

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
        console.log(listHTML);
        
        plates.innerHTML = listHTML;
    }
}

plates.addEventListener("click", crossItem);

function crossItem(e)
{
    if(e.target.nodeName === "INPUT" && e.target.checked)
    {
        // Update the "done" key of the items array of objects
        let cb_id = parseInt(e.target.dataset.id);
        items[cb_id].done = true;
        sessionStorage.setItem("itemsArr", JSON.stringify(items));
    }
}


populatePlates();