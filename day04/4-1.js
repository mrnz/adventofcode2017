'use strict';
module.exports = data => {

    data = data.trim().split('\n')

    const validate = (input) => {

        const validation_result = input
            .trim()
            .split(' ')
            .reduce( (total, currantValue, currantIndex, arr) => {

                arr.forEach( (value, idx) => {
                    total = (currantValue === value && currantIndex !== idx) ? false : total;
                });

            return total;

        }, true);

        return validation_result
    };

    return data.reduce((total, pass)=> total += validate(pass) ? 1 : 0 ,0);

};
