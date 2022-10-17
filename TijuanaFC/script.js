const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbar = document.getElementsByClassName("navbar")[0]

toggleButton.addEventListener("click", () =>{
    navbar.classList.toggle("active")
})

const ctgria = document.getElementsByClassName("ctgria")[0]

ctgria.addEventListener("click", () => {

    ctgria.classList.toggle("active")
})
