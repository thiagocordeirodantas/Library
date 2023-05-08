import chalk from "chalk";
import fs from 'fs';
import pegaArquivo from "./index.js";

function imprime(resultado,identificador = ''){
    console.log(resultado,identificador)
}

const caminho = process.argv;

async function processaTexto(argumentos){

    try {
        fs.lstatSync(caminho);  
    } catch(erro) {
        if(erro.code === 'ENOENT'){
            console.log('arquivo ou diretorio nao existe')
            return
        }
    }



    const caminho = argumentos[2];

    if(fs.lstatSync(caminho).isFile()){
        const resultado = await pegaArquivo(caminho);
       imprime(resultado)
    } else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho)
        arquivos.forEach(async (nomeDeArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`)
            imprime(lista,nomeDeArquivo)
        })
    }
}
    
    
processaTexto(caminho)