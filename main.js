const process = require('process');
const hello = require('./src/hello');

main = (args) => {
    switch (args[0]) {
        case 'fr':
            process.stdout.write(hello.fr() + '\n');
            break
        case 'de':
            process.stdout.write(hello.de() + '\n');
            break
        case 'es':
            process.stdout.write(hello.es() + '\n');
            break
        case 'en':
            process.stdout.write(hello.en() + '\n');
            break;
        default:
            throw 'Language is not supported'
    }
}

main(process.argv.slice(2));

exports.main = main;
