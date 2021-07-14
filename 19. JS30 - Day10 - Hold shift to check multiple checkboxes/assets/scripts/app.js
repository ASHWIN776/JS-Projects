const checkboxes = document.querySelectorAll("input[type='checkbox']");

checkboxes.forEach(cb => cb.addEventListener("click", selectMultiple));
let lastChecked;

function selectMultiple(e)
{
    let isBetween = false;
    console.log(e);
    if(e.shiftKey && this.checked) // Hold shift === true && checkbox is checked
    {
        console.log("Hold shift : YES");
        let i = 0;
        checkboxes.forEach(cb => {
            if(cb === this || cb === lastChecked)
                isBetween = !isBetween;

            if(isBetween)
                cb.checked = true;

            console.log(i++, `isBetween = ${isBetween}`);
        });
        // checkboxes.forEach(cb => console.log(cb.checked));
    }
    // Last checked will be the checkbox which is checked simply
    lastChecked = this;
}