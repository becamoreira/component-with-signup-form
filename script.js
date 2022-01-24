const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name');
  const lastName = document.getElementById('lastName');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const messages = document.querySelectorAll('.error-message');
  const errorIcons = document.querySelectorAll('.input-items');

  if (name.value === '') {
    name.classList.add('error');
    messages[0].innerHTML = 'First Name cannot be empty';
  }

  if (lastName.value === '') {
    lastName.classList.add('error');
    messages[1].innerHTML = 'Last Name cannot be empty';
  }

  if (email.value === '') {
    email.classList.add('error');
    messages[2].innerHTML = 'Looks like this is not an email';
  }

  if (password.value === '') {
    password.classList.add('error');
    messages[3].innerHTML = ' Password cannot be empty';
  }

  errorIcons.forEach((icon) => {
    icon.classList.add('error-icon');
  });
});
