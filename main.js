const process = require('process');
const say = require('./src/say');

main = (args) => {
    try {
        process.stdout.write(say.hello({ lang: args[0] }) + '\n');

        return  0;
    } catch (e) {
        process.stdout.write(e + '\n');

        return 1;
    }
}

main(process.argv.slice(2));

exports.main = main;
