throttle = require('lodash.throttle');

const feedbackForm = document.querySelector('.feedback-form');
const feedbackInput = document.querySelector("input[type='email']");
const textarea = document.querySelector('textarea');
const LS_KEY = 'feedback-form-state';

let formData = JSON.parse(localStorage.getItem(LS_KEY)) || {};

feedbackForm.addEventListener('input', throttle(saveInLocalStorage, 500));
feedbackForm.addEventListener('submit', handleSubmit);

formData.email !== undefined ? (feedbackInput.value = formData.email) : '';
formData.message !== undefined ? (textarea.value = formData.message) : '';

function saveInLocalStorage(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

function handleSubmit(evt) {
  evt.preventDefault();
  if (!feedbackInput.value.trim() || !textarea.value.trim()) {
    return alert('Please fill in all the fields!');
  }
  console.log(formData);
  evt.currentTarget.reset();
  localStorage.removeItem(LS_KEY);
  formData = {};
}
