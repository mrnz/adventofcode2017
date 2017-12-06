'use strict';
module.exports = data => data.trim()
    .split('\n')
    .reduce((total, currentValue) => {
        let rowResultArr;

        currentValue.split('\t')
            .forEach((curVal, index, rowArr) => {

                rowArr.forEach(val => {
                    if (Number(val) % Number(curVal) === 0 && val !== curVal) {
                        rowResultArr = Number(val) / Number(curVal);
                    }
                });

            });

        return total + rowResultArr;

    }, 0);
