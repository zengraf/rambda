const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const input = 'foo bar baz'
const value = /a./g

suite
  .add('Rambda.match', () => {
    R.match(value)(input)
  })
  .add('Ramda.match', () => {
    Ramda.match(value)(input)
  })

module.exports = suite
