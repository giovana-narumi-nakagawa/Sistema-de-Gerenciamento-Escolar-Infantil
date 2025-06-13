const Turma = require('../models/turmaModel');

exports.getAll = async (req, res) => {
  try {
    const turmas = await Turma.findAll();
    res.json(turmas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar turmas' });
  }
};

exports.getById = async (req, res) => {
  try {
    const turma = await Turma.findByPk(req.params.id);
    turma ? res.json(turma) : res.status(404).json({ error: 'Turma não encontrada' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar turma' });
  }
};

exports.create = async (req, res) => {
  try {
    const nova = await Turma.create(req.body);
    res.status(201).json(nova);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar turma' });
  }
};