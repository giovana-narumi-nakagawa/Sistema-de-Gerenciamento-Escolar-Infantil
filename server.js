import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Carrega variáveis de ambiente
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado ao MongoDB'))
.catch(err => console.error('❌ Erro ao conectar no MongoDB:', err));

// Middlewares globais
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Importação de rotas (com extensão .js obrigatória)
import alunoRoutes from './routes/alunoRoutes.js';
import usuarioRoutes from './routes/usuarioRoutes.js';
import turmaRoutes from './routes/turmaRoutes.js';
import atividadeRoutes from './routes/atividadeRoutes.js';
import chatbotRoutes from './routes/chatbotRoutes.js';
import responsavelRoutes from './routes/responsavelRoutes.js';
import presencaRoutes from './routes/presencaRoutes.js';

// Registro das rotas
app.use('/api/alunos', alunoRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/turmas', turmaRoutes);
app.use('/api/atividades', atividadeRoutes);
app.use('/api/chatbot', chatbotRoutes);
app.use('/api/responsaveis', responsavelRoutes);
app.use('/api/presencas', presencaRoutes);

// Rota base
app.get('/', (req, res) => {
  res.send('🎓 API da escola funcionando');
});

// Middleware de erro global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ erro: 'Erro interno do servidor' });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`🚀 Servidor rodando na porta ${port}`);
});
