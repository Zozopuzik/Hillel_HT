let radios = [...document.querySelectorAll(".radio")];
let form = document.querySelector(".form");
const BASIC_WAY = "https://api.chucknorris.io/jokes/";
let getDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diff = (now.getTime() - date.getTime()) / 1000; 
  if (diff < 60) {
    return "just now";
  } else if (diff < 3600) {
    const minutes = Math.floor(diff / 60);
    return `${minutes} minutes ago`;
  } else if (diff < 86400) {
    const hours = Math.floor(diff / 3600);
    return `${hours} hours ago`;
  } else {
    const days = Math.floor(diff / 86400);
    return `${days} days ago`;
  }
};
///local storage

let getItem = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
let setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
let removeItem = (key) => {
  localStorage.removeItem(key);
};
let createLocalStorage = () => {
  if (getItem("favJokes")) {
  } else {
    setItem("favJokes", []);
  }
};
//cosmetical fixes
let createSearchField = () => {
  let searchDiv = document.querySelector(".search");
  if (search.checked) {
    let searchField = document.createElement("input");
    searchField.type = "text";
    searchField.placeholder = "Free text search";
    searchField.className = "search-area";
    searchDiv.append(searchField);
  }
};
let removeSearchField = () => {
  let searchField = document.querySelector(".search-area");
  if (searchField) {
    searchField.remove();
  }
};
let disableCategory = () => {
  let categoryRadios = [...document.querySelectorAll(".category")];
  categoryRadios.forEach((el) => {
    el.disabled = true;
    el.checked = false;
  });
};
let ableCategory = () => {
  let categoryRadios = [...document.querySelectorAll(`.category`)];
  categoryRadios.forEach((el) => (el.disabled = false));
};
function enableRadioButton() {
  document.getElementById("my-radio-button").disabled = false;
}

//working with server
let getData = (value) => {
  {
    let jokes = document.getElementById("jokes");
    fetch(`${BASIC_WAY}${value}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          let newdata = data.result.slice(0, 5);
          newdata.forEach((res) => render(res, jokes));
        } else {
          render(data, jokes);
        }
      });
  }
};

//render

let render = (data, destination) => {
  let jokeWrapper = document.createElement("div");
  let joke = document.createElement("div");
  let jokeIcon = document.createElement("div");
  let jokeHeader = document.createElement("div");
  let jokeText = document.createElement("div");
  let jokeFooter = document.createElement("div");
  jokeWrapper.className = "joke-wrapper";
  joke.className = "joke";
  jokeIcon.className = "joke-icon";
  let icon = document.createElement("img");
  icon.className = "icon";
  jokeIcon.append(icon);
  icon.src = "assets/images/message.png";
  jokeHeader.className = "joke-header";
  let jokeid = document.createElement("div");
  jokeid.className = "joke-id";
  jokeid.innerHTML = `ID: ${data.id}`;
  jokeHeader.append(jokeid);
  let heart = document.createElement("img");
  heart.className = "heart";
  heart.setAttribute("jokeid", `${data.id}`);
  heart.setAttribute("clicked", "false");
  heartClick(heart);
  jokeHeader.append(heart);
  heart.src = "assets/images/white-heart.png";
  jokeText.className = "joke-text";
  jokeText.innerHTML = data.value;
  jokeFooter.className = "joke-footer";
  let jokeTime = document.createElement("div");
  jokeTime.className = "joke-time";
  jokeTime.innerHTML = `${getDate(data.updated_at)}`;
  jokeFooter.append(jokeTime);
  let jokeCategory = document.createElement("div");
  jokeCategory.className = "joke-category";
  if (data.categories.length === 0 && data.categories != undefined) {
    jokeCategory.innerHTML = "Random";
  } else {
    jokeCategory.innerHTML = data.categories[0];
  }
  jokeFooter.append(jokeCategory);
  jokeWrapper.append(jokeIcon);
  jokeWrapper.append(joke);
  joke.append(jokeHeader);
  joke.append(jokeText);
  joke.append(jokeFooter);
  destination.append(jokeWrapper);
};
let addToFav = (data) =>{
let favJokes = document.getElementById('favourite-jokes')
let favJoke = document.createElement('div')
favJoke.className = 'joke-wrapper'
favJoke.innerHTML = data.HTMLlayout
favJoke.setAttribute('id', data.id)
favJokes.append(favJoke)
let heart =  favJoke.querySelector('.heart')
heartClick(heart)
}
let removeFromFav = (element) =>{
  let hearts = [...document.querySelectorAll('.heart')]
  console.log(hearts)
  hearts.forEach(heart =>{
    if(heart.getAttribute('jokeid') === element.getAttribute('jokeid') && heart.parentNode.parentNode.parentNode.parentNode.getAttribute('id') === 'favourite-jokes'){
      heart.parentNode.parentNode.parentNode.remove()
    }
    else if (heart.getAttribute('jokeid') === element.getAttribute('jokeid')){
      heart.src = "assets/images/white-heart.png";
      heart.setAttribute("clicked", "false");
    }
  })
}
//logic
let findTheJoke = (value) => {
  switch (value) {
    case "random":
      getData("random");
      break;
    case "categories":
      {
        let categories = [...document.querySelectorAll(".category")];
        let radioValue = "";
        for (i = 0; i < categories.length; i++) {
          if (categories[i].checked) {
            radioValue = categories[i].value;
          }
        }
        if (radioValue === "") {
          alert("chose your category");
        }
        getData(`random?category=${radioValue}`);
      }
      break;
    case "search":
      let searchField = document.querySelector(".search-area");
      getData(`search?query=${searchField.value}`);
  }
};
let heartClick = (element) => {
  element.addEventListener("click", () => {
    if (element.getAttribute("clicked") === "false") {
      element.src = "assets/images/heart.png";
      element.setAttribute("clicked", "true");
      let jokeParametrs = {
        id: element.getAttribute("jokeid"),
        HTMLlayout: element.parentNode.parentNode.parentNode.innerHTML,
      };
      let arr = getItem("favJokes");
      arr.push(jokeParametrs);
      setItem("favJokes", arr);
      addToFav(jokeParametrs)
    } else {
      element.src = "assets/images/white-heart.png";
      element.setAttribute("clicked", "false");
      let arr = getItem("favJokes");
      for (i = 0; i < arr.length; i++) {
        if (arr[i].id === element.getAttribute("jokeid")) {
          arr.splice(i, 1);
          setItem("favJokes", arr);
          removeFromFav(element)
        }
      }
    }
  });
};
radios.forEach((radio) =>
  radio.addEventListener("change", () => {
    if (radio.value === "search") {
      createSearchField();
      disableCategory();
    } else if (radio.value === "categories") {
      ableCategory();
      removeSearchField();
    } else {
      removeSearchField();
      disableCategory();
    }
  })
);
//event listeners
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let radios = [...document.querySelectorAll(".radio")];
  let radioValue;
  for (i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      radioValue = radios[i].value;
    }
  }
  findTheJoke(radioValue);
});
window.onload = () => {
  createLocalStorage();
  let arr = getItem("favJokes");
  if(arr != []){
    arr.forEach(element => addToFav(element)) 
  }
};
