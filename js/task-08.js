const loggingForm = document.querySelector(".login-form");

loggingForm.addEventListener("submit", mySubmit);

function mySubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  }
  const formOutput = {
    email: form.elements.email.value,
    password: form.elements.password.value,
  };
  console.log(formOutput);
  form.reset();
}