const express = require('express');
const app = express();

app.use(express.json());

app.use('/usuarios', require('./routes/usuarioRouter'));
app.use('/responsaveis', require('./routes/responsavelRouter'));
app.use('/alunos', require('./routes/alunoRouter'));
app.use('/chatbot', require('./routes/chatbotRouter'));
app.use('/presencas', require('./routes/presencaRouter'));
app.use('/turmas', require('./routes/turmaRouter'));
app.use('/atividades', require('./routes/atividadeRouter'));

module.exports = app;
