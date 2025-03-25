const { DataTypes } = require('sequelize');
const sequelize = require('../../../lib/sequelize');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
}, {
  tableName: 'users',
  timestamps: false,  // Disable createdAt & updatedAt fields
});

//console.log("user.js "+User);
//console.log("user.js "+Object.keys(User));

module.exports = User;