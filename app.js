const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./produtoRoutes');
const sequelize = require('../config/database');

const app = express();
app.use(bodyParser.json());
app.use('/api', productRoutes);

const starServer = async () => {
 try {
  await sequelize.sync();
  console.log('Bando de dados conectado.');
  app.listen(3000, () => {
   console.log('Servidor rodando na porta 3000');
  })
 } catch (error) {
  console.log('Error ao conectar ao banco de dados:', error);
 }
}

starServer();