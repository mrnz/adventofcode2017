/* eslint-disable no-console */
'use strict';

const input = require('fs').readFileSync(`${__dirname}/day17-input.txt`).toString();

console.log(`day 17 part 1 - result is: ${require('./17.js').init(input)}`);
console.log(`day 17 part 2 - result is: ${require('./17.js').init2(input, 5e7)}`);
