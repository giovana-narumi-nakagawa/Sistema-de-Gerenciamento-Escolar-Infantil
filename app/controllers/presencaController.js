import Presenca from '../models/presencaModel.js';

export async function getAll(req, res) {
  try {
    const presencas = await Presenca.findAll();
    res.json(presencas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar presenças' });
  }
}

export async function getById(req, res) {
  try {
    const presenca = await Presenca.findByPk(req.params.id);
    presenca
      ? res.json(presenca)
      : res.status(404).json({ error: 'Presença não encontrada' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar presença' });
  }
}

export async function create(req, res) {
  try {
    const nova = await Presenca.create(req.body);
    res.status(201).json(nova);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar presença' });
  }
}
