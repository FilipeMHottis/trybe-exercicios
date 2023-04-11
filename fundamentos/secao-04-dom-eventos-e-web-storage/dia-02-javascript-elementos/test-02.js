const elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
const parent = elementoOndeVoceEsta.parentNode;
const element = document.createElement('b');

element.innerText = 'Hello';
parent.appendChild(element);
console.log(parent);
parent.removeChild(parent.firstElementChild);