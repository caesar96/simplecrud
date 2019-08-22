import { Request, Response } from 'express';


import db from '../models/dbConnection';

class PostsController {

    public async readAll(req: Request, res: Response): Promise<void> {
        const posts = await db.query('SELECT * FROM posts');

        for (let post in posts) {
            if (posts[post].content.length > 50)
                posts[post].content = posts[post].content.substring(0, 40) + ' ...';
        }

        res.json(posts);
    }

    public async readById(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const posts = await db.query('SELECT * FROM posts WHERE id = ?', [id]);
        console.log(posts.length);
        if (posts.length > 0) {
            return res.json(posts[0]);
        }
        res.status(404).json({ error: "El Post no existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await db.query('INSERT INTO posts set ?', [req.body]);
        res.json({ message: 'Post guardado correctamente' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldPosts = req.body;
        await db.query('UPDATE posts set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "Post actualizado correctamente" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('DELETE FROM posts WHERE id = ?', [id]);
        res.json({ message: "El post fue eliminado correctamente" });
    }
}

const postsController = new PostsController;
export default postsController;