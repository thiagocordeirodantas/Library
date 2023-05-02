import fs from 'fs';
import chalk from "chalk";

const trataErro = (erro) => {
    console.log(erro)
    throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório'));
}

const pegaArquivo = (caminhoDoArquivo) => {
    const encoding = "UTF-8"
        fs.promises
            .readFile(caminhoDoArquivo,encoding)
            .then((texto) => console.log(chalk.green(texto)))
            .catch((erro) => trataErro(erro))
}

// const pegaArquivo = (caminho) => {
//     const encode = 'UTF-8';
//     fs.readFile(caminho,encode,(erro,texto) => {
//         if(erro) {
//             return trataErro(erro);
//         }
//         console.log(chalk.green(texto));
//     })

// }

 pegaArquivo('./arquivos/texto.md');