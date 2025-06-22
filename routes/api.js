import { Router } from 'express';

import alunoRoutes from './api/alunoRoutes.js';
import atividadeRoutes from './api/atividadeRoutes.js';
import chatbotRoutes from './api/chatbotRoutes.js';
import presencaRoutes from './api/presencaRoutes.js';
import professorRoutes from './api/professorRoutes.js';
import responsavelRoutes from './api/responsavelRoutes.js';
import turmaRoutes from './api/turmaRoutes.js';
import usuarioRoutes from './api/usuarioRoutes.js';

export default (function () {

    const router = Router();
    router.use('/', alunoRoutes);

    router.use('/', atividadeRoutes);

    router.use('/', chatbotRoutes);

    router.use('/', presencaRoutes);

    router.use("/", professorRoutes);

    router.use("/", responsavelRoutes);

    router.use("/", turmaRoutes);

    router.use("/", usuarioRoutes);

    return router;

})();