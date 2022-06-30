const bg = document.querySelector(".header-cover");
console.log("se");
const windowWidth = window.innerWidth / 2;
const windowHeight = window.innerHeight / 0;

bg.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX / windowWidth;
  const mouseY = e.clientY / windowHeight;

  bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
});
