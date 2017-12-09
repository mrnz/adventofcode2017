/* eslint-env node, mocha */
'use strict';

const assert = require('assert'),
    day8part = require('../day08/8-1.js');

describe('Day 8', () => {

    describe('Part One', () => {
        const test = 'b inc 5 if a > 1\na inc 1 if b < 5\nc dec -10 if a >= 1\nc inc -20 if c == 10';

        it('should init with test2 return 5', () => {
            assert.equal(5, day8part(test));
        });

    });

    describe('Part Two', () => {

        // it('should init with test2 return 5', () => {
        //     assert.equal(4, day8part.day8part2(test));
        // });
    });

});
