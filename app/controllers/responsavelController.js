import Responsavel from '../models/responsavelModel.js';

export async function getAll(req, res) {
  try {
    const responsaveis = await Responsavel.findAll();
    res.json(responsaveis);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar responsáveis' });
  }
}

export async function getById(req, res) {
  try {
    const responsavel = await Responsavel.findByPk(req.params.id);
    responsavel
      ? res.json(responsavel)
      : res.status(404).json({ error: 'Responsável não encontrado' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar responsável' });
  }
}

export async function create(req, res) {
  try {
    const novo = await Responsavel.create(req.body);
    res.status(201).json(novo);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar responsável' });
  }
}

export async function update(req, res) {
  try {
    const id = req.params.id;
    const [updated] = await Responsavel.update(req.body, { where: { id } });
    if (updated) {
      const updatedResponsavel = await Responsavel.findByPk(id);
      res.json(updatedResponsavel);
    } else {
      res.status(404).json({ error: 'Responsável não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar responsável' });
  }
}
