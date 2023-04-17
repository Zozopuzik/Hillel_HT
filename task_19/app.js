let form = document.querySelector('.add-a-hero-form')
let addToApi = (hero) =>{
    let nameInputs = [...document.querySelectorAll('.name-input')]
    let isAvalible = true
    for(i = 0; i < nameInputs.length; i++){
        if(hero["name"] === nameInputs[i].getAttribute('placeholder')){
            alert('such hero already exists')
            isAvalible = false
        }
    }
    if(hero["name"] != '' && hero["comics"] != '' &&  isAvalible === true){
        fetch('https://63693f7228cd16bba71904e4.mockapi.io/heroes', {
            method: 'POST',
            headers: {
                "content-type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(hero)
        })
        .then(response => response.json())
        .then(data => render(data))
    }
    
}
let removeFromApi = (id) =>{
    fetch(`https://63693f7228cd16bba71904e4.mockapi.io/heroes/${id}`,{
        method: 'DELETE'
    })
}
let updateInApi = (id, updatedData) =>{
    fetch(` https://63693f7228cd16bba71904e4.mockapi.io/heroes/${id}`,{
        method: 'PUT',
        headers: {
            "content-type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(updatedData)
    })
    .then(response => response.json())
    .then(data => render(data))
}
let renderFromApi = (link, value) =>{
    fetch(link)
    .then(response => response.json())
    .then(data => {
        if(value === 0){
            for(i = 1; i < data.length; i++){
                render(data[i])
            }
        }
    })
}
let clearForm = () =>{
    form.querySelector('#name').value = ''
    form.querySelector('#comics').value = ''
    form.querySelector('#favourite').checked = false
}
let addAHero = () =>{
    let form = document.querySelector('.add-a-hero-form')
   
    let hero = {
        "name": '',
        "comics": '',
        "favourite": form.querySelector('#favourite').checked
    }
    form.querySelector('#name').value === '' ? alert('choose your hero name') : hero["name"] = form.querySelector('#name').value
    form.querySelector('#comics').value === '' ? alert('choose your hero universe') : hero["comics"] = form.querySelector('#comics').value
    if(hero["name"] === '' || hero["comics"] === ''){
        console.log(0)
    }
    else{
        return hero
    }
}
let render = (hero) =>{
    //name
    let heroesFromApi = document.querySelector('.heroes-from-api')
    const form = document.createElement('form');
    form.setAttribute('heroId', hero["id"])
    form.className = 'hero-from-api'
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');
    nameInput.setAttribute('placeholder', hero["name"]);
    nameInput.className = 'name-input'
    nameLabel.appendChild(nameInput);
    form.appendChild(nameLabel);
    //comics
    const row = document.createElement('div')
    const comicsLabel = document.createElement('label');
    comicsLabel.textContent = 'Comics:';
    comicsLabel.className = 'comics-select-label'
    const comicsSelect = document.createElement('select');
    comicsSelect.setAttribute('name', 'comics');
    comicsSelect.className = 'comics-select'
    const option = document.createElement('option');
    option.setAttribute('value', hero["comics"]);
    option.textContent = hero["comics"];

    if(hero["comics"] === 'DC'){
        const option = document.createElement('option');
        option.setAttribute('value', "Marvel");
        option.textContent = "Marvel";
        comicsSelect.appendChild(option);
        form.appendChild(comicsSelect);
        heroesFromApi.appendChild(form)
    }else{
        const option = document.createElement('option');
        option.setAttribute('value', "DC");
        option.textContent = "DC";
        comicsSelect.appendChild(option);
        form.appendChild(comicsSelect);
        heroesFromApi.appendChild(form)
    }
    comicsLabel.appendChild(comicsSelect)
    comicsSelect.appendChild(option);
    row.append(comicsLabel)
    form.appendChild(row);
    //favourite
    const favourite = document.createElement('input');
    favourite.setAttribute('type', 'checkbox');
    favourite.className = 'is-fav'
    const favouriteLabel = document.createElement('label');
    favouriteLabel.textContent = 'Favourite:';
    if(hero["favourite"]){
        favourite.checked = true
    }else{
        favourite.checked = false
    }
    form.appendChild(favouriteLabel)
    form.appendChild(favourite)
    //btns
    const rowTwo = document.createElement('div')
    const updateBtn = document.createElement('input');
    updateBtn.setAttribute('type', 'button');
    updateBtn.setAttribute('name', 'update');
    updateBtn.setAttribute('value', 'update');
    updateBtn.addEventListener('click', () =>{
        updateBtn.parentNode.parentNode.remove()
        let hero = {
            "name": '',
            "comics": '',
            "favourite": updateBtn.parentNode.parentNode.querySelector('.is-fav').checked
       }
       updateBtn.parentNode.parentNode.querySelector('.name-input').value === '' ?  hero["name"] = updateBtn.parentNode.parentNode.querySelector('.name-input').getAttribute('placeholder') : hero["name"] = updateBtn.parentNode.parentNode.querySelector('.name-input').value
       hero["comics"] = updateBtn.parentNode.parentNode.querySelector('.comics-select').value
       updateInApi(updateBtn.parentNode.parentNode.getAttribute('heroid'), hero)
       console.log(hero, updateBtn.parentNode.parentNode.getAttribute('heroid'))
    }) 
    const deleteBtn = document.createElement('input');
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.setAttribute('name', 'delete');
    deleteBtn.setAttribute('value', 'delete');
    deleteBtn.addEventListener('click', () =>{
        deleteBtn.parentNode.parentNode.remove()
        removeFromApi(deleteBtn.parentNode.parentNode.getAttribute('heroid'))
    })
    rowTwo.append(updateBtn) 
    rowTwo.append(deleteBtn) 
    form.append(rowTwo) 


} 
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let formData = addAHero();
    addToApi(formData)
    console.log(formData)
    clearForm();

  });
  window.addEventListener('load', () =>{
    renderFromApi('https://63693f7228cd16bba71904e4.mockapi.io/heroes', 0)
  })