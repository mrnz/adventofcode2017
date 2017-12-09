/* eslint-env node, mocha */
'use strict';

const assert = require('assert'),
    day9part1 = require('../day09/9-1.js'),
    day9part2 = require('../day09/9-2.js');

describe('Day 2', () => {

    describe('Part One', () => {

        const test01 = '{}';
        const test02 = '{{{}}}';
        const test03 = '{{},{}}';
        const test04 = '{{{},{},{{}}}}';
        const test05 = '{<a>,<a>,<a>,<a>}';
        const test06 = '{{<ab>},{<ab>},{<ab>},{<ab>}}';
        const test07 = '{{<!!>},{<!!>},{<!!>},{<!!>}}';
        const test08 = '{{<a!>},{<a!>},{<a!>},{<ab>}}';

        it('should test01 return 1', () => {
            assert.equal(1, day9part1(test01));
        });

        it('should test02 return 6', () => {
            assert.equal(6, day9part1(test02));
        });

        it('should test03 return 5', () => {
            assert.equal(5, day9part1(test03));
        });

        it('should test04 return 16', () => {
            assert.equal(16, day9part1(test04));
        });

        it('should test05 return 1', () => {
            assert.equal(1, day9part1(test05));
        });

        it('should test06 return 9', () => {
            assert.equal(9, day9part1(test06));
        });

        it('should test07 return 9', () => {
            assert.equal(9, day9part1(test07));
        });

        it('should test08 return 3', () => {
            assert.equal(3, day9part1(test08));
        });

    });

    describe('Part Two', () => {

        const test01 = '<>'; // 0 characters.
        const test02 = '<random characters>';//  17 characters.
        const test03 = '<<<<>'; // 3 characters.
        const test04 = '<{!>}>'; // 2 characters.
        const test05 = '<!!>'; // 0 characters.
        const test06 = '<!!!>>'; // 0 characters.
        const test07 = '<{o"i!a,<{i<a>'; // 10 characters.
        const test08 = '{<{o"i!a,<{i<a>}'; // 10 characters.

        it('should test01 return 0', () => {
            assert.equal(0, day9part2(test01));
        });

        it('should test02 return 17', () => {
            assert.equal(17, day9part2(test02));
        });

        it('should test03 return 3', () => {
            assert.equal(3, day9part2(test03));
        });

        it('should test04 return 2', () => {
            assert.equal(2, day9part2(test04));
        });

        it('should test05 return 0', () => {
            assert.equal(0, day9part2(test05));
        });

        it('should test06 return 0', () => {
            assert.equal(0, day9part2(test06));
        });

        it('should test07 return 10', () => {
            assert.equal(10, day9part2(test07));
        });

        it('should test08 return 10', () => {
            assert.equal(10, day9part2(test08));
        });

    });

});
