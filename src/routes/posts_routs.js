import express from 'express';
import { list_posts } from '../controllers/posts_controllers.js';

const routes = (app) => {
    app.use(express.json());

    app.get("/posts", list_posts);   
};

export default routes;