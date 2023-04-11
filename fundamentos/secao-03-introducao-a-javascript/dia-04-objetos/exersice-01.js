let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem-vinda, ' + info.personagem + '!');
  
info.recorrente = 'sim';

for (let key in info) {
    console.log(key);
}

for (let key in info) {
    console.log(info[key]);
}

let info2 = {
    personagem: 'Margarida e Tio Patinhas',
    origem: "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas',
    recorrente: 'Ambos recorrentes' // Atenção para essa última linha!
};

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
};

console.log("O livro favorito de" + leitor.nome + ' ' + leitor.sobrenome + "se chama '" + leitor['livrosFavoritos'][0]['titulo'] + "'.");

leitor['livrosFavoritos'][1] = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
};

console.log('Julia tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');