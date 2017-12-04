var assert = require('assert'),
    day3part1 = require('../day03/3-1.js'),
    day3part2 = require('../day03/3-2.js');

describe('Day 3', function() {

  describe('Part One', function() {

    it('should Data from square 1 is carried 0 steps, since its at the access port', function () {
      assert.equal( 0, day3part1(1) );
    });

    it('should Data from square 12 is carried 3 steps, such as: down, left, left.', function () {
      assert.equal( 3, day3part1(12) );
    });

    it('should Data from square 23 is carried only 2 steps: up twice.', function () {
      assert.equal( 2, day3part1(23) );
    });

    it('should Data from square 1024 must be carried 31 steps.', function () {
      assert.equal( 31, day3part1(1024) );
    });

  });

  describe('Part Two', function() {

      it('should 1 return 1.', function () {
          assert.equal( 2, day3part2(1) );
      });

      it('should 2 return 4', function () {
        assert.equal( 4, day3part2(2) );
      });

      it('should 3 return 4.', function () {
        assert.equal( 4, day3part2(3) );
      });

      it('should 4 return 5.', function () {
        assert.equal( 5, day3part2(4) );
      });

      it('should 5 return 10.', function () {
        assert.equal( 10, day3part2(5) );
      });

      it('should 6 return 11.', function () {
        assert.equal( 10, day3part2(6) );
      });

  });

});
