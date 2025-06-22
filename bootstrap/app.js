import express from 'express';
import dotenv from 'dotenv';
import alunoRoutes from '../routes/api/alunoRoutes.js';
import atividadeRoutes from '../routes/api/atividadeRoutes.js';
import chatbotRoutes from '../routes/api/chatbotRoutes.js';
import presencaRoutes from '../routes/api/presencaRoutes.js';
import responsavelRoutes from '../routes/api/responsavelRoutes.js';
import turmaRoutes from '../routes/api/turmaRoutes.js';
import usuarioRoutes from '../routes/api/usuarioRoutes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swaggerJson.js';
import fileUpload from 'express-fileupload';

app.use(fileUpload());
dotenv.config();

const app = express();

export default app;
