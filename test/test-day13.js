/* eslint-env node, mocha */
'use strict';

const assert = require('assert'),
    day13part1 = require('../day13/13-1.js'),
    day13part2 = require('../day13/13-2.js');

const test = '0: 3\n1: 2\n4: 4\n6: 4';

describe('Day 13', () => {

    describe('Part One', () => {
        it('should test return 24', () => {
            assert.equal(24, day13part1(test));
        });
    });

    describe('Part Two', () => {
        it('should test two return 10', () => {
            assert.equal(10, day13part2(test));
        });
    });

});
