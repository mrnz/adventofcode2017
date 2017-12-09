/* eslint-env node, mocha */
'use strict';

const assert = require('assert'),
    day7part1 = require('../day07/7-1.js'),
    day7part2 = require('../day07/7-2.js');

const testData = 'pbga (66)\nxhth (57)\nebii (61)\nhavc (66)\nktlj (57)\nfwft (72) -> ktlj, cntj, xhth\nqoyq (66)\npadx (45) -> pbga, havc, qoyq\ntknk (41) -> ugml, padx, fwft\njptl (61)\nugml (68) -> gyxo, ebii, jptl\ngyxo (61)\ncntj (57)';

describe('Day 7', () => {

    describe('Part One', () => {

        it('should 0 3 0 1 -3 returns 7', () => {
            assert.equal('tknk', day7part1(testData.trim()));
        });

    });

    describe('Part Two', () => {

        it('should 0 3 0 1 -3 returns 10', () => {
            assert.strictEqual(true, day7part2.allInArrayAreNumbers([1, 2, 3, 4]));
        });

        it('should 0 3 0 1 -3 returns 10', () => {
            assert.strictEqual(false, day7part2.allInArrayAreNumbers([1, 'das', 3, 4]));
        });

        it('should 0 3 0 1 -3 returns 10', () => {
            assert.strictEqual(false, day7part2.allInArrayAreNumbers(['a', 'a', 'A', 4]));
        });

        it('should day7part2 return 60', () => {
            assert.strictEqual(60, day7part2.init(testData));
        });

    });

});
