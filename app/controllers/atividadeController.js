import Atividade from '../models/atividadeModel.js';

export async function getAll(req, res) {
  try {
    const atividades = await Atividade.findAll();
    res.json(atividades);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar atividades' });
  }
}

export async function getById(req, res) {
  try {
    const atividade = await Atividade.findByPk(req.params.id);
    atividade ? res.json(atividade) : res.status(404).json({ error: 'Atividade não encontrada' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar atividade' });
  }
}

export async function create(req, res) {
  try {
    const nova = await Atividade.create(req.body);
    res.status(201).json(nova);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar atividade' });
  }
}
