import validator from 'validator';
import './style.css';

const buttonSubmit = document.querySelector('#submit');

buttonSubmit.addEventListener('click', () => {
  console.log('Test');
  console.log(validator.isEmail());
});
