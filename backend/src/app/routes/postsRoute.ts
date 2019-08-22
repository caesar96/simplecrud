import express, { Router } from 'express';

import postsController from '../controllers/postsController';

class PostsRoutes {

    router: Router = Router();

    constructor() {
        this.routes();
    }

    routes() {
        this.router.post('/', postsController.create);
        this.router.get('/', postsController.readAll);
        this.router.get('/:id', postsController.readById);        
        this.router.put('/:id', postsController.update);
        this.router.delete('/:id', postsController.delete);
    }

}

export default new PostsRoutes().router;

