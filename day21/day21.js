/* eslint-disable no-console */
'use strict';

const input = require('fs').readFileSync(`${__dirname}/day21-input.txt`).toString();

console.log(`day 21 part 1 - result is: ${require('./21.js').part1(input)}`);
// console.log(`day 21 part 2 - result is: ${require('./21.js').part2(input)}`);
