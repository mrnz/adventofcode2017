/* eslint-disable no-console */
'use strict';

const input = require('fs').readFileSync(`${__dirname}/day06-input.txt`).toString();

console.log(`day 6 part 1 - result is: ${require('./6.js').day6part1(input)}`);
console.log(`day 6 part 2 - result is: ${require('./6.js').day6part2(input)}`);
