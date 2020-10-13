const EN = 'en';
const FR = 'en';
const ES = 'es';
const DE = 'de';

exports.sayHello = (lang) => {
    switch (lang) {
        case EN:
            return 'Hello';
        case FR:
            return 'Salut';
        case ES:
            return 'Hola';
        case DE:
            return 'Hallo'
        default:
            throw 'Language is not supported'
    }
}
