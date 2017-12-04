var input = require('fs').readFileSync(__dirname+'/day04-input.txt').toString();

console.log( `day 4 part 1 - result is: ${require('./4-1.js')(input)}` );
console.log( `day 4 part 2 - result is: ${require('./4-2.js')(input)}` );
