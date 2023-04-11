// Elements for html
const main = document.createElement('main');
const section = document.createElement('section');
const h1 = document.createElement('h1');
const h3 = document.createElement('h3');
const p = document.createElement('p');
const img = document.createElement('img');
const body = document.getElementsByTagName('body')[0];

// Function for text 
function elemnetText (text, element, position) {
    element.innerText = text;
    position.appendChild(element);
}

// Stage - 01
elemnetText('TrybeTrip - Agência de Viagens', h1, body);
h1.className = 'title';

// Stage - 02
body.appendChild(main).className = 'main-content';

// Stage - 03
document.querySelector('.main-content').appendChild(section).className = 'center-content';

// Stage - 04