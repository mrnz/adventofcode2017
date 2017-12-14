/* eslint-disable no-console */
'use strict';

const input = require('fs').readFileSync(`${__dirname}/day13-input.txt`).toString();

console.log(`day 13 part 1 - result is: ${require('./13-1.js')(input)}`);
// console.log(`day 13 part 2 - result is: ${require('./13-2.js')(input)}`);
