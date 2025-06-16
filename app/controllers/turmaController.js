import Turma from '../models/turmaModel.js';

export async function getAll(req, res) {
  try {
    const turmas = await Turma.findAll();
    res.json(turmas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar turmas' });
  }
}

export async function getById(req, res) {
  try {
    const turma = await Turma.findByPk(req.params.id);
    turma
      ? res.json(turma)
      : res.status(404).json({ error: 'Turma não encontrada' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar turma' });
  }
}

export async function create(req, res) {
  try {
    const nova = await Turma.create(req.body);
    res.status(201).json(nova);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar turma' });
  }
}

export async function update(req, res) {
  try {
    const id = req.params.id;
    const [updated] = await Turma.update(req.body, { where: { id } });
    if (updated) {
      const updatedTurma = await Turma.findByPk(id);
      res.json(updatedTurma);
    } else {
      res.status(404).json({ error: 'Turma não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar turma' });
  }
}
