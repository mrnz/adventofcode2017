/* eslint prefer-const: ["error", {"destructuring": "all"}] */
'use strict';

const day25 = module.exports = {
    prepareData: input => {
        const ins = {};
        let actualState;
        let steps;

        input.split('\n\n').forEach((element, index) => {
            if (index === 0) {
                actualState = element.match(/ [A-Z]/g)[0].trim();
                steps = Number(element.match(/\d+/g)[0]);
            } else {
                const el = element.split('\n');

                ins[el[0].match(/ [A-Z]/g)[0].trim()] = [
                    { val: Number(el[2].match(/\d+/g)[0]), direction: /right/g.test(el[3]), nextState: el[4].match(/ [A-Z]\./g)[0].trim()[0] },
                    { val: Number(el[6].match(/\d+/g)[0]), direction: /right/g.test(el[7]), nextState: el[8].match(/ [A-Z]\./g)[0].trim()[0] }
                ];
            }
        });
        return { actualState, steps, ins };
    },

    part1: (input, testSteps = 0) => {
        const tape = new Map();
        let { actualState, steps, ins } = day25.prepareData(input),
            position = 0,
            result = 0;

        if (testSteps) {
            steps = testSteps;
        }

        while (steps--) {
            const aS = tape.get(position) ? 1 : 0;

            tape.set(position, ins[actualState][aS].val);
            position += ins[actualState][aS].direction ? 1 : -1;
            actualState = ins[actualState][aS].nextState;
        }

        tape.forEach(x => (result += x));
        return result;
    }
};
