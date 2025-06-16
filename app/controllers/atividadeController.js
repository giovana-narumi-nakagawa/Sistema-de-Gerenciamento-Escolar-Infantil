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
    if (atividade) {
      res.json(atividade);
    } else {
      res.status(404).json({ error: 'Atividade não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar atividade' });
  }
}

export async function create(req, res) {
  try {
    const novaAtividade = await Atividade.create(req.body);
    res.status(201).json(novaAtividade);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar atividade' });
  }
}

export async function update(req, res) {
  try {
    const [updatedRows] = await Atividade.update(req.body, {
      where: { id: req.params.id }
    });

    if (updatedRows === 0) {
      return res.status(404).json({ error: 'Atividade não encontrada' });
    }

    const atividadeAtualizada = await Atividade.findByPk(req.params.id);
    res.json(atividadeAtualizada);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar atividade' });
  }
}

export async function remove(req, res) {
  try {
    const deletedRows = await Atividade.destroy({
      where: { id: req.params.id }
    });

    if (deletedRows === 0) {
      return res.status(404).json({ error: 'Atividade não encontrada' });
    }

    res.status(204).send(); // No content
  } catch (error) {
    res.status(400).json({ error: 'Erro ao deletar atividade' });
  }
}
