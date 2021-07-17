const images = document.querySelectorAll(".slide-in");

// Debounce fn => this runs the slideIn waiting 20ms
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
};


window.addEventListener("scroll", debounce(slideIn));

function slideIn(e)
{
    images.forEach(img => {
        // Check if the image is in the page or not?

        // When to slide the image in?
        const slideInAt = window.scrollY + window.innerHeight - img.height / 2;

        // When to slide the image back out ?
        const slideOutAt = img.offsetTop + img.height;

        console.log(img.offsetTop, slideInAt);

        // Add or remove the "active" class
        const isHalfShown = slideInAt > img.offsetTop;
        const isNotScrolledPast = window.scrollY < slideOutAt;

        // The image should be slided in if half of the image is shown and the whole image is not scrolled past
        if(isHalfShown && isNotScrolledPast)
            img.classList.add("active");
        
        // If the image is scrolled Past || image half aint shown, remove the class(active)
        else 
            img.classList.remove("active");
    })
    console.log("****");
}