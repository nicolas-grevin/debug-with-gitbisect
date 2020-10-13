const process = require('process');
const hello = require('./src/hello');

main = (args) => {
    switch (args[0]) {
        case 'fr':
            process.stdout.write(hello.fr() + '\n');
            break
        case 'en':
        default:
            process.stdout.write(hello.en() + '\n');
            break;
    }
}

main(process.argv.slice(2));

exports.main = main;
