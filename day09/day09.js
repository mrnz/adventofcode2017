/* eslint-disable no-console */
'use strict';

const input = require('fs').readFileSync(`${__dirname}/day09-input.txt`).toString();

console.log(`day 9 part 1 - result is: ${require('./9-1.js')(input)}`);
console.log(`day 9 part 2 - result is: ${require('./9-2.js')(input)}`);
