let radios = [...document.querySelectorAll('.radio')]
let form = document.querySelector('.form')
const BASIC_WAY = 'https://api.chucknorris.io/jokes/'
let createSearchField = () =>{
    let searchDiv = document.querySelector('.search')
    if(search.checked){
        let searchField = document.createElement('input')
        searchField.type = 'text'
        searchField.placeholder = 'Free text search'
        searchField.className = 'search-area'
        searchDiv.append(searchField)
    }
}
let removeSearchField = () =>{
 let searchField = document.querySelector('.search-area')
 if(searchField){
    searchField.remove()
 }
}
let render = (data) =>{
    let jokes = document.getElementById('jokes')
    let heart = document.createElement('img')
    heart.className = 'heart'
    heart.src = 'assets/images/white-heart.png'
    let jokeContainer = document.createElement('div')
    jokeContainer.className = 'jokes-container'
    let jokeID = document.createElement('a')
    jokeID.className = 'joke-ID'
    jokeID.innerHTML = `ID: <a href ='#' class = "joke-link">${data.id} <img src="assets/images/link.png"></a>`
    let jokeText = document.createElement('div')
    jokeText.className = 'joke-text'
    jokeText.innerHTML = `${data.value}`
    jokeContainer.append(heart)
    jokeContainer.append(jokeID)
    jokeContainer.append(jokeText)
    jokes.append(jokeContainer)
}
let getData = (value) =>{
 fetch(`${BASIC_WAY}${value}`)
 .then(response => response.json())
 .then(data =>{
    if(data.result){
        if(data.result){
            data.result.forEach(res =>render(res))
        }
    }
    else{
        render(data)
    }
    })
}
let findTheJoke = (value) =>{
    switch(value){
        case 'random':
            getData('random')
            break
        case 'categories':
            {
                let categories = [...document.querySelectorAll('.category')]
                    let radioValue = '';
                        for(i = 0; i < categories.length; i++){
                             if(categories[i].checked){
                                radioValue = categories[i].value
                                }
                            }
                        if(radioValue ==='') {
                                alert('chose your category')
                            }
                getData(`random?category=${radioValue}`)
            }
            break
        case 'search':
            let searchField = document.querySelector('.search-area')
            getData(`search?query=${searchField.value}`)
    }
}

radios.forEach(radio => radio.addEventListener('change', () =>{
    console.log(radio.value)
    if(radio.value === 'search'){
        createSearchField()  
    }
    else{
        removeSearchField() 
    }
}))
form.addEventListener('submit', (event) =>{
    event.preventDefault()
    let radios = [...document.querySelectorAll('.radio')]
    let radioValue;
    for(i = 0; i < radios.length; i++){
        if(radios[i].checked){
            radioValue = radios[i].value
        }
    }
    findTheJoke(radioValue)
})