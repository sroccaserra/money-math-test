const money = require('money-math')
const test = require('tape')

test('javascript has a floating point problem', t => {
    t.equal(0.060000000000000005, 0.01 + 0.05)
    t.end()
})

test('money-math fixes this floating point problem', t => {
    t.equal('0.06', money.add('0.01', '0.05'))
    t.end()
})
