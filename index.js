const firstName = document.getElementById('firstName');
const firstNameError = document.getElementById('firstNameError');
const lastName = document.getElementById('lastName');
const lastNameError = document.getElementById('lastNameError');
const email = document.getElementById('email');
const emailError = document.getElementById('emailError');
const password = document.getElementById('password');
const passwordError = document.getElementById('passwordError');
const claimButton = document.getElementById('claim-button');
const emailRegex = /\S+@\S+\.\S+/;

claimButton.addEventListener('click', () => {


  // check if any of the input fields are empty
  if (!firstName.value) {
    firstNameError.innerHTML = 'First name cannot be empty';
    firstName.classList.add('error-icon');
  } else {
    firstNameError.innerHTML = '&nbsp';
    firstName.classList.remove('error-icon');
  }
  if (!lastName.value) {
    lastNameError.innerHTML = 'Last name cannot be empty';
    lastName.classList.add('error-icon')
  } else {
    lastNameError.innerHTML = '&nbsp';
    lastName.classList.remove('error-icon');
  }
  if (!email.value) {
    emailError.innerHTML = 'Email address cannot be empty';
    email.classList.add('error-icon')
  } else if (!emailRegex.test(email.value)) {
    emailError.innerHTML = 'Looks like this is not an email';
    email.classList.add('error-icon')
  } else {
    emailError.innerHTML = '&nbsp';
    email.classList.remove('error-icon');
  }
  if (!password.value) {
    passwordError.innerHTML = 'Password cannot be empty';
    password.classList.add('error-icon')
  } else {
    passwordError.innerHTML = '&nbsp';
    password.classList.remove('error-icon');
  }
});
