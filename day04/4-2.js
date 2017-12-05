'use strict';
module.exports = data => {

    const validate = input => input
        .trim()
        .split(' ')
        .reduce((total, currantValue, currantIndex, arr) => {
            arr.forEach((value, idx) => {
                if (currantIndex !== idx && currantValue.length === value.length) {
                    if (currantValue.split('').sort().join('') === value.split('').sort().join('')) {
                        total = false;
                    }
                }
                return total;
            });

            return total;

        }, true);

    return data.trim()
        .split('\n')
        .reduce((total, pass) => (total += validate(pass) ? 1 : 0), 0);

};
