'use strict';
module.exports = data => data.trim()
    .split('\n')
    .reduce((total, currentValue) => {
        const rowResultArr = [];

        currentValue.split('\t')
            .forEach((curVal, index, rowArr) => {

                rowArr.forEach(val => {
                    if (parseInt(val, 10) % parseInt(curVal, 10) === 0 && val !== curVal) {
                        rowResultArr.push(val, curVal);
                    }
                });

            });

        return total + parseInt(rowResultArr[0], 10) / parseInt(rowResultArr[1], 10);

    }, 0);
