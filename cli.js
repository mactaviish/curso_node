const pegarArquivo = require('./index');
const chalk = require('chalk');

const caminho = process.argv;

async function processaTexto(caminhoArquivo) {
    const resultado = await pegarArquivo(caminhoArquivo[2]);
    console.log(chalk.yellow('Lista de Links'), resultado);
}

processaTexto(caminho);