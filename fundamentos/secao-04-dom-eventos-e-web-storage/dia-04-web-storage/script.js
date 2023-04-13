// Mudador de cor de fundo --- Não salva 
const setBackgroundCollor = () => {
    const buttons = document.querySelectorAll("#background-color button");
    const text = document.querySelector('.paragraph');

    for (let index of buttons) {
        index.addEventListener('click', () => {
            text.style.background = index.innerText;
        });
    };
}

// Mudador de cor da fonte --- Não salva 
const setFontCollor = () => {
    const buttons = document.querySelectorAll("#font-color button");
    const text = document.querySelector('.paragraph');

    for (let index of buttons) {
        index.addEventListener('click', () => {
            text.style.color = index.innerText;
        });
    };
}

// Mudador de tamanho da fonte --- Não salva 
const setFontSize = () => {
    const buttons = document.querySelectorAll("#font-size button");
    const text = document.querySelector('.paragraph');

    for (let index of buttons) {
        index.addEventListener('click', () => {
            text.style.fontSize = index.innerText;
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

// Mudador de fonte --- Não salva
const setFontStyle = () => {
    const buttons = document.querySelectorAll("#font-family button");
    const text = document.querySelector('.paragraph');

    for (let index of buttons) {
        index.addEventListener('click', () => {
            text.style.fontFamily = index.innerText;
        });
    };
}


window.onload = () => {
    setBackgroundCollor();
    setFontCollor();
    setFontSize();
    setLineHeight();
    setFontStyle();
}