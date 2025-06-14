import Usuario from '../models/usuarioModel.js';

export async function getAll(req, res) {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
}

export async function getById(req, res) {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    usuario
      ? res.json(usuario)
      : res.status(404).json({ error: 'Usuário não encontrado' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
}

export async function create(req, res) {
  try {
    const novo = await Usuario.create(req.body);
    res.status(201).json(novo);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar usuário' });
  }
}
