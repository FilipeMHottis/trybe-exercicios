const geradoraDeEmail = (nome) => { 
    const email =  `${nome.toLowerCase().split(' ').join('_')}@trybe.com`;
    return {nome, email};
};

const newEmployees = (email) => {
    const employees = {
      id1: email('Pedro Guerra'),
      id2: email('Luiza Drumond'),
      id3: email('Carla Paiva'),
    }
    return employees;
};

console.log(newEmployees(geradoraDeEmail));
