function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const amountInput = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");

createButton.addEventListener("click", () => {
  const amount = Number.parseInt(amountInput.value);
  createBoxes(amount);
});
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const elementsArea = document.querySelector("#boxes");
  const already = elementsArea.querySelectorAll("div").length;
  for (let i = 0; i < amount; i++) {
    const dimension = 30 + (i + already) * 10;
    const color = getRandomHexColor();
    const string = `<div style="width:${dimension}px; height:${dimension}px; background-color: ${color}"></div>`;
    elementsArea.insertAdjacentHTML("beforeend", string);
  }
  amountInput.value = "";
}

function destroyBoxes() {
  const elementsArea = document.querySelector("#boxes");
  elementsArea.innerHTML = "";
}