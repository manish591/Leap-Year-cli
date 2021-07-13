const readLineSync = require('readline-sync');
const chalk = reauire('chalk');

let username = readLineSync.question('What is your name? ');
console.log(`Welcome! ${username} in this game of leap year. So, let's begin the game.`)

let rules = readLineSync.keyInSelect
