let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// escreva aqui sua função
function subName(name){

    if (typeof name === 'string'){
        for (index = 0; index < clientesTrybeBank.length; index += 1){
            if (name === clientesTrybeBank[index]){
                clientesTrybeBank.splice(index, 1);
                return console.log('O nome ' + name + ' foi deletado!')
            }
        }
    } else {
        return console.log('Erro!');
    }
}
