import { getFromLocalStorage } from "./services.js";
import {addToCart} from "./logic.js"
import {getQuantity} from "./logic.js"
let findCatogories = (arr, data) => {
    data.forEach((element) => {
      if (!arr.includes(element.category)) {
        arr.push(element.category);
      }
    });
  };
export  let renderCategories = (data) => {
    let root = document.querySelector('.root')
    let categories = [];
    findCatogories(categories, data);
    categories.forEach(category =>{
        root.innerHTML += `
        <div class="category-wrapper">
            <div class="title">
            <h1>${category}</h1>
            </div>
                <div class="products-wrapper" category-name = "${category}"></div>

        </div>
        `
    })
  };
  let createProductLayOut = (status, product) =>{
    if(status === 'not-in-cart'){
      const categoryWrapper = document.querySelector(`[category-name="${product.category}"]`);
      categoryWrapper.innerHTML += `
      <div class="product-wrapper">
          <img src="images/products/${product.img}.png" alt="" class = "product-image">
          <div class="product-title"><h2>${product.title}</h2></div>
          <div class="price-row">
              <div class="product-old-price">${product.sale ? `${product.price}`: ''}</div>
              <div class="sale-percent">${product.sale ? `${product.salePercent}%`: ''}</div>
          </div>
          <div class="product-row">
              <div class="actual-price">${product.sale ? `${product.price *(100 - product.salePercent)/100}` : `${product.price}`}</div>
              <div class="not-in-cart" product-id = "${product.id}">
                  <img src="/images/shopping-cart.png" alt="" class="product-cart">
              </div>
          </div>
      </div>`
    }
    else{
      const categoryWrapper = document.querySelector(`[category-name="${product.category}"]`);
      categoryWrapper.innerHTML += `
      <div class="product-wrapper">
          <img src="images/products/${product.img}.png" alt="" class = "product-image">
          <div class="product-title"><h2>${product.title}</h2></div>
          <div class="price-row">
              <div class="product-old-price">${product.sale ? `${product.price}`: ''}</div>
              <div class="sale-percent">${product.sale ? `${product.salePercent}%`: ''}</div>
          </div>
          <div class="product-row">
              <div class="actual-price">${product.sale ? `${product.price *(100 - product.salePercent)/100}` : `${product.price}`}</div>
              <div class="in-cart" product-id = "${product.id}">
                  <img src="/images/shopping-cart.png" alt="" class="product-cart">
              </div>
          </div>
      </div>`

    }
    
  }

  export let renderProduct = (data) =>{
    if(!getFromLocalStorage('loggedUser')){
        data.forEach(product =>{
          createProductLayOut('not-in-cart', product)
        })
        addToCart()
    }else{
      let userData = getFromLocalStorage('loggedUser')
      let ids = []
      userData.shoppingCart.forEach(el =>{
        ids.push(el.id)
      })
            data.forEach(product =>{
        if(ids.includes(product.id)){
          createProductLayOut('in-cart', product)
        }
        else{
          createProductLayOut('not-in-cart', product)
        }
      
    })
    addToCart()
    }
    
  }


 export let renderShoppingCart = (el) =>{
  let cartTable = document.querySelector('.cart-table')
  cartTable.innerHTML += `
  <div class="table-row">
                <div class="big">
                <img src="images/products/${el.img}.png" alt="" class = "cart-product-img">
                <div class="product-name">${el.title}</div>
                </div>
                <div class="small">${el.price}</div>
                <div class="small">${el.salePercent ? `${el.salePercent}%` : 'no sale for this product'}</div>
                <div class="big"><input type = "number" value = "${getQuantity(el.id)}" min ="1" max = "10" class = "quantity-changer" quantity-id = "${el.id}"></input></div>
                <div class="small" div-type = "price" price-id = "${el.id}">${el.sale ? `${el.price * ((100 - el.salePercent)/100) * getQuantity(el.id)}` : el.price* getQuantity(el.id)}</div>
                <div class="small"><img src="images/delete.png" alt="" class ="bin" bin-id = "${el.id}"></div>
            </div>
  `
  }

  
 export let renderShoppingCartForProfile = (el) =>{
  let cartTable = document.querySelector('.cart-table')
  cartTable.innerHTML += `
  <div class="table-row">
                <div class="big">
                <img src="images/products/${el.img}.png" alt="" class = "cart-product-img">
                <div class="product-name">${el.title}</div>
                </div>
                <div class="small">${el.price}</div>
                <div class="small">${el.salePercent ? `${el.salePercent}%` : 'no sale for this product'}</div>
                <div class="big"><input type = "number" value = "${getQuantity(el.id)}" min ="1" max = "10" class = "quantity-changer" quantity-id = "${el.id}"></input></div>
                <div class="small" div-type = "price" price-id = "${el.id}">${el.sale ? `${el.price * ((100 - el.salePercent)/100) * getQuantity(el.id)}` : el.price* getQuantity(el.id)}</div>
                <div class="small"><img src="images/delete.png" alt="" class ="bin" bin-id = "${el.id}"></div>
            </div>
  `
  }

  export let addInfo = () =>{ 
    let userInfo = getFromLocalStorage('loggedUser')
    console.log(userInfo)
    let name = document.querySelector('.name')
    name.innerHTML = `${userInfo.name}`
    let email = document.querySelector('.email')
    email.innerHTML = `${userInfo.email}`
  }