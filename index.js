import fs from 'fs';
import chalk from "chalk";

function trataErro (erro) {
    console.log(erro)
    throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório'));
}

async function pegaArquivo (caminhoDoArquivo) {
    try {
        const encoding = "UTF-8";
        const textoResposta = await fs.promises.readFile(caminhoDoArquivo,encoding)
        console.log(chalk.green(textoResposta));
    } catch(erro) {
        trataErro(erro)
       
    }
    
}

//async await

// const pegaArquivo = (caminhoDoArquivo) => {
//     const encoding = "UTF-8"
//         fs.promises
//             .readFile(caminhoDoArquivo,encoding)
//             .then((texto) => console.log(chalk.green(texto)))
//             .catch((erro) => trataErro(erro))
// }


 pegaArquivo('./arquivos/texto.md');


 

