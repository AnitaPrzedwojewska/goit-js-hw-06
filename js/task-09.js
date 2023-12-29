function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const widget = document.querySelector(".color");

button.addEventListener("click", (event) => {
  body.style.backgroundColor = getRandomHexColor();
  widget.textContent = body.style.backgroundColor;
});