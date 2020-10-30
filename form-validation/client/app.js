/*
No missing fields
Valid email address
String password
Matching password
And any other validation you think is needed.
*/

const handleSubmit = (e) => {
  const password = document.querySelector('input[name="password"]');
  const confirm = document.querySelector('input[name="confirm"]');
  const body = document.querySelector('body');
  const text = document.querySelector('.notification');
  
  if (password.value !== confirm.value) {
    text.innerHTML = 'Please make sure passwords match before submitting!';
    text.hidden = false;
  } else {
    text.hidden = true;
    body.querySelectorAll('*').forEach((child) => child.remove());
    const completed = document.createElement('div');
    completed.innerHTML = 'Succesfully signed up!'
    body.appendChild(completed);
  }
};

const handleChange = (e) => {
  const confirm = document.querySelector('input[name="confirm"]');
  const password = document.querySelector('input[name="password"]');
  const text = document.querySelector('.notification');
  if (password.value !== confirm.value) {
    text.innerHTML = 'passwords do not match';
    text.hidden = false;
  } else {
    text.hidden = true;
  }
}

(function() {
  const body = document.querySelector('body');
  const text = document.createElement('div');
  text.setAttribute('class', 'notification');
  text.hidden = true;
  body.appendChild(text);
})()

document.querySelector('input[name="confirm"]').addEventListener('change', handleChange);
document.querySelector('button').addEventListener('click', handleSubmit);