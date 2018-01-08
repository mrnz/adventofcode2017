'use strict';
module.exports = {
    init: step => {
        const input = Number(step),
            buffer = [0];
        let index = 0;

        for (let i = 0; i <= 2017; i++) {
            index = (index + input) % (i + 1);
            buffer.splice(++index, 0, i + 1);
        }

        return buffer[buffer.indexOf(2017) + 1];
    },
    init2: (step, iteration) => {
        const input = Number(step);
        let index = 0,
            result;

        for (let i = 0; i <= iteration; i++) {
            index = (index + input + 1) % (i + 1);
            if (index === 0) {
                result = i + 1;
            }
        }
        return result;

    }
};
