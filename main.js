const menuOpenButton = document.querySelector("#menu-open-button")
menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-modile-menu");
})


const menuClosenButton = document.querySelector("#menu-close-button") 
menuClosenButton.addEventListener("click", () => menuOpenButton.click() )