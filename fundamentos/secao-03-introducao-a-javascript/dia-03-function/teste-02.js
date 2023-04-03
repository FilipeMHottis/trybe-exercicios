let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// escreva aqui sua função
function addName(name){
    if (typeof name === 'string'){
        clientesTrybeBank.push(name);
        return console.log(name + ' adcionado a lista de clientes!');
    } else {
        return console.log('Erro!');
    }
}
