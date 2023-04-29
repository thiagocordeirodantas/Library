import fs from 'fs';
import chalk from "chalk";

const trataErro = (erro) => {
    console.log(erro)
    throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório'));
}

const pegaArquivo = (caminho) => {
    const encode = 'UTF-8';
    fs.readFile(caminho,encode,(erro,texto) => {
        if(erro) {
            return trataErro(erro);
        }
        console.log(chalk.green(texto));
    })

}

 pegaArquivo('./arquivos/texto.md');