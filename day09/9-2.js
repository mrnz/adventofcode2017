'use strict';
module.exports = data => {
    let garbageStarted = false,
        counter = 0,
        anihilator = false;

    data.split('')
        .forEach(char => {

            if ((!anihilator && char === '!') || anihilator) {
                anihilator = !anihilator;
                return;
            }

            if (char === '<' && !garbageStarted) {
                garbageStarted = true;
                return;
            } else if (char === '>') {
                garbageStarted = false;
                return;
            } else if (!garbageStarted) {
                return;
            }
            counter++;

        });

    return counter;

};
