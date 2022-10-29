const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbar = document.getElementsByClassName("navbar")[0]

toggleButton.addEventListener("click", () =>{
    navbar.classList.toggle("active")
})


const fullscreenBox = document.getElementById("fullscreenBox"), full = document.getElementById("full");

function Close(){
    fullscreenBox.style.display = "none";
}

function Open(reference){
    fullscreenBox.style.display = "flex";
    full.src = reference;
}