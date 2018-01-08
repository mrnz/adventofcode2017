/* eslint-env node, mocha */
'use strict';

const assert = require('assert'),
    day17 = require('../day17/17.js');


describe('Day 17', () => {

    describe('Part One', () => {

        it('should part 1 with steps number equals 3 return 638', () => {
            assert.equal(638, day17.init(3));
        });
    });

    describe('Part Two', () => {
        it('should part 2 with steps number equals 1 return 16384', () => {
            assert.equal(16384, day17.init2(1, 20000));
        });
    });

});
