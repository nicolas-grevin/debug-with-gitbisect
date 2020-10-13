const test = require('ava');
const main = require('../main');

test('Execute without error', t => {
    t.is(main.main(['en']), 0)
    t.is(main.main(['fr']), 0)
    t.is(main.main(['es']), 0)
    t.is(main.main(['de']), 0)
    t.is(main.main(['it']), 0)
    t.is(main.main(['al']), 0)
})

test('Execute with error', t => {
    t.is(main.main([]), 1)
})
