const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
];

people.sort( (element1, element2) => {
    const age1 = element1.age;
    const age2 = element2.age;

    return age1 - age2;
} );
 
console.log(people);
