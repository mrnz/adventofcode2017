/* eslint-env node, mocha */
'use strict';

const assert = require('assert'),
    day18part1 = require('../day18/18-1.js'),
    day18part2 = require('../day18/18-2.js');

const test = `
set a 1
add a 2
mul a a
mod a 5
snd a
set a 0
rcv a
jgz a -1
set a 1
jgz a -2`;

describe('Day 18', () => {

    describe('Part One', () => {

        it('should part 1 return frequency of the last sound played equals 4', () => {
            assert.equal(4, day18part1.init(test));
        });
    });

    describe('Part Two', () => {
        it('should part 2 with steps number equals 1 return 16384', () => {
            assert.equal(1, day18part2(test));
        });
    });

});
