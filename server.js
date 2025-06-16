import db from './config/db.js'; // seu Pool do pg
import app from './bootstrap/app.js';

async function startServer() {
  try {
    // Testa a conexão com o banco:
    await db.query('SELECT 1');
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao conectar com o banco de dados:', error);
  }
}

startServer();
