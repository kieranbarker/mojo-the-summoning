const { afterEach, beforeAll, describe, expect, it } = require('@jest/globals')
const { Card } = require('./index.js')
const { db } = require('../db/config.js')

beforeAll(async () => {
  await db.sync({ force: true })
})

afterEach(async () => {
  await db.truncate({ cascade: true })
})

describe('The Card model', () => {
  it.skip('Creates a card', async () => {})
  it.skip('Finds a card', async () => {})
  it.skip('Updates a card', async () => {})
  it.skip('Deletes a card', async () => {})
})
