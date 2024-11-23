import fs from "fs";
import { create_post, get_all_posts, update_post } from "../models/posts_model.js";
import gerarDescricaoComGemini from "../services/gemini_service.js";

export async function list_posts (req, res){
    const posts = await get_all_posts();
    res.status(200).json(posts);
};

export async function create_new_post(req, res){
    const new_post = req.body;

    try {
        const post_created = await create_post(new_post);
        res.status(201).json(post_created);
    } catch(error) {
        console.error(error.message);
        res.status(500).json({"Erro": "Falha na requisição"});
    }
}

export async function upload_image(req, res){
    const new_post = {
        descricao: "",
        imagem_url: req.file.originalname,
        texto_alt: ""
    };

    try {
        const post_created = await create_post(new_post);
        const image_updated = `uploads/${post_created.insertedId}.png`;
        fs.renameSync(req.file.path, image_updated);
        res.status(201).json(post_created);
    } catch(error) {
        console.error(error.message);
        res.status(500).json({"Erro": "Falha na requisição"});
    }
}

export async function update_new_post(req, res){
    const id = req.params.id;
    const url_image = `http://localhost:3000/${id}.png`;
    try {
        const image_buffer = fs.readFileSync(`uploads/${id}.png`);
        const descricao = await gerarDescricaoComGemini(image_buffer);
        const post = {
            descricao: descricao,
            imagem_url: url_image,
            texto_alt: req.body.alt
        }
        const post_updated = await update_post(id, post);
        res.status(201).json(post_updated);
    } catch(error) {
        console.error(error.message);
        res.status(500).json({"Erro": "Falha na requisição"});
    }
}