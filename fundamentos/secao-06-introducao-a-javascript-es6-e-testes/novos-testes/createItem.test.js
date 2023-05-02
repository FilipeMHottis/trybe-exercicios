const createItem = require('./createItem');

describe('a função createItem', () => {
  it('cria um item válido', () => {
    const variavel = createItem('banana', 'kg', 1.99, 20);
    const result = { name: 'banana', unit: 'kg', price: 1.99, quantity: 20 };

    expect(variavel).toEqual(result);
    });
  it('utiliza zero como quantidade padrão', () => {
    const variavel = createItem('banana', 'kg', 1.99);
    const result = { name: 'banana', unit: 'kg', price: 1.99, quantity: 0 };

    expect(variavel).toEqual(result);
  });
  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => createItem()).toThrow();
  });
  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => createItem(21, 'kg', 1.99)).toThrow('O nome do item deve ser uma string');
  });
  it('Lança um erro se o preço é negativo', () => {
    expect(() => createItem('banana', 'kg', -1)).toThrow('O preço do item deve ser maior que zero');
  });
  it('Lança um erro se o preço é zero', () => {
    expect(() => createItem('banana', 'kg', 0)).toThrow('O preço do item deve ser maior que zero');
  });
});