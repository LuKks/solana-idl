const test = require('brittle')
const IDL = require('./index.js')

test('basic', async function (t) {
  t.ok(IDL.pump)
  t.ok(IDL.pump_amm)
})
