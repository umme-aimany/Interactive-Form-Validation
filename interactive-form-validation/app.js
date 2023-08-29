const form = document.getElementById('validation-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', function(event) {
  let isValid = true;
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const passwordError = document.getElementById('password-error');
  
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  
  if (nameInput.value === '') {
    nameError.textContent = 'Name is required.';
    isValid = false;
  }
  
  if (emailInput.value === '') {
    emailError.textContent = 'Email is required.';
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
    emailError.textContent = 'Invalid email format.';
    isValid = false;
  }
  
  if (passwordInput.value === '') {
    passwordError.textContent = 'Password is required.';
    isValid = false;
  }
  
  if (!isValid) {
    event.preventDefault();
  }
});
