const inputElement = document.querySelector("input#font-size-control");
const textElement = document.querySelector("span#text");
textElement.style.fontSize = inputElement.value + "px";

inputElement.addEventListener(
  "input",
  (event) => (textElement.style.fontSize = event.currentTarget.value + "px")
);