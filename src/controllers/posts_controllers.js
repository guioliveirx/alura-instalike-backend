import { get_all_posts } from "../models/posts_model.js";

export async function list_posts (req, res){
    const posts = await get_all_posts();
    res.status(200).json(posts);
};