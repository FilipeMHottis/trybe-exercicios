import './css/style.css';
import './css/reset.style.css';
import { inputVazio } from './utils/verificador';

const buttonInput = document.querySelector('button');

buttonInput.addEventListener('click', () => {
  const p = document.querySelector('section p span');
  const cpfInput = document.querySelector('main form input').value;

  try {
    inputVazio(cpfInput);
    p.innerHTML = cpfInput;
  } catch (error) {
    p.innerHTML = error.message;
  }
});
