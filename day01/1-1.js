'use strict';
module.exports = data => data
    .trim()
    .split('')
    .reduce((total, currentValue, currentIndex, arr) => {
        const nextValue = arr[currentIndex + 1] || arr[0];

        return currentValue === nextValue ? total + Number(currentValue) : total;
    }, 0);
