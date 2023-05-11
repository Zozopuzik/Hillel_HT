
import {renderCategories} from '/renders.js'
import{renderProduct} from '/renders.js'

fetch("https://634e9f834af5fdff3a625f84.mockapi.io/products")
  .then((resonse) => resonse.json())
  .then((data) => {
    const myData = data;
    renderCategories(myData);
    renderProduct(myData)
  });