/* eslint-env node, mocha */
'use strict';

const assert = require('assert'),
    day3part1 = require('../day03/3-1.js'),
    day3part2 = require('../day03/3-2.js');

describe('Day 3', () => {

    describe('Part One', () => {

        it('should Data from square 1 is carried 0 steps, since its at the access port', () => {
            assert.equal(0, day3part1(1));
        });

        it('should Data from square 12 is carried 3 steps, such as: down, left, left.', () => {
            assert.equal(3, day3part1(12));
        });

        it('should Data from square 23 is carried only 2 steps: up twice.', () => {
            assert.equal(2, day3part1(23));
        });

        it('should Data from square 1024 must be carried 31 steps.', () => {
            assert.equal(31, day3part1(1024));
        });

    });

    describe('Part Two', () => {

        it('should 1 return 1.', () => {
            assert.equal(2, day3part2(1));
        });

        it('should 2 return 4', () => {
            assert.equal(4, day3part2(2));
        });

        it('should 3 return 4.', () => {
            assert.equal(4, day3part2(3));
        });

        it('should 4 return 5.', () => {
            assert.equal(5, day3part2(4));
        });

        it('should 5 return 10.', () => {
            assert.equal(10, day3part2(5));
        });

        it('should 6 return 11.', () => {
            assert.equal(10, day3part2(6));
        });

        it('should 66 return 122.', () => {
            assert.equal(122, day3part2(66));
        });
    });

});
