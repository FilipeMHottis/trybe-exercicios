// Desafio 01
let number = 4;
let fatorial = 1;
for (let index = 1; index <= number; index += 1){
    fatorial *= index;
    console.log(number + "! " + number + ' * ' + index +' = ' + fatorial);
}

// Desafio 02
let word = 'tryber';

for (let index = (word.length) - 1; index !== -1; index -= 1){
    console.log(word[index]);
}

// Desafio 03
let array = ['java', 'javascript', 'python', 'html', 'css'];
let palavra = 0;
let maiorPalavra;
let menorPalavra;
for (let index = 0; index < array.length; index += 1){
    palavra = array[index].length;
    if (index === 0){
        maiorPalavra = array[index];
        menorPalavra = array[index];
    } else if (maiorPalavra.length < palavra){
        maiorPalavra = array[index];
    } else if (menorPalavra.length > palavra){
        menorPalavra= array[index]
    } 
}

console.log('Maior Palavra do Array é: ' + maiorPalavra);
console.log('Menor Palavra do Array é: ' + menorPalavra);