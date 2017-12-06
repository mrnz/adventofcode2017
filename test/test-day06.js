/* eslint-env node, mocha */
'use strict';

const assert = require('assert'),
    day6part = require('../day06/6.js');

describe('Day 6', () => {

    describe('Part One', () => {

        const test = [1, 2, 1, 2];
        const test2 = [1, 2, 1, 2, 4, 4, 3];
        const test3 = '0\t2\t7\t0';

        it('should findBankToRedistribute with test array return 1', () => {
            assert.equal(1, day6part.findBankToRedistribute(test));
        });

        it('should findBankToRedistribute with test2 array return 4', () => {
            assert.equal(4, day6part.findBankToRedistribute(test2));
        });

        it('should cycle with test2 array return [1, 0, 2, 3]', () => {
            assert.deepEqual([1, 0, 2, 3], day6part.cycle(test, 1));
        });

        it('should cycle with test2 array return [2, 3, 1, 2, 0, 5, 4]', () => {
            assert.deepEqual([2, 3, 1, 2, 0, 5, 4], day6part.cycle(test2, 4));
        });

        it('should init with test2 return 5', () => {
            assert.equal(5, day6part.day6part1(test3));
        });

    });

    describe('Part Two', () => {
        const test = '2\t4\t1\t2';

        it('should init with test2 return 5', () => {
            assert.equal(4, day6part.day6part2(test));
        });
    });

});
