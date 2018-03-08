/* eslint-env node, mocha */
'use strict';

const assert = require('assert'),
    day24 = require('../day24/24.js');

const test = '0/2\n2/2\n2/3\n3/4\n3/5\n0/1\n10/1\n9/10';

describe('Day 24', () => {

    describe('Part One', () => {

        it('should part2 with test input from adventofcode return 31', () => {
            assert.equal(31, day24.part1(test));
        });
    });

    describe('Part Two', () => {
        it('should part2 with test input from adventofcode return 19', () => {
            assert.equal(19, day24.part2(test));
        });
    });

});
