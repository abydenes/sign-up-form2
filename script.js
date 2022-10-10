const form = document.querySelector("form");
const firstname = document.querySelector("#firstname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const lastname = document.querySelector("#lastname");
const tel = document.querySelector("#phonenumber")
const password2 = document.querySelector("#password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
})

function checkInputs() {
  const firstnameValue = firstname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const lastnameValue = lastname.value.trim();
  const telValue = tel.value.trim();
  const password2Value = password2.value.trim();
  if (firstnameValue === "") setErrorFor(firstname, "First name cannot be blank");
  else setSuccessFor(firstname);
  if (emailValue === "") setErrorFor(email, "Email cannot be blank");
  else setSuccessFor(email);
  if (passwordValue === "") setErrorFor(password, "Password cannot be blank");
  else setSuccessFor(password);
  if (lastnameValue === "") setErrorFor(lastname, "Last name cannot be blank");
  else setSuccessFor(lastname);
  if (telValue === "") setErrorFor(tel, "Phone number cannot be blank");
  else setSuccessFor(tel);
  if (passwordValue !== password2Value || !password2Value) setErrorFor(password2, "Passwords must match");
  else setSuccessFor(password2);
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error"
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success"
}