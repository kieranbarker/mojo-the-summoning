const { afterEach, beforeAll, describe, expect, it } = require('@jest/globals')
const { Attack } = require('./index.js')
const { db } = require('../db/config.js')

beforeAll(async () => {
  await db.sync({ force: true })
})

afterEach(async () => {
  await db.truncate({ cascade: true })
})

describe('The Attack model', () => {
  it.skip('Creates an attack', async () => {})
  it.skip('Finds an attack', async () => {})
  it.skip('Updates an attack', async () => {})
  it.skip('Deletes an attack', async () => {})
})
