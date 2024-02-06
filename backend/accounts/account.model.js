//const { generateRandomId } = require('./account.service');
const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
  const attributes = {
    id: {
      type: DataTypes.STRING(4),
      primaryKey: true,
      allowNull: false,
      unique: true,
      defaultValue: generateRandomId,
    },
    email: { type: DataTypes.STRING, allowNull: false },
    passwordHash: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: true },
    dateofBirth: { type: DataTypes.DATEONLY, allowNull: true },
    gender: { type: DataTypes.STRING, allowNull: true },
    phone: { type: DataTypes.STRING(15), allowNull: true },
    location: { type: DataTypes.STRING, allowNull: true },
    profilePicture: { type: DataTypes.STRING },
    firstName: { type: DataTypes.STRING, allowNull: true },
    lastName: { type: DataTypes.STRING, allowNull: true },
    role: { type: DataTypes.STRING, allowNull: false },
    verificationToken: { type: DataTypes.STRING },
    verified: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    resetToken: { type: DataTypes.STRING },
    resetTokenExpires: { type: DataTypes.DATE },
    passwordReset: { type: DataTypes.DATE },
    created: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updated: { type: DataTypes.DATE },
    deleted: { type: DataTypes.BOOLEAN, defaultValue: false },
    isVerified: {
      type: DataTypes.VIRTUAL,
      get() {
        return !!(this.verified || this.passwordReset);
      }
    },
    status: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true }, // Updated 'status' column to BOOLEAN type
  };

  const options = {
    timestamps: false,
    defaultScope: {
      attributes: { exclude: ['passwordHash', 'deleted'] }
    },
    scopes: {
      withHash: { attributes: {} }
    }
  };

  return sequelize.define('account', attributes, options);
}

function generateRandomId() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomId = '';
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters[randomIndex];
  }
  return randomId;
}