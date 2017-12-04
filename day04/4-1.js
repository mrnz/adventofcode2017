'use strict';
module.exports = data => {

    const validate = (input) => {

        return input.trim()
            .split(' ')
            .reduce( (total, currantValue, currantIndex, arr) => {

                arr.forEach( (value, idx) => {
                    total = (currantValue === value && currantIndex !== idx) ? false : total;
                });

            return total;

        }, true);

    };

    return data.trim()
        .split('\n')
        .reduce((total, pass)=> total += validate(pass) ? 1 : 0 ,0);

};
