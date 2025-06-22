import { Router } from 'express';
import express from 'express';

import api from './api.js';
import web from './web.js';
import middleware from '../app/middlewares/auth.js';
import usuarioController from '../app/Http/Controllers/usuarioController.js';
import fileUpload from 'express-fileupload';


export default (function () {

    const router = Router();

    router.use(express.json());

    router.use(express.urlencoded({ extended: true }));

    router.use(fileUpload());

    router.use('/api', JwtAuthMiddleware, LogMiddleware, api);
    router.post('/login', LoginJwtController);

    router.use('/', web);

    router.use((request, response) => {
        response.status(CONSTANTS.HTTP.NOT_FOUND).json({ error: "Not found" });
    });

    return router;

})();