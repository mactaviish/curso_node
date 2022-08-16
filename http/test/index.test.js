const pegarArquivo = require('../index');

const expectResult = [
    {
        "FileList": "https://developer.mozilla.org/pt-BR/docs/Web/API/FileList"
    }
]


describe('pegarArquivo::', () => {
    it('deve ser uma função', () => {
        expect(typeof pegarArquivo).toBe('function');
    })
    it('deve pegar arquivos', async () => {
        const result = await pegarArquivo('./test/arquivos/texto.md');
        expect(result).toEqual(expectResult);
    })
});