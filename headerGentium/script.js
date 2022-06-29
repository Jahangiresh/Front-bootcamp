const light = document.querySelector("#light");
const body = document.getElementsByTagName("BODY");

light.addEventListener("click", () => {
  document.body.style.backgroundColor = "black";
  light.style.display = "none";
});
