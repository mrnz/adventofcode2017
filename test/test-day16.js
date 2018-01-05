/* eslint-env node, mocha */
'use strict';

const assert = require('assert'),
    day16 = require('../day16/16.js');


describe('Day 16', () => {

    describe('Part One', () => {

        it('should getMap with length 1 return a', () => {
            assert.equal('a', day16.getMap(1));
        });

        it('should getMap with length 3 return abc', () => {
            assert.equal('abc', day16.getMap(3));
        });

        it('should makeStep for commands s1 return cdeab', () => {
            assert.equal('eabcd', day16.makeStep('abcde'.split(''), 's1').join(''));
        });

        it('should makeStep for commands s3 return cdeab', () => {
            assert.equal('cdeab', day16.makeStep('abcde'.split(''), 's3').join(''));
        });

        it('should makeStep for command x3/4 return eabdc', () => {
            assert.equal('eabdc', day16.makeStep('eabcd'.split(''), 'x3/4').join(''));
        });

        it('should makeStep for command x0/4 return ebcda', () => {
            assert.equal('ebcda', day16.makeStep('abcde'.split(''), 'x0/4').join(''));
        });

        it('should makeStep for command pe/b return baedc', () => {
            assert.equal('baedc', day16.makeStep('eabdc'.split(''), 'pe/b').join(''));
        });

        it('should makeStep for command pe/a return ebcda', () => {
            assert.equal('ebcda', day16.makeStep('abcde'.split(''), 'pe/a').join(''));
        });

        it('should init function without times param return abcde', () => {
            assert.equal('baedc', day16.init(5, 's1,x3/4,pe/b'));
        });

    });

    describe('Part Two', () => {
        it('should init function with times equals 2 return ceadb', () => {
            assert.equal('ceadb', day16.init(5, 's1,x3/4,pe/b', 2));
        });

        it('should init function with times equals 2000 return abcde', () => {
            assert.equal('abcde', day16.init(5, 's1,x3/4,pe/b', 2000));
        });
    });

});
