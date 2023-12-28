const inputElement = document.querySelector("#validation-input");
const expectedLength = Number.parseInt(
  inputElement.getAttribute("data-length")
);

inputElement.addEventListener("blur", (event) => {
  const hasValid = inputElement.classList.contains("valid");
  const hasInvalid = inputElement.classList.contains("invalid");
  if (event.currentTarget.value.length === expectedLength) {
    if (!hasValid) {
      inputElement.classList.add("valid");
    }
    if (hasInvalid) {
      inputElement.classList.remove("invalid");
    }
  } else {
    if (hasValid) {
      inputElement.classList.remove("valid");
    }
    if (!hasInvalid) {
      inputElement.classList.add("invalid");
    }
  }
});