/* eslint-disable no-console */
'use strict';

const input = require('fs').readFileSync(`${__dirname}/day16-input.txt`).toString();

console.log(`day 16 part 1 - result is: ${require('./16.js').init(16, input)}`);
console.log(`day 16 part 2 - result is: ${require('./16.js').init(16, input, 1000000000)}`);
