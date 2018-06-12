/* eslint-disable no-console */
'use strict';

const input = require('fs').readFileSync(`${__dirname}/day22-input.txt`).toString();

console.log(`day 22 part 1 - result is: ${require('./22.js').part1(input, 10000)}`);
console.log(`day 22 part 2 - result is: ${require('./22.js').part2(input, 10000000)}`);
