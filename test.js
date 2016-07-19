const money = require('money-math')
const test = require('tape')

test('javascript has a floating point problem', t => {
    t.equal(0.10 + 0.20, 0.30000000000000004)
    t.end()
})

test('money-math fixes this floating point problem', t => {
    t.equal(money.add('0.10', '0.20'), '0.30')
    t.end()
})
