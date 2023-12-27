const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

const valueElement = document.querySelector("#value");
let counterValue = Number.parseInt(valueElement.textContent);

decrementButton.addEventListener("click", () => {
  counterValue--;
  valueElement.textContent = counterValue;
});

incrementButton.addEventListener("click", () => {
  counterValue++;
  valueElement.textContent = counterValue;
});
