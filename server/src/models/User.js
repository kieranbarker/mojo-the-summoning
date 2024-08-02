const { DataTypes, Model, db } = require('../db/config.js')

class User extends Model {}

User.init({
  username: DataTypes.TEXT
}, {
  sequelize: db
})

module.exports = { User }
