/* eslint-env node, mocha */
'use strict';

const assert = require('assert'),
    day1part1 = require('../day01/1-1.js'),
    day1part2 = require('../day01/1-2.js');

describe('Day 1', () => {

    describe('Part One', () => {

        it('should 1122 produces a sum of 3 (1 + 2) because the first digit (1) matches the second digit and the third digit (2) matches the fourth digit.', () => {
            assert.equal(3, day1part1('1122'));
        });

        it('should 1111 produces 4 because each digit (all 1) matches the next.', () => {
            assert.equal(4, day1part1('1111'));
        });

        it('should 1234 produces 0 because no digit matches the next', () => {

            assert.equal(0, day1part1('1234'));
        });

        it('should 91212129 produces 9 because the only digit that matches the next one is the last digit, 9.', () => {
            assert.equal(9, day1part1('91212129'));
        });

    });

    describe('Part Two', () => {

        it('should 1212 produces 6: the list contains 4 items, and all four digits match the digit 2 items ahead.', () => {
            assert.equal(6, day1part2('1212'));
        });

        it('1221 produces 0, because every comparison is between a 1 and a 2.', () => {
            assert.equal(0, day1part2('1221'));
        });

        it('should 123425 produces 4, because both 2s match each other, but no other digit has a match.', () => {
            assert.equal(4, day1part2('123425'));
        });

        it('should 123123 produces 12', () => {
            assert.equal(12, day1part2('123123'));
        });

        it('should 12131415 produces 4', () => {
            assert.equal(4, day1part2('12131415'));
        });

    });

});
