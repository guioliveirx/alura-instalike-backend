import express from 'express';
import multer from "multer";
import { create_new_post, list_posts } from '../controllers/posts_controllers.js';

const routes = (app) => {
    app.use(express.json());
    // Rota para listar todos os posts
    app.get("/posts", list_posts);   
    // Rota para criar um novo post
    app.post("/posts", create_new_post);
};

export default routes;