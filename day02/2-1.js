'use strict';
module.exports = data => data
    .trim()
    .split('\n')
    .reduce((total, currentValue) => {

        const row = currentValue.split('\t').reduce((all, curVal) => {

            all[0] = all[0] ? Math.min(parseInt(curVal, 10), all[0]) : parseInt(curVal, 10);
            all[1] = all[1] ? Math.max(parseInt(curVal, 10), all[1]) : parseInt(curVal, 10);

            return all;

        }, []);

        return total + row[1] - row[0];

    }, 0);
