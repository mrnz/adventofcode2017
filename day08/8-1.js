'use strict';
module.exports = data => {
    const register = {};
    let position = 0;
    let highestEver = 0;

    data = data.trim().split('\n').map(x => {
        return x.split(' ')
    })
    //.forEach(x=>console.log(x))

    const getRegister = registerName => {
        register[registerName] = register[registerName] || 0;
        return register[registerName];
    };

    const changeRegister = (a, factor, amount) => {
        getRegister(a);
        switch (factor) {
            case 'inc':
                register[a] += Number(amount)
                break;
            case 'dec':
                register[a] -= Number(amount)
                break;
            default:
            console.log('dsadsadsadsadsadsadsads');

        }
    }

    const checkCondition = (a, condition, b) => {
        switch (condition) {
        case '==':
            return getRegister(a) === Number(b);
        case '<':
            return getRegister(a) < Number(b);
        case '>':
            return getRegister(a) > Number(b);
        case '>=':
            return getRegister(a) >= Number(b);
        case '<=':
            return getRegister(a) <= Number(b);
        case '!=':
            return getRegister(a) !== Number(b);
        default:
            return new Error('condition has not found');
        }
    };

    while (position < data.length) {
        const instruction = data[position];

        if (checkCondition(instruction[4], instruction[5], instruction[6])) {
            changeRegister(instruction[0], instruction[1], instruction[2]);
            highestEver = Math.max(highestEver, getRegister(instruction[0]))
        };
        position++;


    }

    console.log(highestEver);
    return [Object.keys(register).reduce((previous, key) => {
        return Math.max(register[key], previous)
    }, -Infinity), highestEver];
};
