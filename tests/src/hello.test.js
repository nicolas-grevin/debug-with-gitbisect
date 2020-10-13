const test = require('ava');
const hello = require('../../src/sayHello');

test('Say hello en', t => {
    t.is(hello.en(), 'Hello');
})

test('Say hello fr', t => {
    t.is(hello.fr(), 'Salut');
})

test('Say hello es', t => {
    t.is(hello.es(), 'Hola');
})

test('Say hello de', t => {
    t.is(hello.es(), 'Hallo');
})
