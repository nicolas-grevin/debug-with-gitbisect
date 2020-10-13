const EN = 'en';
const FR = 'fr';
const ES = 'es';
const DE = 'de';

exports.hello = ({ lang }) => {
    switch (lang) {
        case EN:
            return 'Hello';
        case FR:
            return 'Hello';
        case ES:
            return 'Hola';
        case DE:
            return 'Hallo'
        default:
            throw new Error('Language is not supported. 🦄');
    }
}
