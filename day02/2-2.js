'use strict';
module.exports = data => data.trim()
    .split('\n')
    .reduce((total, currentValue) => {
        let rowResultArr;

        currentValue.split('\t')
            .forEach((curVal, index, rowArr) => {

                rowArr.forEach(val => {
                    if (val % curVal === 0 && val !== curVal) {
                        rowResultArr = val / curVal;
                    }
                });

            });

        return total + rowResultArr;

    }, 0);
