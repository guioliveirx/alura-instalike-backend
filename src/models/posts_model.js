import conectarAoBanco from "../config/db_config.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Quando acessada a rota "/api" eu solicito que meu servidor pegue uma resposta e exiba na tela. 
export async function get_all_posts(){
    const db = conexao.db("imersao-instabytes");
    const collection = db.collection("posts");
    return collection.find().toArray();
}
