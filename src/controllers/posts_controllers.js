import { create_post, get_all_posts } from "../models/posts_model.js";

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