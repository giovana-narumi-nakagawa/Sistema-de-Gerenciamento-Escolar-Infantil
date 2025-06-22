import Professor from '../models/professorModel.js';

export async function getAll(req, res) {
  try {
    const professores = await Professor.findAll();
    res.json(professores);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar professores' });
  }
}

export async function getById(req, res) {
  try {
    const professor = await Professor.findByPk(req.params.id);
    professor
      ? res.json(professor)
      : res.status(404).json({ error: 'Professor não encontrado' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar professor' });
  }
}

export async function create(req, res) {
  try {
    const novo = await Professor.create(req.body);
    res.status(201).json(novo);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar professor' });
  }
}

export async function update(req, res) {
  try {
    const [updatedRows] = await Professor.update(req.body, {
      where: { id: req.params.id }
    });

    if (updatedRows === 0) {
      return res.status(404).json({ error: 'Professor não encontrado' });
    }

    const professorAtualizado = await Professor.findByPk(req.params.id);
    res.json(professorAtualizado);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar professor' });
  }
}
