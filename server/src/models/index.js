const { User } = require('./User.js')
const { Deck } = require('./Deck.js')
const { Card } = require('./Card.js')
const { Attack } = require('./Attack.js')

// One-to-one
User.hasOne(Deck)
Deck.belongsTo(User)

// One-to-many
Deck.hasMany(Card)
Card.belongsTo(Deck)

// Many-to-many
Card.belongsToMany(Attack, { through: 'CardAttacks' })
Attack.belongsToMany(Card, { through: 'CardAttacks' })

module.exports = { User, Deck, Card, Attack }
