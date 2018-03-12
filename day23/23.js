/* eslint indent: ["error", 4, { "SwitchCase": 1 }] */
'use strict';

const day24 = module.exports = {
    prepareData: input => input
        .trim()
        .split('\n')
        .map(item => item
            .split(' ')
        ),

    proceed: (register, instruction, position) => {

        const valA = isNaN(Number(instruction[1])) ? register[instruction[1]] : Number(instruction[1]);
        const valB = isNaN(Number(instruction[2])) ? register[instruction[2]] : Number(instruction[2]);

        switch (instruction[0]) {
            case 'set':
                register[instruction[1]] = valB;
                position++;
                break;
            case 'sub':
                register[instruction[1]] -= valB;
                position++;
                break;
            case 'mul':
                register[instruction[1]] *= valB;
                position++;
                break;
            case 'jnz':
                if (valA !== 0) {
                    position += valB;
                } else {
                    position++;
                }
                break;
            default:
                position++;
                break;
        }
        return position;

    },

    part1: input => {
        const instructions = day24.prepareData(input);
        const register = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0 };
        let position = 0;
        let result = 0;

        while (instructions[position]) {
            result += instructions[position][0] === 'mul' ? 1 : 0;
            position = day24.proceed(register, instructions[position], position);
        }
        return result;
    },

    // Part two was to hard - solution copied from https://www.reddit.com/r/adventofcode/comments/7lms6p/2017_day_23_solutions/
    part2: input => {
        let b = day24.prepareData(input)[0][2],
            h = 0;

        b = b * 100 + 100000;
        for (let i = b; i <= b + 17000; i += 17) {
            for (let j = 2; j < i; j++) {
                if (i % j === 0) {
                    h++;
                    break;
                }
            }
        }
        return h;
    }
};
