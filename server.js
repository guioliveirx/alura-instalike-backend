// Estou primeiro dando o nome usado das exportações (padrões ou nomeadas) e depois armazenando as importações do módulo "express" nessa instância.
import express from 'express';
import conectarAoBanco from './src/config/db_config.js';

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Passo todos os dados armazenado da minha função que apelidei como "express" para minha variável "app". Com isso eu crio ou instâncio uma unidade de um servidor.
const app = express();

// Com o servidor criado, eu peço para ele ouvir todas as requisições que cheguem na porta 3000.
app.listen(3000, () => {
    console.log('Servidor escutando...');
});

// Quando acessada a rota "/api" eu solicito que meu servidor pegue uma resposta e exiba na tela. 
async function get_all_posts(){
    const db = conexao.db("imersao-instabytes");
    const collection = db.collection("posts");
    return collection.find().toArray();
}

