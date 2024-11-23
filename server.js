// Estou primeiro dando o nome usado das exportações (padrões ou nomeadas) e depois armazenando as importações do módulo "express" nessa instância.
import express from 'express';
import routes from './src/routes/posts_routs.js';


// Passo todos os dados armazenado da minha função que apelidei como "express" para minha variável "app". Com isso eu crio ou instâncio uma unidade de um servidor.
const app = express();

// Serve arquivos estáticos públicos
app.use(express.static("uploads"));

// Chamada uma função da pasta routes, que iremos utilizar para cuidar das rotas do servidor.
routes(app);

// Com o servidor criado, eu peço para ele ouvir todas as requisições que cheguem na porta 3000.
app.listen(3000, () => {
    console.log('Servidor escutando...');
});


