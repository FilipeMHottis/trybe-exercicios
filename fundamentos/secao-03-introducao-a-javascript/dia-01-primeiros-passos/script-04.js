// switch / Case
// Igual a if, mas usado para quando temos diversas codições

let status = 'aprovado';

switch (status){
    case 'aprovada':
        console.log();
        break;

    case 'lista':
        console.log("Parabéns, você está no grupo de pessoas aprovadas!");
        break;
    
    case 'reprovado':
        console.log("Você está na nossa lista de espera.");
        break;

    default:
        console.log( "Informação incorreta.");
        break;
}