let email = ''
let password = ''
let tries = 0
let error = ''
let userDidMistakes = false

function containsUppercase(str) {
    return /[A-Z]/.test(str);
  }

//checker functions
// start end checking
let startEndChecker = (email) =>{
    if(email.startsWith === ' ' || email.startsWith.charCodeAt === 64 ||  email.endsWith === ' ' || email.endsWith.chartCodeAt === 64){
        error += 'It is "@" or space in the begining or in the end of your email \n'
        userDidMistakes = true 
    }
    else{
        console.log('it is ok with at and space')
    }
}
// @ symbol checking

let atSymbolChecker = (email) =>{
    let atSymbolCounter = 0
    for(i=0; i<email.length; i++){
        if(email.charCodeAt(i) === 64){
            atSymbolCounter++
        }
    }
    if(atSymbolCounter === 1){
        console.log('it is ok with @')
    }
    else if(atSymbolCounter === 0){
        error += 'You need to add @ symbol to your email \n'
        userDidMistakes = true 
    }
    else{
        error += 'You need to add only one @ symbol to your email \n'
        userDidMistakes = true 
    }
}

// length checking
let lengthChecker = (email) =>{
    if(email.length > 15){
        error += 'Your email should be less than 15 symbols \n'
        userDidMistakes = true 
    }
    else{
        console.log('it is ok with length')
    }
}
//dotCom checking
let dotComChecker = (email) =>{
    if(email.slice(-4) != '.com'){
        error += 'Your email should end on .com \n'
        userDidMistakes = true 
    }
    else{
        console.log('it is ok with .com')
    }
}

//password checking
//uppercase checker

let upperChecker = (password) =>{
     
    if(containsUppercase(password)){
        console.log('its ok with uppercase')
    }
    else{
        error +=('Your password should has uppercase letter \n ')
        userDidMistakes = true
    }
}

//password length checking 
let passwordlenghtCheker = (password) => {
    if (password.length <= 15 && password.length >= 4){
        console.log('its ok with length')
    }  
    else{
        error +=('Your password shouldn`t be between 4 and 15 symbols \n ')
        userDidMistakes = true

    }
}
//error checking

let errorChecker = (email, password) =>{
    if(userDidMistakes && tries != 3){
        alert(`You did mistakes: \n ${error} \n You have ${3 - tries} more ties `)
        

    }
    else if(userDidMistakes && tries === 3){
        alert(`Sorry, you don't have no more no tries`)
    }
    else{

       document.write(
        `<pre>
        Your account was succesfully registred
        email: ${email}
        password: ${password}
        </pre>`
       ) 
    }
}


let check = (email, password) =>{
    email = prompt('Enter your email')
    password = prompt('Enter your password')
    userDidMistakes = false
    console.clear()
    startEndChecker(email)
    atSymbolChecker(email)
    lengthChecker(email)
    dotComChecker(email)
    upperChecker(password)
    passwordlenghtCheker(password)
    errorChecker(email, password)
}

do{
        tries = tries + 1
        check(email, password)
    }while((userDidMistakes) && tries < 3 )