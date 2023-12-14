// models/userModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  user_name: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  user_password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  user_role: {
    type: DataTypes.STRING(64),
    allowNull: true, // Adjust as needed based on your requirements
  },
  user_credit: {
    type: DataTypes.DOUBLE,
    allowNull: true, // Adjust as needed based on your requirements
  },
}, {
  tableName: 'user_t',
  timestamps: false, // Disable timestamps (created_at, updated_at)
});

module.exports = User;
