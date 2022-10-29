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


document.querySelector(".toggle-button").addEventListener("click", animarbarras)

var barra1=document.querySelector(".bar1");
var barra2=document.querySelector(".bar2");
var barra3=document.querySelector(".bar3");

function animarbarras(){
    barra1.classList.toggle("activebar1");
    barra2.classList.toggle("activebar2");
    barra3.classList.toggle("activebar3");
}