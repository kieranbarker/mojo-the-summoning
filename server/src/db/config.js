const path = require('path')
const { DataTypes, Model, Sequelize } = require('sequelize')

const db = new Sequelize({
  dialect: 'sqlite',
  logging: false,
  storage: path.join(__dirname, '..', 'db.sqlite')
})

module.exports = { DataTypes, Model, db }
