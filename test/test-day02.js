/* eslint-env node, mocha */
'use strict';

const assert = require('assert'),
    day2part1 = require('../day02/2-1.js'),
    day2part2 = require('../day02/2-2.js');

describe('Day 2', () => {

    describe('Part One', () => {

        const test = '5\t1\t9\t5\n7\t5\t3\n2\t4\t6\t8';

        it('should return checksum 8 + 4 + 6 = 18', () => {
            assert.equal(18, day2part1(test));
        });

    });

    describe('Part Two', () => {

        const test2 = '5\t9\t2\t8\n9\t4\t7\t3\n3\t8\t6\t5';

        it('should return checksum 4 + 3 + 2 = 9', () => {
            assert.equal(9, day2part2(test2));
        });

    });

});
