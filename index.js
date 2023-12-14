// src/index.js
const sequelize = require('./src/config/database');

// Define models and relationships
require('./src/models/userModel.js');

// Sync the models with the database
sequelize.sync({ force: false }).then(() => {
  console.log('Database synchronized');
});