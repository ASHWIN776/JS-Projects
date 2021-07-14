const checkboxes = document.querySelectorAll("input[type='checkbox']");

checkboxes.forEach(cb => cb.addEventListener("click", selectMultiple));
let lastChecked;

function selectMultiple(e)
{
    let isBetween = false;
    console.log(e);
    if(e.shiftKey && this.checked && lastChecked) // Hold shift === true && checkbox is checked
    {
        let i = 0;
        checkboxes.forEach(cb => {
            if(cb === this || cb === lastChecked)
                isBetween = !isBetween;

            if(isBetween)
                cb.checked = true;
        });
    }
    // Last checked will be the checkbox which is checked simply
    if(this.checked)
    lastChecked = this;
    else lastChecked = undefined; // checking and unchecking one box and holding shift to select another should only select the latter
}