const { Sequelize } = require('sequelize');

const Sequelize = new Sequelize('sge_js', 'root', 'root', {
 host: 'localhost',
 dialect: 'mysql',
});

module.exports = Sequelize;