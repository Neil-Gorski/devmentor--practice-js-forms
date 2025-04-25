const emailField = document.querySelector("#formLogin");
const passwordField1 = document.querySelector("#formPass1");
const passwordField2 = document.querySelector("#formPass2");
const acceptBox = document.querySelector("#formAccept");
const form = document.querySelector("form");
form.setAttribute("novalidate", true);

const errors = [];
let passwordEntered = "";
console.log(emailField);
emailField.addEventListener("input", validateEmail);
form.addEventListener("submit", (e) => e.preventDefault());
document.addEventListener("DOMContentLoaded", addAllElementsAsError);
passwordField1.addEventListener("input", validatePassword1);
passwordField2.addEventListener("input", validatePassword2);
acceptBox.addEventListener("change", validateRegulations);

function validatePassword1(e) {
  if (this.value.length <= 6) {
    addError(passwordField1);
  } else {
    removeError(passwordField1);
    passwordEntered = this.value;
  }
  validatePassword2.call(passwordField2, { target: passwordField2 });
  git;
  console.log(errors);
}

function validatePassword2(e) {
  if (this.value !== passwordEntered) {
    addError(passwordField2);
  } else {
    removeError(passwordField2);
  }
  console.log(this.value, errors);
}
function validateEmail(e) {
  const lableEmail = emailField.previousElementSibling;
  const reEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!reEmail.test(this.value)) {
    addError(emailField);
  } else {
    removeError(emailField);
  }
}

function addError(element) {
  if (!errors.includes(element)) {
    errors.push(element);
  }
  console.log(errors);
}

function removeError(element) {
  markLable(element, "black");
  if (errors.includes(element)) {
    const index = errors.indexOf(element);
    if (index !== -1) {
      errors.splice(index, 1);
    }
  }
  console.log(errors);
}

function validateRegulations(e) {
  if (e.target.checked) {
    removeError(e.target);
    markLable(e.target, "black");
  } else {
    addError(e.target);
    console.log("uncheckd");
  }
  console.log(errors);
}

function checkRegulations(e) {
  if (acceptBox && !acceptBox.checked) {
    addError(acceptBox);
  }
}

function markLable(element, color) {
  element.previousElementSibling.style.color = color;
}

function addAllElementsAsError() {
  const formInputs = form.querySelectorAll("input");
  for (input of formInputs) {
    if (input.type !== "submit") {
      errors.push(input);
    }
  }
  console.log(errors);
}
