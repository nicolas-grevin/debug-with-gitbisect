const EN = 'en';
const FR = 'fr';
const ES = 'es';
const DE = 'de';
const IT = 'it';

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
        case IT:
            return 'Ciao';
        default:
            throw new Error('Language is not supported. 🦄');
    }
}
