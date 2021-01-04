const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector("#btn");
const colorSpan = document.querySelector(".color");

btn.addEventListener("click", function () {
  // Get random no. b/w 0-3
  const randomNumber = getRandomNumber(3);
  const randomColor = colors[randomNumber];
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});

/*  Helper  Functions  */
function getRandomNumber(upperValue) {
  return Math.floor(Math.random() * (upperValue + 1));
}
