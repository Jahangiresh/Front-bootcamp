let btn = document.querySelector(".add");
let ul = document.querySelector(".ul");
let input = document.querySelector(".inp");

//FOR LOOP OLMADAN---------------------------------------------------------------------------->>

// btn.addEventListener("click", function () {
//   if (input.value == "") {
//     alert("TYPE SOMETHING TO DO YOU LAZY BASTARD!");
//   } else {
//     var li = document.createElement("li");
//     li.innerHTML = input.value;

//     var deleteButton = document.createElement("button");

//     deleteButton.innerHTML = "x";
//     li.appendChild(deleteButton);
//     ul.appendChild(li);
//     input.value = "";

//     deleteButton.onclick = () => {
//       ul.removeChild(li);
//     };
//   }
// });

//FOR LOOP --------------------------------------------------------------------------->>

btn.addEventListener("click", function () {
  if (input.value == "") {
    alert("LEAVE YOUR COMFORT ZONE! TYPE SOMETHING");
  } else {
    var li = document.createElement("li");
    li.setAttribute("class", "li");
    li.innerHTML = input.value;

    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "dbutton");

    deleteButton.innerHTML = "x";
    li.appendChild(deleteButton);
    ul.appendChild(li);
    input.value = "";

    var deleteButtons = document.querySelectorAll(".dbutton");

    deleteButtons.forEach((x) => {
      x.onclick = () => {
        ul.removeChild(x.parentElement);
      };
    });
  }
});
