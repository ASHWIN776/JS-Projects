const panels = document.querySelectorAll(".panel");

function togglePanel(){
    this.classList.toggle("open");
}

panels.forEach(panel => panel.addEventListener("click", togglePanel))