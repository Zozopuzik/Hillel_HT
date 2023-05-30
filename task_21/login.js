import {checkUser} from '/services.js'
import {logIn} from '/services.js'
import { addToLocalStorage } from './services.js'
import { updateInApi } from './services.js'
let singInForm = document.querySelector('.sing-in')
singInForm.addEventListener('submit', (event)=>{
    let userData = {
        email: singInForm.querySelector('#singin-email').value,
        password: singInForm.querySelector('#singin-password').value
    }
    event.preventDefault()
    checkUser(userData, 'https://634e9f834af5fdff3a625f84.mockapi.io/users')
   
    singInForm.querySelector('#singin-email').value = ''
    singInForm.querySelector('#singin-password').value = ''

})
let logInForm = document.querySelector('.log-in-form')

logInForm.addEventListener('submit', (event)=>{
    event.preventDefault()
    logIn()
    form.querySelector("#username").value = '';
    form.querySelector("#email").value = '';
    form.querySelector("#password").value= '';
    form.querySelector("#confirm-password").value = '';
})