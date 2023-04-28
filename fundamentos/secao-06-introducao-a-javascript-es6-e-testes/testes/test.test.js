// poderia ser .spec.js
// toBe = Valor Unico
// toEqual = Valor em array ou objeto

const sum = require('./script');

test('Verifica se a soma de 1 e 2 é 3', () => {
    expect(sum(1, 2)).toBe(3);
})

describe('Verifica se a soma', () => {
    it('1 + 2 = 3', () => {
        expect(sum(1, 2)).toBe(3);
    })
    it('2 + 2 = 4', () => {
        expect(sum(2, 2)).toBe(4);
    })
})