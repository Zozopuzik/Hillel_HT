import { getFromLocalStorage } from "./services.js"

import { logOut } from "./services.js"
if(getFromLocalStorage('loggedUser')){
    let login = document.querySelector('.log-in')
    let cart = document.querySelector('.cart')
    let userCartlength = getFromLocalStorage('loggedUser').shoppingCart.length
    login.innerHTML = `Hi, <a href ="profile.html">${JSON.parse(localStorage.getItem('loggedUser')).name}</a>` 
    let cartCounter = document.querySelector('.cart-counter')
    cartCounter.innerHTML = `${userCartlength}`
    cart.innerHTML += `<a href = 'index.html' class = "log-out">log out</a>`
    let logOutBnt = document.querySelector('.log-out')
    logOutBnt.addEventListener('click', logOut)
}
   