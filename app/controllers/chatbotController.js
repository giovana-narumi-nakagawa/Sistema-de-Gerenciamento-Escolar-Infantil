const Chatbot = require('../app/models/chatbotModel');

exports.getAll = async (req, res) => {
  try {
    const chatbots = await Chatbot.findAll();
    res.json(chatbots);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar chatbots' });
  }
};

exports.getById = async (req, res) => {
  try {
    const chatbot = await Chatbot.findByPk(req.params.id);
    chatbot ? res.json(chatbot) : res.status(404).json({ error: 'Chatbot não encontrado' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar chatbot' });
  }
};

exports.create = async (req, res) => {
  try {
    const novo = await Chatbot.create(req.body);
    res.status(201).json(novo);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar chatbot' });
  }
};