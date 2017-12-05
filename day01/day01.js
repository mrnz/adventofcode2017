/* eslint-disable no-console */
'use strict';

const input = require('fs').readFileSync(`${__dirname}/day01-input.txt`).toString();

console.log(`day 1 part 1 - result is: ${require('./1-1.js')(input)}`);
console.log(`day 1 part 2 - result is: ${require('./1-2.js')(input)}`);
