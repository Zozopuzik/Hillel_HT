import {removeFromCart} from "./logic.js"
import { changeQuantity } from "./logic.js"
import { completeOrder } from "./logic.js"
import { getFromLocalStorage } from "./services.js"
import { renderShoppingCart } from "./renders.js"
let root = document.querySelector('.root')
let userData = getFromLocalStorage('loggedUser')
console.log(userData)
userData.shoppingCart.forEach(el =>{
    fetch(`https://634e9f834af5fdff3a625f84.mockapi.io/products/${el.id}`)
    .then(response => response.json())
    .then(data => {
        renderShoppingCart(data)
        changeQuantity()
        removeFromCart()
        completeOrder()
    })
})
