let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function testString(name){
    if (typeof name === 'string') {
        return true
    } else {
        return false
    }
}

function clienteExiste(cliente){
    if (testString(cliente)){
        for (let index = 0; index < clientesTrybeBank.length; index += 1) {
            if (cliente === clientesTrybeBank[index]) {
                return index
            } else {
                return false
            }
        }
    } else {
        return 'Erro!!!'
    }
}

function removeCliente(cliente) {
    let position = clienteExiste(cliente);

    if (position !== false){
        clientesTrybeBank.splice(position, 1);
        return 'Cliente deletado!'
    } else {
        return 'Erro!'
    }
}
