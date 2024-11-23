import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/db_config.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Quando acessada a rota "/api" eu solicito que meu servidor pegue uma resposta e exiba na tela. 
export async function get_all_posts(){
    const db = conexao.db("imersao-instabytes");
    const collection = db.collection("posts");
    return collection.find().toArray();
}

export async function create_post(new_post){
    const db = conexao.db("imersao-instabytes");
    const collection = db.collection("posts");
    return collection.insertOne(new_post);
}

export async function update_post(id, post){
    const db = conexao.db("imersao-instabytes");
    const collection = db.collection("posts");
    // Pega o valor do ID e armazena em um objeto que o MongoDB entende.
    const object_id = ObjectId.createFromHexString(id);
    return collection.updateOne({
        _id: new ObjectId(object_id)
    },{
        $set: post
    });
}