const test = require('ava');
const say = require('../../src/say');

test('Say hello en', t => {
    t.is(say.hello({ lang: 'en' }), 'Hello');
})

test('Say hello fr', t => {
    t.is(say.hello({ lang: 'fr' }), 'Hello');
})

test('Say hello es', t => {
    t.is(say.hello({ lang: 'es' }), 'Hola');
})

test('Say hello de', t => {
    t.is(say.hello({ lang: 'de' }), 'Hallo');
})

test('Say hello it', t => {
    t.is(say.hello({ lang: 'it' }), 'Ciao');
})

test('Say language is not supported', t => {
    const error = t.throws(() => {
        say.hello({ lang: 'pl' });
    }, { instanceOf: Error });

    t.is(error.message, 'Language is not supported. 🦄')
})
