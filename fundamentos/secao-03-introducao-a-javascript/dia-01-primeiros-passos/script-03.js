// if   ===     se
// else ===     se não

// if (condição) {
//     // codigos 
// } else if (codição){ 
//     // codigos
// } else {
//     // codigos
// }

// &&   ===     and
// ||   ===     or
// ==   ===     igual
// ===  ===     exatamente igual 

let nota1 = 65;
let nota2 = 70;
let nota3 = 35;
let media = (nota1 + nota2 + nota3) / 3;

if (media >= 80){
    console.log("Parabéns, você faz parte do grupo de pessoas aprovadas!");
} else if (media < 80 && media > 60){
    console.log("Você está na nossa lista de espera.")
} else {
    console.log("Infelizmente, você reprovou.")
}
