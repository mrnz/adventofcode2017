/* eslint-disable no-console */
'use strict';

const input = require('fs').readFileSync(`${__dirname}/day10-input.txt`).toString();

console.log(`day 10 part 1 - result is: ${require('./10-1.js')(input)}`);
console.log(`day 10 part 2 - result is: ${require('./10-2.js')(input)}`);
