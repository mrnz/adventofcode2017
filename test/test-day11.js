/* eslint-env node, mocha */
'use strict';

const assert = require('assert'),
    day11part1 = require('../day11/11-1.js'),
    day11part2 = require('../day11/11-2.js');

describe('Day 11', () => {

    describe('Part One', () => {
        it('should "" return 0', () => {
            assert.equal(0, day11part1(''));
        });
        it('should "ne,ne,ne,n,nw" return 3', () => {
            assert.equal(3, day11part1('ne,ne,ne,n,nw'));
        });
        it('should "ne,ne,sw,sw" return 0', () => {
            assert.equal(0, day11part1('ne,ne,sw,sw'));
        });
        it('should "ne,ne,s,s" return 2', () => {
            assert.equal(2, day11part1('ne,ne,s,s'));
        });
        it('should "se,sw,se,sw,sw" return 3', () => {
            assert.equal(3, day11part1('se,sw,se,sw,sw'));
        });

    });

    describe('Part Two', () => {
        it('should "" return 0', () => {
            assert.equal(0, day11part2(' '));
        });
        it('should "ne,ne,ne,n,nw" return 3', () => {
            assert.equal(4, day11part2('ne,ne,ne,n,nw'));
        });
        it('should "ne,ne,sw,sw" return 0', () => {
            assert.equal(2, day11part2('ne,ne,sw,sw'));
        });
        it('should "ne,ne,s,s" return 2', () => {
            assert.equal(2, day11part2('ne,ne,s,s'));
        });
        it('should "se,sw,se,sw,sw" return 3', () => {
            assert.equal(3, day11part2('se,sw,se,sw,sw'));
        });

    });

});
