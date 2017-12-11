'use strict';
module.exports = data => data
    .trim()
    .split('\n')
    .reduce((total, currentValue) => {

        const { min, max } = currentValue.split('\t').reduce((all, curVal) => ({
            min: Math.min(curVal, all.min),
            max: Math.max(curVal, all.max)
        }), { min: Infinity, max: -Infinity });

        return total + max - min;

    }, 0);
