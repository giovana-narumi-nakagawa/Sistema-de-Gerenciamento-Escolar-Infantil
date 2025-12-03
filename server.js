import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'app/views'));

// ---------------- ARMAZENAMENTO EM MEMÓRIA ----------------
let alunos = [
  { id: 1, nome: 'João' },
  { id: 2, nome: 'Maria' }
];

// ---------------- ROTAS API ----------------
import { Router } from 'express';
const alunoRoutes = Router();

// GET /api/alunos → lista todos
alunoRoutes.get('/', (req, res) => {
  res.json(alunos);
});

// POST /api/alunos → cadastra novo
alunoRoutes.post('/', (req, res) => {
  const novoAluno = {
    id: alunos.length + 1,
    ...req.body
  };
  alunos.push(novoAluno);
  res.status(201).json({ message: 'Aluno cadastrado com sucesso!', aluno: novoAluno });
});

// PUT /api/alunos/:id → atualiza
alunoRoutes.put('/:id', (req, res) => {
  const { id } = req.params;
  const index = alunos.findIndex(a => a.id == id);
  if (index === -1) return res.status(404).json({ message: 'Aluno não encontrado' });

  alunos[index] = { id: Number(id), ...req.body };
  res.json({ message: `Aluno ${id} atualizado com sucesso!`, aluno: alunos[index] });
});

// DELETE /api/alunos/:id → remove
alunoRoutes.delete('/:id', (req, res) => {
  const { id } = req.params;
  alunos = alunos.filter(a => a.id != id);
  res.json({ message: `Aluno ${id} removido com sucesso!` });
});

app.use('/api/alunos', alunoRoutes);

// ---------------- ROTAS FRONT ----------------
const router = Router();

router.get('/alunos', async (req, res) => {
  try {
    const response = await fetch("http://localhost:3000/api/alunos");
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
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    res.redirect('/alunos');
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao criar aluno");
  }
});

app.use('/', router);

app.get('/', (req, res) => {
  res.send('API da escola funcionando 🚀');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
