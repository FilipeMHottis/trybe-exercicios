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
const centerContent = document.querySelector('.center-content');
elemnetText('Trybe é increvel de vdd!!! VQV', p, centerContent);

// Stage - 05 and 06
const mainContent = document.querySelector('.main-content');
const sectionLeft = document.createElement('section');
const sectionRight = document.createElement('section');

sectionLeft.className = 'left-content';
sectionRight.className = 'right-content';

elemnetText('Trybe é dificil, porem....!', sectionLeft, mainContent);
elemnetText('RECOMPENSADORA!', sectionRight, mainContent);

// Stage 07
img.src = 'https://picsum.photos/200';
img.className = 'small-image';
document.querySelector('.left-content').appendChild(img);