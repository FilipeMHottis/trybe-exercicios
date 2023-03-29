let a = 80;
let b = 40;
let c = 60;

let checador = a > 0 && b > 0 && c > 0;

if (checador) {
    if (a+b+c === 180) {
        console.log(true);
    } else {
        console.log(false)
    }
} else {
    console('Erro!')
}