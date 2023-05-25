import './css/style.css';
import './css/reset.style.css';

const buttonInput = document.querySelector('button');

buttonInput.addEventListener('click', () => {
  const p = document.querySelector('section p span');
  const cpfInput = document.querySelector('main form input').value;
  p.innerHTML = '';
  p.innerHTML = cpfInput;
});
