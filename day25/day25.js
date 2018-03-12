/* eslint-disable no-console */
'use strict';

const input = require('fs').readFileSync(`${__dirname}/day25-input.txt`).toString();

console.log(`day 25 part 1 - result is: ${require('./25.js').part1(input)}`);

// console.log(`day 25 part 2 - result is: ${require('./25.js').part2(input)}`);
