import Chatbot from '../models/chatbotModel.js';

export async function getAll(req, res) {
  try {
    const chatbots = await Chatbot.findAll();
    res.json(chatbots);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar chatbots' });
  }
}

export async function getById(req, res) {
  try {
    const chatbot = await Chatbot.findByPk(req.params.id);
    chatbot
      ? res.json(chatbot)
      : res.status(404).json({ error: 'Chatbot não encontrado' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar chatbot' });
  }
}

export async function create(req, res) {
  try {
    const novo = await Chatbot.create(req.body);
    res.status(201).json(novo);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar chatbot' });
  }
}

export async function update(req, res) {
  try {
    const id = req.params.id;
    const [updated] = await Chatbot.update(req.body, { where: { id } });
    if (updated) {
      const updatedChatbot = await Chatbot.findByPk(id);
      res.json(updatedChatbot);
    } else {
      res.status(404).json({ error: 'Chatbot não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar chatbot' });
  }
}
