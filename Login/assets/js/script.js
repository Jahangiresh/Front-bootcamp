//----------------------------------------------------------------REGISTER STARTS

var username = document.getElementById("user__name");
var name = document.getElementById("name");
var surname = document.getElementById("surname");
var email = document.getElementById("email");
var password = document.getElementById("password");
var passwordRepeat = document.querySelector("#password__repeat");
var addBtn = document.querySelector(".my-button");
var tr = document.querySelector(".tr");
var tbody = document.querySelector(".tbody");

var id = 0;

class User {
  constructor(username, name, surname, email, password, Id) {
    this.username = username;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
    id++;
    this.Id = id;
  }
}
var user;
var users = [];
var isSame;
function createUser() {
  var inputusername = document.getElementById("user__name").value;

  for (let index = 0; index < users.length; index++) {
    if (inputusername == users[index].username) {
      alert("this username is already taken");
      isSame = true;
    } else {
      isSame = false;
    }
  }

  var isUpper = /^[A-Z]+[a-z]+[0-9]*$/;
  if (inputusername.match(isUpper)) {
    username = inputusername;
  } else {
    alert("first letter of username must be capital");
    return;
  }

  name = document.getElementById("name").value;
  surname = document.getElementById("surname").value;
  var inputemail = document.getElementById("email").value;
  var isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (inputemail.match(isEmail)) {
    email = inputemail;
  } else {
    alert("email is wrong");
    return;
  }

  var inputpassword = document.getElementById("password").value;

  var isSix = /^.{6,}$/;
  if (inputpassword.match(isSix)) {
    password = inputpassword;
  } else {
    alert("password must contains at least 6 characters");
    return;
  }

  return username, name, surname, email, password;
}
function addRows() {
  for (let index = 0; index < users.length; index++) {
    var html = `
       <tr class="tr">
          <th scope="row">${users[index].Id}</th>
          <td>${users[index].name}</td>
          <td>${users[index].surname}</td>
          <td>${users[index].email}</td>
          <td>${users[index].username}</td>
          <td>${users[index].password}</td>
        
          <td><button class="deleteBtn">delete</button></td>
        </tr>
          `;
  }

  tbody.innerHTML += html;
}

function deleteRows() {
  var deleteBtn = document.querySelectorAll(".deleteBtn");

  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", function () {
      var tr = document.querySelectorAll(".tr");

      var deletedId = this.parentElement.parentElement.children[0].innerHTML;
      var dltIndex = users.indexOf(user.Id == deletedId);
      users.splice(dltIndex, 1);

      var thisTr = this.parentElement.parentElement;

      if (deletedId == this.parentElement.parentElement.children[0].innerHTML) {
        thisTr.innerHTML = "";
      }
    });
  }
}

function eventAdder() {
  createUser();
  if (!isSame) {
    if (password == passwordRepeat.value && password != "") {
      user = new User(username, name, surname, email, password);
      users.push(user);
      passwordRepeat.style.border = "none";
    } else {
      passwordRepeat.style.border = "1px solid red";
    }

    addRows();
  } else {
    return;
  }

  deleteRows();
}

addBtn.addEventListener("click", eventAdder);

//----------------------------------------------------------------REGISTER ENDS

var spanLogin = document.querySelector(".login-span");
var myInputs = document.querySelector(".my-inputs");
var loginButton;
var loginUsername;
var loginPassword;
function changeToLogin() {
  addBtn.removeEventListener("click", eventAdder);

  myInputs.innerHTML = `  <input id="login__username" type="text" placeholder="your Username" />
  <input id="login__password" type="text" placeholder="your name" />`;
  addBtn.classList.replace("my-button", "login-button");
  loginButton = document.querySelector(".login-button");
  loginButton.innerHTML = "login";
  loginPassword = document.querySelector("#login__password");

  loginUsername = document.querySelector("#login__username");
}

spanLogin.addEventListener("click", function () {
  changeToLogin();
  loginButton.addEventListener("click", function () {
    for (let i = 0; i < users.length; i++) {
      if (
        loginUsername.value == users[i].username &&
        loginPassword.value == users[i].password
      ) {
        var registerbox = document.querySelector(".register");
        registerbox.style.backgroundColor = "black";
        registerbox.innerHTML = `
        <img class="img" src="https://i.pinimg.com/originals/ba/ce/57/bace57c5e51b79fa303026d754fef8b5.gif" alt="">
        `;
        return;
      } else {
        alert("wrong username or password ");
        loginUsername.style.border = "1px solid red";
        loginPassword.style.border = "1px solid red";
      }
    }
  });
});
