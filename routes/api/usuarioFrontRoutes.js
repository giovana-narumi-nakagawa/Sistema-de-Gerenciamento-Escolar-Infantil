import { Router } from 'express';
const router = Router();
import fetch from 'node-fetch';

// LISTA TODOS OS USUÁRIOS
router.get('/usuarios', async (req, res) => {
  try {
    const response = await fetch("http://localhost:3000/api/usuarios", {
      headers: { "Authorization": "none" }
    });

    const usuarios = await response.json();
    res.render("usuarios/list", { usuarios });
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao buscar usuários");
  }
});

// FORMULÁRIO DE CRIAÇÃO
router.get('/usuarios/create', (req, res) => {
  res.render("usuarios/create");
});

// ENVIO DO FORMULÁRIO
router.post('/usuarios/create', async (req, res) => {
  try {
    await fetch("http://localhost:3000/api/usuarios", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": "none"
      },
      body: JSON.stringify(req.body)
    });

    res.redirect("/usuarios");

  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao criar usuário");
  }
});

export default router;
