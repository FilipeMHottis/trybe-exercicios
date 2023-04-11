// parentElement: Retorna o elemento-pai. Nesse caso, se o nó-pai não for um elemento HTML, essa propriedade retornará null.
// childNodes: Retorna um NodeList com todos os nós filhos.
// children: Retorna um HTMLCollection com todos os elementos filhos.
// firstElementChild: Retorna o primeiro elemento filho.
// lastElementChild: Retorna o último elemento filho.
// nextElementSibling: Retorna o próximo elemento.
// previousElementSibling: Retorna o elemento anterior.

const whereAreYou = document.getElementById('where-are-you');
const parent = whereAreYou.parentNode;
const firstChildOfChild = whereAreYou.firstElementChild;
const firstChildOfParent = parent.firstElementChild;
const firstChildOfWhereAreYou = whereAreYou.firstElementChild;
const attention = whereAreYou.parentNode.innerText;
const thirdChildOfWhereAreTou = whereAreYou.nextElementSibling;
// const thirdChildOfParent = parent.childNodes[5];
const thirdChildOfParent = parent.lastElementChild.previousElementSibling;



parent.style.color = 'red';
firstChildOfChild.innerText = 'Hello'

console.log(thirdChildOfParent);