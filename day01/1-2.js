'use strict';
module.exports = data => data
    .trim()
    .split('')
    .reduce((total, currentValue, currentIndex, arr) => {
        const half = arr.length / 2;
        const nextIndex = arr[currentIndex + half] ? currentIndex + half : Math.abs(half - currentIndex);
        const nextValue = arr[nextIndex];

        return currentValue === nextValue ? total + parseInt(currentValue, 10) : total;
    }, 0);
