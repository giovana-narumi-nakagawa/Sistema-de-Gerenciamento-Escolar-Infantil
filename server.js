const express = require("express");
const app = express();
const { swaggerUi, swaggerSpec } = require("./swagger");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
require('dotenv').config();
const app = require('./app');
const sequelize = require('./config/database');


async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    await sequelize.sync();
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
