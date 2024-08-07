const { DataTypes, Model, db } = require('../db/config.js')

class Attack extends Model {}

Attack.init({
  title: DataTypes.TEXT,
  mojoCost: DataTypes.INTEGER,
  staminaCost: DataTypes.INTEGER
}, {
  sequelize: db
})

module.exports = { Attack }
