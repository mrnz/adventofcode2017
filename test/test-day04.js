var assert = require('assert'),
    day4part1 = require('../day04/4-1.js'),
    day4part2 = require('../day04/4-2.js');

describe('Day 4', function() {

  describe('Part One', function() {


    it('should return checksum 8 + 4 + 6 = 18', function () {
      assert.equal( 1, day4part1('aa bb cc dd ee is valid.') );
    });

    it('should aa bb cc dd aa is not valid - the word aa appears more than once.', function () {
      assert.equal( 0, day4part1('aa bb cc dd aa') );
    });

    it('should aa bb cc dd aaa is valid - aa and aaa count as different words.', function () {
      assert.equal( 1, day4part1('aa bb cc dd aaa') );
    });

  });

  describe('Part Two', function() {

      
      it('abcde fghij is a valid passphrase.', function () {
        assert.equal( 1, day4part2('abcde fghij') );
      });

      it('abcde xyz ecdab is not valid - the letters from the third word can be rearranged to form the first word.', function () {
        assert.equal( 0, day4part2('abcde xyz ecdab') );
      });

      it('a ab abc abd abf abj is a valid passphrase, because all letters need to be used when forming another word.', function () {
        assert.equal( 1, day4part2('a ab abc abd abf abj') );
      });

      it('iiii oiii ooii oooi oooo is valid.', function () {
        assert.equal( 1, day4part2('iiii oiii ooii oooi oooo') );
      });

      it('oiii ioii iioi iiio is not valid - any of these words can be rearranged to form any other word.', function () {
        assert.equal( 0, day4part2('oiii ioii iioi iiio') );
      });

  });

});
