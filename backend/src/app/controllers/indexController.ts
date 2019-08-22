import { Request, Response } from 'express';

class IndexController {

    public index(req: Request, res: Response) {
        res.json({text: 'Nada por aquí xDDD'});
    }

}

export const indexController = new IndexController;