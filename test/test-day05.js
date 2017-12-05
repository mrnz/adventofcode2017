/* eslint-env node, mocha */
'use strict';

const assert = require('assert'),
    day5part1 = require('../day05/5-1.js'),
    day5part2 = require('../day05/5-2.js');

describe('Day 5', () => {

    describe('Part One', () => {

        const test = '0\n3\n0\n1\n-3';

        it('should 0 3 0 1 -3 returns 5', () => {
            assert.equal(5, day5part1(test));
        });

    });

    describe('Part Two', () => {

        const test = '0\n3\n0\n1\n-3';

        it('should 0 3 0 1 -3 returns 10', () => {
            assert.equal(10, day5part2(test));
        });
    });

});
