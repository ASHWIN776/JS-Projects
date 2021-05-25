const panels = document.querySelectorAll(".panel");

// Adds class "open" to the panel which is clicked
function togglePanel(){
    this.classList.toggle("open");
}

function toggleText(evt){
    console.log(evt.propertyName)
    // If I dont do this, then It will toggle the class infinitely
    if(evt.propertyName === "flex-grow")
    {
        this.classList.toggle("active")
    }
}


// Adding Eventlistener on each panel
panels.forEach(panel => {
    panel.addEventListener("click", togglePanel);

    // After the flex-grow transition ends, we gotta show the content
    panel.addEventListener("transitionend", toggleText)
})