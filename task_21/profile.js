
import { getFromLocalStorage } from "./services.js"

import { removeFromApi } from "./services.js"
import { renderShoppingCartForProfile } from "./renders.js"
import { addInfo } from "./renders.js"

let userData = getFromLocalStorage('loggedUser')
console.log(userData)
userData.shoppingCart.forEach(el =>{
    fetch(`https://634e9f834af5fdff3a625f84.mockapi.io/products/${el.id}`)
    .then(response => response.json())
    .then(data => {
        renderShoppingCartForProfile(data)
        addInfo()
    })
})
let remove = document.querySelector('.delete-acc')
remove.addEventListener('click', removeFromApi(userData.id))