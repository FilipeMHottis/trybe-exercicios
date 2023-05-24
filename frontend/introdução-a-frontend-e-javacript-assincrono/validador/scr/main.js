import validator from 'validator';
import './style.css';

const buttonSubmit = document.querySelector('#submit');
const selectHTML = document.querySelector('select');
const resposta = document.querySelector('h3');
const inputText = document.querySelector('#inputText');

buttonSubmit.addEventListener('click', () => {
  console.log(selectHTML.value);
  if (selectHTML.value === 'email' && validator.isEmail(inputText.value)) {
    resposta.innerHTML = 'Yes, Isso é um email.';
  }
  resposta.inert = 'No, Isso não é valido';
});
