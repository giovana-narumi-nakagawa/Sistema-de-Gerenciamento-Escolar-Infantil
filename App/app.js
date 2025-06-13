import express from 'express';
import dotenv from 'dotenv';
import alunoRoutes from './routes/alunoRoutes.js';
import atividadeRoutes from './routes/atividadeRoutes.js';
import chatbotRoutes from './routes/chatbotRoutes.js';
import presencaRoutes from './routes/presencaRoutes.js';
import responsavelRoutes from './routes/responsavelRoutes.js';
import turmaRoutes from './routes/turmaRoutes.js';
import usuarioRoutes from './routes/usuarioRoutes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' assert { type: "json" };

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use('/alunos', alunoRoutes);
app.use('/atividades', atividadeRoutes);
app.use('/chatbot', chatbotRoutes);
app.use('/presencas', presencaRoutes);
app.use('/responsaveis', responsavelRoutes);
app.use('/turmas', turmaRoutes);
app.use('/usuarios', usuarioRoutes);

app.get('/', (req, res) => {
    res.send('API Sistema de Gerenciamento Escolar Infantil rodando...');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
