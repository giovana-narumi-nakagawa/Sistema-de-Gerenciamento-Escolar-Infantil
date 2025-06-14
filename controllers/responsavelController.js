const Responsavel = require('../models/responsavelModel');

exports.getAll = async (req, res) => {
  try {
    const responsaveis = await Responsavel.findAll();
    res.json(responsaveis);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar responsáveis' });
  }
};

exports.getById = async (req, res) => {
  try {
    const responsavel = await Responsavel.findByPk(req.params.id);
    responsavel ? res.json(responsavel) : res.status(404).json({ error: 'Responsável não encontrado' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar responsável' });
  }
};

exports.create = async (req, res) => {
  try {
    const novo = await Responsavel.create(req.body);
    res.status(201).json(novo);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar responsável' });
  }
};