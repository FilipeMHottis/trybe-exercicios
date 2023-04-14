// Mudador de cor de fundo --- salva 
const setBackgroundCollor = () => {
    const buttons = document.querySelectorAll("#background-color button");
    const text = document.querySelector('.paragraph');

    for (let index of buttons) {
        index.addEventListener('click', () => {
            text.style.background = index.innerText;
            localStorage.setItem('background', index.innerText);
        });
    };
}

// Mudador de cor da fonte --- salva 
const setFontCollor = () => {
    const buttons = document.querySelectorAll("#font-color button");
    const text = document.querySelector('.paragraph');

    for (let index of buttons) {
        index.addEventListener('click', () => {
            text.style.color = index.innerText;
            localStorage.setItem('textColor', index.innerText);
        });
    };
}

// Mudador de tamanho da fonte --- salva 
const setFontSize = () => {
    const buttons = document.querySelectorAll("#font-size button");
    const text = document.querySelector('.paragraph');

    for (let index of buttons) {
        index.addEventListener('click', () => {
            text.style.fontSize = index.innerText;
            localStorage.setItem('fontSize', index.innerText);
        });
    };
}

// Mudador de espaçamento --- Não salva
const setLineHeight = () => {
    const buttons = document.querySelectorAll("#line-height button");
    const text = document.querySelector('.paragraph');

    for (let index of buttons) {

        index.addEventListener('click', () => {
            if (index.innerText === 'normal') {
                text.style.lineHeight = 'normal';
            } else {
                text.style.lineHeight = Number(index.innerText);
            }
        });
    };
}

// Mudador de fonte --- salva
const setFontFamily = () => {
    const buttons = document.querySelectorAll("#font-family button");
    const text = document.querySelector('.paragraph');

    for (let index of buttons) {
        index.addEventListener('click', () => {
            text.style.fontFamily = index.innerText;
            localStorage.setItem('fontFamily', index.innerText);
        });
    };
}


window.onload = () => {
    const text = document.querySelector('.paragraph');

    if (localStorage.getItem('background')) {
        text.style.background = localStorage.getItem('background');
    };
    if (localStorage.getItem('textColor')) {
        text.style.color  = localStorage.getItem('textColor');
    };
    if (localStorage.getItem('fontSize')) {
        text.style.fontSize  = localStorage.getItem('fontSize');
    };
    if (localStorage.getItem('fontFamily')) {
        text.style.fontFamily  = localStorage.getItem('fontFamily');
    };
    
    setBackgroundCollor();
    setFontCollor();
    setFontSize();
    setLineHeight();
    setFontFamily();
}