const readline = require('readline');

const readInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readInterface.question('What\'s your name? ', name => {
    console.log(`Hi ${name}!`);
    console.log(`Your name has ${name.length} characters.`);
    readInterface.close();
});