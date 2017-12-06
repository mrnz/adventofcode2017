'use strict';
module.exports = data => {

    let position = 0,
        counter = 0;

    data = data.trim()
        .split('\n')
        .map(Number);

    while (typeof data[position] !== 'undefined') {
        const prevValue = data[position];

        data[position] += data[position] < 3 ? 1 : -1;
        position += prevValue;
        counter++;

    }

    return counter;

};
