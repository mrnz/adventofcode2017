/* eslint-env node, mocha */
'use strict';

const assert = require('assert'),
    day8 = require('../day08/8.js');

const test = 'b inc 5 if a > 1\na inc 1 if b < 5\nc dec -10 if a >= 1\nc inc -20 if c == 10';

describe('Day 8', () => {

    describe('Part One', () => {

        it('should checkCondition function return false', () => {
            assert.equal(false, day8.checkCondition('a', '<=', 100, { a: 200 }));
        });

        it('should checkCondition function return true', () => {
            assert.equal(true, day8.checkCondition('a', '!=', 100, { a: 200 }));
        });

        it('should checkCondition function return null', () => {
            assert.equal(null, day8.checkCondition('a', 'someThingElse', 100, { a: 200 }));
        });

        it('should the largest value in any register be 1', () => {
            assert.equal(1, day8.day08part1(test));
        });



    });

    describe('Part Two', () => {

        it('should the highest value ever held is 10 ', () => {
            assert.equal(10, day8.day08part2(test));
        });
    });

});
