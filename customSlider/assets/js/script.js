var slider = document.querySelector(".slider");
var img = document.querySelector(".slider img");
var right = document.querySelector(".right");
var left = document.querySelector(".left");
var parentDot = document.querySelector(".dotss");
var images = [
  "https://wallpapercave.com/wp/wp8819833.jpg",
  "https://www.economist.com/img/b/2048/1153/90/1843magazine.com/sites/default/files/styles/il_manual_crop_16_9/public/Image-1-webcover.jpg",
  "https://www.teahub.io/photos/full/320-3207007_wave-sunset-surfing.jpg",
  "https://cdn.wallpapersafari.com/87/8/2eULm0.jpg",
  "https://mdbootstrap.com/img/Photos/Slides/img%20(15).webp",
];

for (let i = 0; i < images.length; i++) {
  var dots = document.createElement("div");
  dots.setAttribute("class", "dot");
  parentDot.appendChild(dots);
  var dots = document.querySelectorAll(".dot");
  dots[0].classList.add("active");
}

var index = 0;

right.addEventListener("click", function () {
  index++;
  if (index > images.length - 1) {
    index = 0;
  }
  img.src = images[index];
  var el = dots[0];
  while (el) {
    if (el.tagName === "DIV") {
      el.classList.remove("active");
    }
    el = el.nextElementSibling;
  }
  dots[index].classList.add("active");
});

left.addEventListener("click", function () {
  index--;
  if (index === -1) {
    index = images.length - 1;
  }
  img.src = images[index];
  var el = dots[0];
  while (el) {
    if (el.tagName === "DIV") {
      el.classList.remove("active");
    }
    el = el.nextElementSibling;
  }
  dots[index].classList.add("active");
});
function autoPlay() {
  index++;
  if (index > images.length - 1) {
    index = 0;
  }
  img.src = images[index];
  var el = dots[0];
  while (el) {
    if (el.tagName === "DIV") {
      el.classList.remove("active");
    }
    el = el.nextElementSibling;
  }
  dots[index].classList.add("active");
}
setInterval(() => {
  autoPlay();
}, 3500);

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    var el = dots[0];
    while (el) {
      if (el.tagName === "DIV") {
        el.classList.remove("active");
      }
      el = el.nextElementSibling;
    }
    dots[i].classList.add("active");

    for (let j = 0; j < images.length; j++) {
      img.src = images[i];
    }
  });
}
