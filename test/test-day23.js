/* eslint-env node, mocha */
/* eslint no-invalid-this: 0 */

'use strict';

const assert = require('assert'),
    day23 = require('../day23/23.js'),
    fs = require('fs');
const testData = fs.readFileSync(`${__dirname}/../day23/day23-input.txt`).toString();

describe('Day 23', () => {

    describe('Part One', () => {

        it('should part1 with test input from adventofcode return 3025', () => {
            assert.equal(3025, day23.part1(testData));
        });
    });

    describe('Part Two', () => {
        it('should part2 with test input from adventofcode return 915', function(done) {
            this.timeout(10000);
            assert.equal(915, day23.part2(testData));
            done();
        });
    });
});
