const readLineSync = require('readline-sync');
const chalk = require('chalk');

let username = readLineSync.question('What is your name? ');
console.log(`Welcome! ${username} in this game of leap year.`)
console.log('                   ');
if (readLineSync.keyInYN('Do you know the rules?')) {
  console.log('Ok! lets begin.')
} else {
  console.log('You have to input your birthyear and i will tell you based on certain calculation that whether this year is leap year or not.')
}
console.log('                   ');

let birthYear = readLineSync.question('Please input you birthyear in YYYY format!');

let formatYearInNumber = parseInt(birthYear);
function isLeap (year) {
  if(year % 4 === 0) {
    if(year % 100 === 0) {
      if(year % 400 === 0) {
        console.log('This is leap year!')
      } else {
        console.log('This is not a leap year!')
      }
    } else {
      console.log('This is a leap year!')
    }
  } else {
    console.log('This is not a leap year!')
  }
}

isLeap(formatYearInNumber);
