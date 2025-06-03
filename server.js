require('dotenv').config();
const app = require('./app');
const sequelize = require('./config/database');

// Testa a conexão com o banco e depois inicia o servidor
async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    // Sincroniza os models com o banco
    await sequelize.sync(); // ou { force: true } para recriar tabelas (cuidado!)
    console.log('Tabelas sincronizadas.');

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error('Erro ao conectar com o banco de dados:', error);
  }
}

startServer();
