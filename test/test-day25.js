/* eslint-env node, mocha */
'use strict';

const assert = require('assert'),
    day25 = require('../day25/25.js'),
    fs = require('fs');
const testData = fs.readFileSync(`${__dirname}/../day25/day25-input.txt`).toString();

describe('Day 25', () => {

    describe('Part One', () => {
        it('should test with test input from adventofcode and steps set to 1 return 1', () => {
            assert.equal(1, day25.part1(testData, 1));
        });

        it('should test with test input from adventofcode and steps set to 3 return 10', () => {
            assert.equal(3, day25.part1(testData, 10));
        });

        it('should test with test input from adventofcode and steps set to 3 return 100', () => {
            assert.equal(3, day25.part1(testData, 100));
        });

    });

});
