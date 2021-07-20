const itemForm = document.querySelector("#itemContainer");
const plates = document.querySelector(".plates");
const items = [];

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
    populatePlates();
})

function populatePlates()
{
    if(items.length)
    {
        let listHTML = items.map((item, index) => 
        `<li>
            <input id="item-${index}" type="checkbox" ${item.done ? 'checked' : ''}> 
            <label for="item-${index}">${item.text}</label>
        </li>`)
        .join("");
        console.log(listHTML);

        plates.innerHTML = listHTML;
    }
}
