/* eslint-env node, mocha */
'use strict';

const assert = require('assert'),
    day12part1 = require('../day12/12.js').day12part1,
    day12part2 = require('../day12/12.js').day12part2;

const test = '0 <-> 2\n1 <-> 1\n2 <-> 0, 3, 4\n3 <-> 2, 4\n4 <-> 2, 3, 6\n5 <-> 6\n6 <-> 4, 5';

describe('Day 12', () => {

    describe('Part One', () => {
        it('should test return 6', () => {
            assert.equal(6, day12part1(test));
        });
    });

    describe('Part Two', () => {
        it('should test two return 2', () => {
            assert.equal(2, day12part2(test));
        });
    });

});
