/* eslint-env node, mocha */
'use strict';

const assert = require('assert'),
    day22 = require('../day22/22.js');
const input = '..#\n#..\n...',
    position = { x: 1, y: 1 };

describe('Day 22', () => {

    describe('Part One', () => {

        it('should part1 with test input from adventofcode return 3025', () => {
            assert.equal(5, day22.part1(input, 7));
        });

        it('should part1 with test input from adventofcode return 3025', () => {
            assert.equal(position, day22.move(position, 'ups'));
        });
    });

    describe('Part Two', () => {
        it('should part2 with test input from adventofcode return 915', () => {
            assert.equal(26, day22.part2(input, 100));
        });
    });
});
