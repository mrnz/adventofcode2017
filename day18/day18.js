/* eslint-disable no-console */
'use strict';

const input = require('fs').readFileSync(`${__dirname}/day18-input.txt`).toString();

console.log(`day 18 part 1 - result is: ${require('./18-1.js').init(input)}`);
console.log(`day 18 part 2 - result is: ${require('./18-2.js')(input)}`);
