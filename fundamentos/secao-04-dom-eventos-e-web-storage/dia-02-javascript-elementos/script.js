// Elements for html
const main = document.createElement('main');
const section = document.createElement('section');
const h1 = document.createElement('h1');
const h3 = document.createElement('h3');
const p = document.createElement('p');
const img = document.createElement('img');

// Function for text 
function elemnetText (text, element, position) {
    element.innerText = text;
    position.appendChild(element);
}

// 1 - Stage - ok
elemnetText('TrybeTrip - Agência de Viagens', h1, document.getElementsByTagName('body')[0]);