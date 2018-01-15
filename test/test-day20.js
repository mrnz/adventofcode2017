/* eslint-env node, mocha */
'use strict';

const assert = require('assert'),
    day20 = require('../day20/20.js');

const test = `p=< 3,0,0>, v=< 2,0,0>, a=<-1,0,0>
p=< 4,0,0>, v=< 0,0,0>, a=<-2,0,0>
p=< 3,0,0>, v=< 3,0,0>, a=<-1,0,0>`;

const test2 = `p=<-6,0,0>, v=< 3,0,0>, a=< 0,0,0>
p=<-4,0,0>, v=< 2,0,0>, a=< 0,0,0>
p=<-2,0,0>, v=< 1,0,0>, a=< 0,0,0>
p=< 3,0,0>, v=<-1,0,0>, a=< 0,0,0>`;

describe('Day 20', () => {

    describe('Part One', () => {

        it('should part1 with test 1 return 0', () => {
            assert.equal(0, day20.part1(test));
        });
    });

    describe('Part Two', () => {
        it('should part2 with test 2 return 1', () => {
            assert.equal(1, day20.part2(test2));
        });
    });

});
