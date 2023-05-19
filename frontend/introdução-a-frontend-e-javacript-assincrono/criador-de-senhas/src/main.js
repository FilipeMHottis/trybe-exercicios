// https://www.npmjs.com/package/nanoid
import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import './style.css';

const passwordBotton = document.querySelector('button');
const displayPassword = document.querySelector('h2');

passwordBotton.addEventListener('click', () => {
    const password = nanoid();
    displayPassword.innerHTML = password;
    copy(password);
});
