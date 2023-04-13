// Mudadir de cor de Fundo --- Não salva cor
const backgroundCollor = () => {
    const buttons = document.querySelectorAll("#background-color button");
    const text = document.querySelector('.paragraph');

    for (let index of buttons) {
        index.addEventListener('click', () => {
            const collor = index.innerText
            text.style.background = collor;
        });
    };
}

window.onload = () => {
    backgroundCollor();
}