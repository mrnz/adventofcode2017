/* eslint-disable no-console */
'use strict';

const input = require('fs').readFileSync(`${__dirname}/day20-input.txt`).toString();

console.log(`day 20 part 1 - result is: ${require('./20.js').part1(input)}`);
console.log(`day 20 part 2 - result is: ${require('./20.js').part2(input)}`);
