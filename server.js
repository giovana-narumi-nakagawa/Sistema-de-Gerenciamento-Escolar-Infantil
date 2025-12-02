import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'app/views'));

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
app.use('/api/professores', professorRoutes);

import { Router } from 'express';
const router = Router();

router.get('/alunos', async (req, res) => {
  try {
    const response = await fetch("http://localhost:3000/api/alunos", {
      headers: { "Authorization": "none" }
    });
    const alunos = await response.json();
    res.render("alunos/list", { alunos });
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao buscar alunos");
  }
});

router.get('/alunos/create', (req, res) => {
  res.render("alunos/create");
});

router.post('/alunos/create', async (req, res) => {
  try {
    await fetch("http://localhost:3000/api/alunos", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'none' 
      },
      body: JSON.stringify(req.body)
    });
    res.redirect('/alunos');
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao criar aluno");
  }
});
router.get('/alunos/edit/:id', async (req, res) => {
  try {
    const response = await fetch(`http://localhost:3000/api/alunos/${req.params.id}`, {
      headers: { "Authorization": "none" }
    });
    const aluno = await response.json();
    res.render("alunos/edit", { aluno });
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao buscar aluno");
  }
});

router.post('/alunos/edit/:id', async (req, res) => {
  try {
    await fetch(`http://localhost:3000/api/alunos/${req.params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'none'
      },
      body: JSON.stringify(req.body)
    });
    res.redirect('/alunos');
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao atualizar aluno");
  }
});

app.use('/', router);

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
