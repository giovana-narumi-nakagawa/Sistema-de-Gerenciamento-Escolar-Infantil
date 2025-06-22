import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());

import alunoRoutes from './routes/api/alunoRoutes.js';
import usuarioRoutes from './routes/api/usuarioRoutes.js';
import turmaRoutes from './routes/api/turmaRoutes.js';
import atividadeRoutes from './routes/api/atividadeRoutes.js';
import chatbotRoutes from './routes/api/chatbotRoutes.js';
import responsavelRoutes from './routes/api/responsavelRoutes.js';
import presencaRoutes from './routes/api/presencaRoutes.js';
import professorRoutes from './routes/api/professorRoutes.js';

app.use('/api/alunos', alunoRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/turmas', turmaRoutes);
app.use('/api/atividades', atividadeRoutes);
app.use('/api/chatbot', chatbotRoutes);
app.use('/api/responsaveis', responsavelRoutes);
app.use('/api/presencas', presencaRoutes);

app.get('/', (req, res) => {
  res.send('API da escola funcionando');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ erro: 'Erro interno do servidor' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});