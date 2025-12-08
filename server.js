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
  { id: 1, nome: 'João', idade: 6 },
  { id: 2, nome: 'Maria', idade: 86 }
];

let usuarios = [
  { id: 1, nome: "Admin", email: "admin@teste.com" },
  { id: 2, nome: "Professor", email: "prof@teste.com" }
];

// ---------------- ROTAS API ALUNOS ----------------
import { Router } from 'express';
const alunoRoutes = Router();

alunoRoutes.get('/', (req, res) => {
  res.json(alunos);
});

alunoRoutes.post('/', (req, res) => {
  const novo = { id: alunos.length + 1, ...req.body };
  alunos.push(novo);
  res.status(201).json({ message: 'Aluno criado', aluno: novo });
});

alunoRoutes.put('/:id', (req, res) => {
  const { id } = req.params;
  const index = alunos.findIndex(a => a.id == id);
  if (index === -1) return res.status(404).json({ message: 'Aluno não encontrado' });

  alunos[index] = { id: Number(id), ...req.body };
  res.json({ message: 'Aluno atualizado', aluno: alunos[index] });
});

alunoRoutes.delete('/:id', (req, res) => {
  alunos = alunos.filter(a => a.id != req.params.id);
  res.json({ message: 'Aluno removido' });
});

app.use('/api/alunos', alunoRoutes);

// ---------------- ROTAS API USUÁRIOS ----------------
const usuarioRoutes = Router();

usuarioRoutes.get('/', (req, res) => {
  res.json(usuarios);
});

usuarioRoutes.post('/', (req, res) => {
  const novo = { id: usuarios.length + 1, ...req.body };
  usuarios.push(novo);
  res.status(201).json({ message: 'Usuário criado', usuario: novo });
});

usuarioRoutes.put('/:id', (req, res) => {
  const { id } = req.params;
  const index = usuarios.findIndex(u => u.id == id);
  if (index === -1) return res.status(404).json({ message: 'Usuário não encontrado' });

  usuarios[index] = { id: Number(id), ...req.body };
  res.json({ message: 'Usuário atualizado', usuario: usuarios[index] });
});

usuarioRoutes.delete('/:id', (req, res) => {
  usuarios = usuarios.filter(u => u.id != req.params.id);
  res.json({ message: 'Usuário removido' });
});

app.use('/api/usuarios', usuarioRoutes);

// ---------------- ROTAS FRONT ----------------
const router = Router();

// ---- ALUNOS (FRONT) ----
router.get('/alunos', async (req, res) => {
  const response = await fetch("http://localhost:3000/api/alunos");
  const alunos = await response.json();
  res.render("alunos/list", { alunos });
});

router.get('/alunos/create', (req, res) => {
  res.render("alunos/create");
});

router.post('/alunos/create', async (req, res) => {
  await fetch("http://localhost:3000/api/alunos", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req.body)
  });
  res.redirect('/alunos');
});

// ---- USUÁRIOS (FRONT) ----
router.get('/usuarios', async (req, res) => {
  const response = await fetch("http://localhost:3000/api/usuarios");
  const usuarios = await response.json();
  res.render("usuarios/list", { usuarios });
});

router.get('/usuarios/create', (req, res) => {
  res.render("usuarios/create");
});

router.post('/usuarios/create', async (req, res) => {
  await fetch("http://localhost:3000/api/usuarios", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req.body)
  });
  res.redirect('/usuarios');
});

app.use('/', router);

// ---------------- HOME ----------------
app.get('/', (req, res) => {
  res.send('API da escola funcionando 🚀');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
