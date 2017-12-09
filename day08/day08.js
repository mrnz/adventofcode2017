/* eslint-disable no-console */
'use strict';

const input = require('fs').readFileSync(`${__dirname}/day08-input.txt`).toString();

console.log(`day 8 part 1 - result is: ${require('./8-1.js')(input)}`);
//console.log(`day 8 part 2 - result is: ${require('./8-2.js')(input)}`);
