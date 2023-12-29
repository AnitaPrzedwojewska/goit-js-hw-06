const inputElement = document.querySelector("#validation-input");
const expectedLength = Number.parseInt(
  inputElement.getAttribute("data-length")
);

inputElement.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === expectedLength) {
    if (inputElement.classList.contains("invalid")) {
      inputElement.classList.replace("invalid", "valid");
      return;
    }
    if (!inputElement.classList.contains("valid")) {
      inputElement.classList.add("valid");
    }
  } else {
    if (inputElement.classList.contains("valid")) {
      inputElement.classList.replace("valid", "invalid");
      return;
    }
    if (!inputElement.classList.contains("invalid")) {
      inputElement.classList.add("invalid");
    }
  }
});