const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;

    while ((temp = regex.exec(texto)) !== null) {
        arrayResultados.push({ [temp[1]]: temp[2] });
    }
    return arrayResultados.length === 0 ? 'Não há links!' : arrayResultados;
}

async function pegarArquivo(caminhoArquivo) {
    const encoding = 'utf-8';
    const caminhoAbsoluto = path.join(__dirname, '..', caminhoArquivo);
    try {
        const arquivos = await fs.promises.readdir(caminhoAbsoluto, { encoding });
        const result = await Promise.all(arquivos.map(async (arquivo) => {
            const localArquivo = `${caminhoAbsoluto}/${arquivo}`;
            const texto = await fs.promises.readFile(localArquivo, encoding);
            return extraiLinks(texto);
        }));
        return result;
    } catch (error) {
        tratarErros
    }
}

function tratarErros(error) {
    throw new Error(chalk.red.bold(error));
}

module.exports = pegarArquivo;