'use strict';


const day08 = module.exports = {
    prepareDate: data => data.trim().split('\n').map(x => x.split(' ')),
    getRegister: (registerName, register) => {
        register[registerName] = register[registerName] || 0;
        return register[registerName];
    },

    changeRegister: (a, factor, amount, register) => {
        if (factor === 'inc') {
            register[a] += Number(amount);
        } else {
            register[a] -= Number(amount);
        }
    },

    checkCondition: (a, condition, b, register) => {
        switch (condition) {
        case '==':
            return day08.getRegister(a, register) === Number(b);
        case '<':
            return day08.getRegister(a, register) < Number(b);
        case '>':
            return day08.getRegister(a, register) > Number(b);
        case '>=':
            return day08.getRegister(a, register) >= Number(b);
        case '<=':
            return day08.getRegister(a, register) <= Number(b);
        case '!=':
            return day08.getRegister(a, register) !== Number(b);
        default:
            return null;
        }
    },
    init: data => {
        const register = {};
        let position = 0;
        let highestEver = 0;

        data = day08.prepareDate(data);

        while (position < data.length) {
            const instruction = data[position];

            if (day08.checkCondition(instruction[4], instruction[5], instruction[6], register)) {
                day08.getRegister(instruction[0], register);
                day08.changeRegister(instruction[0], instruction[1], instruction[2], register);
                highestEver = Math.max(highestEver, day08.getRegister(instruction[0], register));
            }
            position++;
        }

        return [
            Object.keys(register).reduce((previous, key) => Math.max(register[key], previous), -Infinity),
            highestEver
        ];
    },
    day08part1: data => day08.init(data)[0],
    day08part2: data => day08.init(data)[1]
};
