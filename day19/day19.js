/* eslint-disable no-console */
'use strict';

const input = require('fs').readFileSync(`${__dirname}/day19-input.txt`).toString();

console.log(`day 19 part 1 - result is: ${require('./19.js').init(input, false)}`);
console.log(`day 19 part 2 - result is: ${require('./19.js').init(input, true)}`);
