const Usuario = require('../models/usuarioModel');

exports.getAll = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
};

exports.getById = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    usuario ? res.json(usuario) : res.status(404).json({ error: 'Usuário não encontrado' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
};

exports.create = async (req, res) => {
  try {
    const novo = await Usuario.create(req.body);
    res.status(201).json(novo);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar usuário' });
  }
};