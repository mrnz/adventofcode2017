/* eslint-env node, mocha */
'use strict';

const assert = require('assert'),
    day19 = require('../day19/19.js');

const test = `    |
    |  +--+
    A  |  C
F---|----E|--+
    |  |  |  D
    +B-+  +--+
`;

describe('Day 19', () => {

    describe('Part One', () => {

        it('should part1 return ABCDEF', () => {
            assert.equal('ABCDEF', day19.init(test, false));
        });
    });

    describe('Part Two', () => {
        it('should part2 return 38', () => {
            assert.equal(38, day19.init(test, true));
        });
    });

});
