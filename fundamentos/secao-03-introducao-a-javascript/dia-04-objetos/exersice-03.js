let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};
  
let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};
  
let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

function addProperty(object, key, value) {
    object[key] = value;
};

function printKeys(obj){
    for (let key in obj) {
        console.log(key)
    }
};

function sizeObj(obj){
    return Object.keys(obj).length
};

function valoresObj(obj){
    return Object.values(obj)
};

function numberStudent(obj){
    let n = 0;
    for (let key in obj){
        n += obj[key]['numeroEstudantes'];
    }
    return n
};

function getValueByNumber(obj, position){}


let allLessons = Object.assign({}, {
    lesson1,
    lesson2,
    lesson3
});

// addProperty(lesson2, 'turno', 'noite');
// printKeys(lesson2);
// console.log(sizeObj(lesson2));
// console.log(valoresObj(lesson2));
// console.log(allLessons);
// console.log(numberStudent(allLessons));