const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("#btn");
const colorSpan = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor = hexColor + hex[getRandomNumber(15)];
  }
  document.body.style.backgroundColor = hexColor;
  colorSpan.textContent = hexColor;
});

/*  Helper  Functions  */
function getRandomNumber(upperValue) {
  return Math.floor(Math.random() * (upperValue + 1));
}
