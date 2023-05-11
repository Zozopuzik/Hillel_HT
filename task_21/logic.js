import { getFromLocalStorage } from "./services.js";
import { redirect } from "./services.js";
import { addToLocalStorage } from "./services.js";
import { updateInApi } from "./services.js"
export let addToCart = () => {
    let productCart = document.querySelectorAll(`.product-cart`)
    productCart.forEach(el => {
        el.addEventListener('click', () =>{
            if(!getFromLocalStorage('loggedUser')){
                redirect('login.html')
            }
            else{
                if(el.parentNode.className === 'not-in-cart'){
                    el.parentNode.className = 'in-cart'
                    let addedProduct = {
                        id: el.parentNode.getAttribute('product-id'),
                        quantity: 1
                    }
                    
                    console.log(el.parentNode.getAttribute('product-id'))
                    let userInfo = getFromLocalStorage('loggedUser')
                    userInfo.shoppingCart.push(addedProduct)
                    console.log(userInfo.shoppingCart)
                    let cartCounter = document.querySelector('.cart-counter')
                    cartCounter.innerHTML = `${userInfo.shoppingCart.length}`
                    addToLocalStorage('loggedUser', userInfo)
                    updateInApi(userInfo.id, userInfo)
                    
                }
                else{
                    el.parentNode.className = 'not-in-cart'
                    console.log(el.parentNode.getAttribute('product-id'))
                    let userInfo = getFromLocalStorage('loggedUser')
                    for(let i = 0; i < userInfo.shoppingCart.length; i++){
                        if(userInfo.shoppingCart[i].id === el.parentNode.getAttribute('product-id')){
                            userInfo.shoppingCart.splice(i,1)
                        }
                    }
                    console.log(userInfo.shoppingCart)
                    let cartCounter = document.querySelector('.cart-counter')
                    cartCounter.innerHTML = `${userInfo.shoppingCart.length}`
                    addToLocalStorage('loggedUser', userInfo)
                    updateInApi(userInfo.id, userInfo)
                }
            }
        })
    })       
}

export let getTotalPrice = () =>{
    let prices = [...document.querySelectorAll('[div-type = "price"]')]
    let totalPrice = 0
    for(let i = 0; i < prices.length; i++){
        totalPrice+= +prices[i].innerHTML
    }
    let totalPriceDiv = document.querySelector('.total-price')
    totalPriceDiv.innerHTML = totalPrice
}
export let getQuantity =(id) => {
    let userData = getFromLocalStorage('loggedUser')
    for(let i = 0; i < userData.shoppingCart.length; i++){
        if(id === userData.shoppingCart[i].id){
            return userData.shoppingCart[i].quantity
        }
    }
}
export let changeQuantity = () =>{
    let inputs = [...document.querySelectorAll('.quantity-changer')]
    inputs.forEach(input =>{
        input.addEventListener('change', () =>{

            let id = input.getAttribute('quantity-id')
            console.log(id)

            let userData = getFromLocalStorage('loggedUser')
            for(let i = 0; i < userData.shoppingCart.length; i++){
                if(id === userData.shoppingCart[i].id){
                   userData.shoppingCart[i].quantity = +input.value
                }
            }
            addToLocalStorage('loggedUser', userData)
            updateInApi(userData.id, userData)
            
            let price = document.querySelector(`[price-id = "${id}"]`)
            price.innerHTML = `${+price.innerHTML * input.value}`
        })
    })
    getTotalPrice()
}

export let removeFromCart = () =>{
    let bins = [...document.querySelectorAll('.bin')]
    bins.forEach(bin =>{
        bin.addEventListener('click', () =>{
            let id = bin.getAttribute('bin-id')
            console.log(id)

            let userData = getFromLocalStorage('loggedUser')
            for(let i = 0; i < userData.shoppingCart.length; i++){
                if(id === userData.shoppingCart[i].id){
                   userData.shoppingCart.splice(i, 1)
                }
            }
            addToLocalStorage('loggedUser', userData)
            updateInApi(userData.id, userData)
            bin.parentNode.parentNode.remove()
        })
    })
}
export let completeOrder = () =>{
    let btn = document.querySelector('.complete-order')
    btn.addEventListener('click', () =>{
        let userData = getFromLocalStorage('loggedUser')
        userData.orders.push(userData.shoppingCart)
        userData.shoppingCart = []
        addToLocalStorage('loggedUser', userData)
        updateInApi(userData.id, userData)
        let cartTable = document.querySelector('.cart-table')
        cartTable.innerHTML = `
        <div class="table-header-row">
            <div class="big">Item Desscription</div>
            <div class="small">Price</div>
            <div class="small">Sale</div>
            <div class="big">Quantity</div>
            <div class="small">Total</div>
            <div class="small">Action</div>
        </div>`
    })
    
}
