const Aluno = require('../models/alunoModel');
import { findAll, findByPk, create } from '..app/models/alunoModel.js';
export async function getAll(req, res) {
  try {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar alunos' });
  }
}

export async function getById(req, res) {
  try {
    const aluno = await Aluno.findByPk(req.params.id);
    aluno ? res.json(aluno) : res.status(404).json({ error: 'Aluno não encontrado' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar aluno' });
  }
}

export async function create(req, res) {
  try {
    const novo = await Aluno.create(req.body);
    res.status(201).json(novo);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar aluno' });
  }
}

