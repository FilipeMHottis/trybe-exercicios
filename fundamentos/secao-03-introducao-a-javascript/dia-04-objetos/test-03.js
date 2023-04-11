let student = {};
//  nome, e-mail, telefone, GitHub e LinkedIn, usando os métodos abordados no conteúdo.
 

function addProperty(object, key, value) {
    object[key] = value;
};

addProperty(student, 'fullName', 'Filipe M. Hottis');
student.email = 'lipehottis@gmail.com';
student.github = 'https://github.com/FilipeMHottis';
student.linkedin = 'https://www.linkedin.com/in/lipehottis/';

console.table(student);