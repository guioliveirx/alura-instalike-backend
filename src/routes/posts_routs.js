import express from 'express';
import multer from "multer";
import { create_new_post, list_posts, upload_image } from '../controllers/posts_controllers.js';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

const routes = (app) => {
    app.use(express.json());
    // Rota para listar todos os posts
    app.get("/posts", list_posts);   
    // Rota para criar um novo post
    app.post("/posts", create_new_post);

    app.post("/upload", upload.single("image"), upload_image);
};

export default routes;