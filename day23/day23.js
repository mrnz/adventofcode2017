/* eslint-disable no-console */
'use strict';

const input = require('fs').readFileSync(`${__dirname}/day23-input.txt`).toString();

console.log(`day 23 part 1 - result is: ${require('./23.js').part1(input)}`);

console.log(`day 23 part 2 - result is: ${require('./23.js').part2(input)}`);
