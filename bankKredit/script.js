const price = document.querySelector("#price");
const calc = document.querySelector(".calc");
const rate = document.querySelector("#rate");
const month = document.querySelector("#select");
const inputsBox = document.querySelector(".main__container__content__inputs");
const inputsBox2 = document.querySelector(".main__container__content__inputs2");
const tPrice = document.querySelector("#totalPrice");
const monthInput = document.querySelector("#monthly");
console.log("s");
let totalPrice = 0;
let monthly = 0;

calc.onclick = () => {
  tPrice.value = totalPrice +=
    (price.value * rate.value) / 100 + parseInt(price.value);
  monthInput.value = Math.trunc(totalPrice / month.value);
  inputsBox.style.opacity = "0";
  inputsBox.style.visibility = "hidden";

  inputsBox2.style.opacity = "1";
  inputsBox2.style.visibility = "visible";
};
