const { afterEach, beforeAll, describe, expect, it } = require('@jest/globals')
const { Deck, User } = require('./index.js')
const { db } = require('../db/config.js')

beforeAll(async () => {
  await db.sync({ force: true })
})

afterEach(async () => {
  await db.truncate({ cascade: true })
})

describe('The Deck model', () => {
  it('Creates a deck', async () => {
    const deck = await Deck.create({ name: 'Water', xp: 75 })
    expect(deck).toBeInstanceOf(Deck)
    expect(deck.name).toBe('Water')
    expect(deck.xp).toBe(75)
  })

  it('Finds a deck', async () => {
    await Deck.create({ name: 'Grass', xp: 25 })

    const deck = await Deck.findOne({
      where: {
        name: 'Grass',
        xp: 25
      }
    })

    expect(deck).toBeInstanceOf(Deck)
    expect(deck.name).toBe('Grass')
    expect(deck.xp).toBe(25)
  })

  it('Updates a deck', async () => {
    let deck = await Deck.create({ name: 'Electric', xp: 50 })
    deck = await deck.update({ xp: 150 })
    expect(deck.xp).toBe(150)
  })

  it('Deletes a deck', async () => {
    let deck = await Deck.create({ name: 'Bug', xp: 15 })

    await deck.destroy()
    deck = await Deck.findByPk(deck.id)

    expect(deck).toBeNull()
  })

  it('Has exactly one user', async () => {
    let deck = await Deck.create({ name: 'Fire', xp: 150 })

    const user0 = await User.create({ username: 'gandalf' })
    const user1 = await User.create({ username: 'dumbledore' })

    await deck.setUser(user0)
    await deck.setUser(user1)

    deck = await Deck.findByPk(deck.id)
    const finalUser = await deck.getUser()

    expect(finalUser.toJSON()).toEqual(user1.toJSON())
  })
})
