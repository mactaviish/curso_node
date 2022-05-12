const pegarArquivo = require('./index');
const validaURLs = require('./http-validacao');
const chalk = require('chalk');

const caminho = process.argv;

async function processaTexto(caminhoArquivo) {
    const resultado = await pegarArquivo(caminhoArquivo[2]);
    if (caminho[3] === 'validar') {
        let urlsValidadas = await validaURLs(resultado);
        console.log(chalk.green('Lista de Links Válidos:'), urlsValidadas);
    } else {
        console.log(chalk.yellow('Lista de Links'), resultado);
    }
}

processaTexto(caminho);