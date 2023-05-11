export let redirect = (location) => {
  window.location.href = location;
};
export let addToLocalStorage = (key, element) => {
  localStorage.setItem(key, JSON.stringify(element));
};
export let getFromLocalStorage = (key) => {
  let obj = JSON.parse(localStorage.getItem(key));
  return obj;
};
export let checkUser = (userData, apiLink) => {
  fetch(apiLink)
    .then((response) => response.json())
    .then((data) => {
      const mydata = data;
      mydata.forEach((element) => {
        if (
          element.email === userData.email &&
          element.password === userData.password
        ) {
          element.status = true;
          addToLocalStorage("loggedUser", element);
          updateInApi(element.id, element);
        }
      });
      let loggedUser = getFromLocalStorage("loggedUser");
      if (loggedUser === null) {
        alert("no user with such data");
        localStorage.clear();
      } else {
        redirect("index.html");
      }
    });
};

export let logIn = () => {
  let form = document.querySelector(".log-in-form");
  let username = form.querySelector("#username").value;
  let email = form.querySelector("#email").value;
  let password = form.querySelector("#password").value;
  let confirmPassword = form.querySelector("#confirm-password").value;
  let newUser = {};
  let emails = [];  
  newUser.name = username
  password === confirmPassword ? newUser.password = password : console.error('you wrote down different passwords')
  fetch(`https://634e9f834af5fdff3a625f84.mockapi.io/users`)
  .then(response => response.json())
  .then(data => {
    let mydata = data
    mydata.forEach(el =>{
        emails.push(el.email)
    })
    console.log(emails)
  })
  emails.includes(email) ? console.error('user with such email already exists') : newUser.email = email
  console.log(newUser)
  fetch('https://634e9f834af5fdff3a625f84.mockapi.io/users', {
            method: 'POST',
            headers: {
                "content-type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(newUser)
        })
        .then(response => response.json())
        .then(data => {
            addToLocalStorage('loggedUser', data)
        })

        redirect('index.html')    
};
export let removeFromApi = (id) => {
  fetch(`https://634e9f834af5fdff3a625f84.mockapi.io/users/${id}`, {
    method: "DELETE",
  });
};
export let updateInApi = (id, updatedData) => {
  fetch(` https://634e9f834af5fdff3a625f84.mockapi.io/users/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(updatedData),
  })

};

export let logOut = () => {
  let userInfo = getFromLocalStorage("loggedUser");
  userInfo.status = false;
  updateInApi(userInfo.id, userInfo);
  localStorage.clear();
};
export let deleteAcc = () =>{
  let userInfo =  getFromLocalStorage('loggedUser')
    removeFromApi(userInfo.id)
}