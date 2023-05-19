// https://www.npmjs.com/package/nanoid
import { nanoid } from "nanoid";

const passwordBotton = document.querySelector('button');
const displayPassword = document.querySelector('h2');

passwordBotton.addEventListener('click', () => {
    displayPassword.innerHTML = nanoid();
});
