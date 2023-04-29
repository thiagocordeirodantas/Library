import fs from 'fs';
import chalk from "chalk";

const pegaArquivo = (caminho) => {
    const encode = 'UTF-8'
    fs.readFile(caminho,encode, (_, texto) => {
        console.log(chalk.green(texto))
    })
    
}

pegaArquivo('./arquivos/texto.md')