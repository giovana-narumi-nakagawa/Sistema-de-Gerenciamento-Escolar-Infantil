import express from 'express';
import dotenv from 'dotenv';
import alunoRoutes from '../routes/alunoRoutes.js';
import atividadeRoutes from '../routes/atividadeRoutes.js';
import chatbotRoutes from '../routes/chatbotRoutes.js';
import presencaRoutes from '../routes/presencaRoutes.js';
import responsavelRoutes from '../routes/responsavelRoutes.js';
import turmaRoutes from '../routes/turmaRoutes.js';
import usuarioRoutes from '../routes/usuarioRoutes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swaggerJson.js';

dotenv.config();

const app = express();

export default app;
