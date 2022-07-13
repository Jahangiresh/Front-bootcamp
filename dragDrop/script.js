var dragItems = document.querySelectorAll(".drag__item");
var dragTarget = document.querySelector(".drag__target");
var draglist = document.querySelector(".drag__list");

dragTarget.addEventListener("drop", function (e) {
  let index = e.dataTransfer.getData("param");
  let div = document.getElementById(index);
  dragTarget.appendChild(div);
});
for (let i = 0; i < dragItems.length; i++) {
  if (draglist.firstChild.tagName != "DIV") {
    dragItems[i].addEventListener("dragstart", function (e) {
      console.log(dragItems.length);
      this.style.opacity = "0.3";
      e.dataTransfer.setData("param", this.id);
    });
  } else {
    alert("s");
  }
}

dragTarget.addEventListener("dragover", function () {
  dragTarget.style.border = "1px dashed red";
});

dragTarget.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dragTarget.addEventListener("dragleave", function (e) {
  this.style.border = "1px solid black";
});
