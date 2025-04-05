document.querySelector("body > header > nav > button").addEventListener("click", function(e) {
    e.target.classList.toggle("show-pictures");
    if (e.target.classList.contains("show-pictures")) {
        e.target.innerHTML = "Show Pictures";
        document.querySelectorAll(".pic").forEach(picture => {
            picture.style.display = "none";
        });
    }
    else {
        e.target.innerHTML = "Hide Pictures";
        document.querySelectorAll(".pic").forEach(picture => {
            picture.style.display = "block";
        });
    }
});
