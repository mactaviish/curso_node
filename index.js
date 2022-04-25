const chalk = require('chalk');
const fs = require('fs');

// 1
// function pegarArquivo(caminhoArquivo) {
//     fs.readFile(caminhoArquivo, encoding, (erro, texto) => {
//         if (erro) {
//             tratarErros(erro);
//             // console.log(chalk.bold.red(`Houve um erro na busca pelo seu arquivo.\n{Error: ${erro.errno} | Code: ${erro.code}}`));
//         } else {
//             console.log(chalk.green(texto));
//         }
//     });
// }
// 2
// function pegarArquivo(caminhoArquivo) {
//     fs.promises
//         .readFile(caminhoArquivo, encoding)
//         .then((texto) => {chalk.green.bold(console.log('deu boa'))})
//         .catch((erro) => {chalk.red.bold(tratarErros(erro))});
// }

function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;

    while ((temp = regex.exec(texto)) !== null) {
        arrayResultados.push({ [temp[1]]: temp[2] });
    }
    return arrayResultados.length === 0 ? 'Não há links!' : arrayResultados;
}

function tratarErros(erro) {
    throw new Error(chalk.red.bold(erro));
}

async function pegarArquivo(caminhoArquivo) {
    const encoding = 'utf-8';
    try {
        const texto =  await fs.promises.readFile(caminhoArquivo, encoding);
        return extraiLinks(texto);
    } catch (error) {
        tratarErros(error);
    }
}

module.exports = pegarArquivo;