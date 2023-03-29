let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[2];
let indexOfPortfolio = menu[3];
menu.push('Projetos');

console.log(indexOfPortfolio);
console.log(menuServices);

for (let index = 1; index < menu.length; index += 1) {
    console.log(index + ' - ' + menu[index]); 
}