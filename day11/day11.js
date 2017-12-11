/* eslint-disable no-console */
'use strict';

const input = require('fs').readFileSync(`${__dirname}/day11-input.txt`).toString();

console.log(`day 11 part 1 - result is: ${require('./11-1.js')(input)}`);
console.log(`day 11 part 2 - result is: ${require('./11-2.js')(input)}`);
