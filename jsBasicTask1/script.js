const now = new Date();
const dayTime = now.getHours();

if (dayTime >= 6 && dayTime < 12) {
  alert("IT IS NEW DAY NEW LIFE AND IM FEELING GOOD! ");
} else {
  alert("GOOD EVENING! HAVE AN AMAZING NIGHT!");
}

var array1 = ["Guevara", "Maradona", "Castro"];
var array2 = ["Marx", "Pele"];
for (let index = 0; index < array1.length; index++) {
  array2.push(array1[index]);
}
console.log(array2);
