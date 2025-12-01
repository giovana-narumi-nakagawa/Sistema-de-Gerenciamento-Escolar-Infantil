import { Router } from 'express';
import express from 'express';
import path from 'path';
import swaggerUi from 'swagger-ui-express';

import ListPublicFilesController from '../app/Http/Controllers/ListPublicFilesController.js';
import DateController from '../app/Http/Controllers/DateController.js';
import swagger from '../config/swagger.js';
import CONSTANTS from '../config/constants.js'; 

export default (function () {

    const router = Router();

   
    router.use(express.static(path.join(CONSTANTS.DIR, 'public')));

    
    router.get('/', ListPublicFilesController);

    router.use('/docs', swaggerUi.serve, swaggerUi.setup(swagger));

    router.get('/date', DateController);

    router.get('/env', (request, response) => {
        return response.status(CONSTANTS.HTTP.SUCCESS).json({
            env: process.env,
            CONSTANTS: globalThis.CONSTANTS
        });
    });

    
    router.get('/alunos/view', (req, res) => {
        const alunos = [
            { id: 1, nome: "João", idade: 6, turma: "A" },
            { id: 2, nome: "Maria", idade: 5, turma: "B" },
            { id: 3, nome: "Pedro", idade: 7, turma: "A" }
        ];
        res.render("alunos/list", { alunos: alunos || [] });
    });

   
    router.get('/alunos/create', (req, res) => {
        res.render("alunos/create");
    });

    
    router.get('/alunos/edit/:id', (req, res) => {
        const aluno = { id: req.params.id, nome: "Aluno Exemplo", idade: 6, turma: "A" };
        res.render("alunos/edit", { aluno });
    });

    return router;

})();
