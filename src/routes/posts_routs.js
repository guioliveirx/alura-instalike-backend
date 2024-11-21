import express from 'express';

const routes = (app) => {
    app.use(express.json());

    app.get("/posts", async (req, res) => {
        const posts = await get_all_posts();
        res.status(200).json(posts);
    });   
};

export default routes;