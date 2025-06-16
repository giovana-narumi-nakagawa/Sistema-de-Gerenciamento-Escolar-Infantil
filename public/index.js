import express from 'express';
import usuarioRoutes from '../routes/usuarioRoutes.js';
import responsavelRoutes from '../routes/responsavelRoutes.js';
import alunoRoutes from '../routes/alunoRoutes.js';
import chatbotRoutes from '../routes/chatbotRoutes.js';
import presencaRoutes from '../routes/presencaRoutes.js';
import turmaRoutes from '../routes/turmaRoutes.js';
import atividadeRoutes from '../routes/atividadeRoutes.js';

const app = express();

app.use(express.json());

app.use('/usuarios', usuarioRoutes);
app.use('/responsaveis', responsavelRoutes);
app.use('/alunos', alunoRoutes);
app.use('/chatbot', chatbotRoutes);
app.use('/presencas', presencaRoutes);
app.use('/turmas', turmaRoutes);
app.use('/atividades', atividadeRoutes);

export default app;
