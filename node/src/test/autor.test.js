import Autor from '../models/autor.js';

describe('Teste dos Autores', () => {
  it('Deve criar um novo Autor', () => {
    const reqBody = '{"nome": "Autor Teste", "nacionalidade": "Brasileiro"}';
    const autor = new Autor(reqBody);

    expect(autor.nome).toBe('Autor Teste');
    expect(autor.nacionalidade).toBe('Brasileiro');
  });
});
