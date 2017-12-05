var assert = require('assert'),
    day5part1 = require('../day05/5-1.js'),
    day5part2 = require('../day05/5-2.js');

describe('Day 5', function() {

  describe('Part One', function() {

    const test = "0\n3\n0\n1\n-3";
    it('should 0 3 0 1 -3 returns 5', function () {
        assert.equal( 5, day5part1(test) );
    });

  });

  describe('Part Two', function() {

      const test = "0\n3\n0\n1\n-3";
      it('should 0 3 0 1 -3 returns 10', function () {
          assert.equal( 10, day5part2(test) );
      });
  });

});
