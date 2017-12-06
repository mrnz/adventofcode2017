'use strict';
module.exports = data => data
    .trim()
    .split('')
    .reduce((total, currentValue, currentIndex, arr) => {
        const half = arr.length / 2;
        const nextValue = arr[ (half + currentIndex) % arr.length];

        return currentValue === nextValue ? total + Number(currentValue) : total;
    }, 0);
