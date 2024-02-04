let elUsersTemplate = document.querySelector(".template").content
let elUsersList = document.querySelector(".list");
let usersFragment = new DocumentFragment()

const API_KEY = "def42203";
const API_URLs = `https://www.omdbapi.com/?i=tt3896198&apikey=def42203`;
const API_URL = `https://jsonplaceholder.typicode.com/users`;




const renderMovies = () => {
  elUsersList.innerHTML = null;

  fetch(API_URL)
    .then((res) => res.json())
    .then((user) => {

        for (let i = 0; i < user.length; i++) {
          let newTemplate = elUsersTemplate.cloneNode(true)
          console.log(user[i])
          newTemplate.querySelector(".id").textContent = user[i].id
          newTemplate.querySelector(".name").textContent = user[i].name
          newTemplate.querySelector(".username").textContent = user[i].username
          newTemplate.querySelector(".email").textContent = user[i].email
          newTemplate.querySelector(".address").textContent = `${user[i].address.street}, ${user[i].address.city}`
          
        
          usersFragment.appendChild(newTemplate)
          console.log(user)
        }
        elUsersList.appendChild(usersFragment)
    }
    )
    .catch((err) => console.log(err.messages));


};

renderMovies();


