// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('testNodeJS', 'postgres', '@Edmund0591', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
