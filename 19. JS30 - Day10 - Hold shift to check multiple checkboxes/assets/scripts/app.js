const checkboxes = document.querySelectorAll("input[type='checkbox']");

checkboxes.forEach(cb => cb.addEventListener("click", selectMultiple));

function selectMultiple(e)
{
    console.log(e);
    if(e.shiftKey && this.checked) // Hold shift === true && checkbox is checked
    {
        
    }
}