// Etapa 01 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers);

// Etapa 02
let soma = 0;
for (let n of numbers){
    soma += n;
}
console.log('A soma dos valores acima é ' + soma);

// Etapa 03
let mediaArtimedica = soma / numbers.length;
console.log('A media ariticimedica é ' + mediaArtimedica);

// Etapa 04
// Com base no código que acabou de gerar, faça com que: caso o valor 
// final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja 
// maior que 20, imprima a mensagem “Valor menor ou igual a 20”.
if (mediaArtimedica > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual que 20");
}

// Etapa 05 e 07
// Maior numero do arry
// Menor Numero
let maiorNumber = 0;
let menorNumber = 0;
for (let index = 0; index < numbers.length; index += 1){
    if (index === 0){
        maiorNumber = numbers[index];
        menorNumber = numbers[index];
    } else if (maiorNumber < numbers[index]){
        maiorNumber = numbers[index];
    } else if (menorNumber > numbers[index]){
        menorNumber = numbers[index];
    }
}
console.log('O maior numero do array é: ' + maiorNumber);
console.log('O menor numero do array é: ' + menorNumber);

// Etapa 06
// Numeros impares
let contadorImpar = 0;
let impares = [];

for (let n of numbers){
    if (n % 2 !== 0){
        contadorImpar += 1;
        impares.push(n);
    }
}

if (contadorImpar === 0) {
    console.log('Não a nehum numero impar.');
} else {
    console.log('Tem ' + contadorImpar + ' numeros impares e eles são: ');
    console.log(impares);
}

// Etapa 08 e 09
let div = 0;
for (let index = 1; index <= 25; index += 1) {
    div = index / 2;
    console.log(index + ' / ' + '2 = ' + div);
}