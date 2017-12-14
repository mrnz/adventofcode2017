/* eslint-env node, mocha */
'use strict';

const assert = require('assert'),
    day13part1 = require('../day13/13.js').day13part1,
    day13part2 = require('../day13/13.js').day13part2;


describe('Day 13', () => {

    describe('Part One', () => {
        it('should test return 6', () => {
            assert.equal(6, day13part1(test));
        });
    });

    describe('Part Two', () => {
        it('should test two return 2', () => {
            assert.equal(2, day13part2(test));
        });
    });

});
