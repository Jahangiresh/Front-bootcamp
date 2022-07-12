var tr = document.querySelector(".tr");
var tbody = document.querySelector(".tbody");
var addBtn = document.querySelector(".add-user");
var users = [];
var user;
var id = 0;

class User {
  constructor(username, password, email, Id) {
    this.username = username;
    this.password = password;

    this.email = email;
    id++;
    this.Id = id;
  }
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
function valueChecker() {
  var valueUsername = document.getElementById("username").value;
  var isUpper = /^[A-Z]+[a-z]+[0-9]*$/;
  if (valueUsername != "" && valueUsername.match(isUpper)) {
    username = valueUsername;
  } else {
    alert("First letter of username must be capital");
  }

  var valuePassword = document.getElementById("password").value;
  var isSix = /^.{6,}$/;
  if (valuePassword != "" && valuePassword.match(isSix)) {
    password = valuePassword;
  } else {
    alert("password must contains at least 6 character");
  }
  var valueEmail = document.getElementById("e-mail").value;
  var isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (valueEmail != "" && valueEmail.match(isEmail)) {
    email = valueEmail;
  } else {
    alert("email is wrong");
  }
  return { username, password, email };
}

function addRows() {
  for (let index = 0; index < users.length; index++) {
    var html = `
     <tr class="tr">
        <th scope="row">${users[index].Id}</th>
        <td>${users[index].username}</td>
        <td>${users[index].password}</td>
        <td>${users[index].email}</td>
        <td><button class="deleteBtn">delete</button></td>
      </tr>
        `;
  }

  tbody.innerHTML += html;
}

addBtn.addEventListener("click", function () {
  valueChecker();
  user = new User(username, password, email);
  users.push(user);

  addRows();
  deleteRows();
});
