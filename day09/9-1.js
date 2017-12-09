'use strict';
module.exports = data => {
    let groupStarted = 0,
        garbageStarted = false,
        counter = 0,
        anihilator = false;

    data.split('')
        .forEach(char => {

            if ((!anihilator && char === '!') || anihilator) {
                anihilator = !anihilator;
                return;
            }

            if (char === '<') {
                garbageStarted = true;
            } else if (char === '>') {
                garbageStarted = false;
            } else if (char === '{' && !garbageStarted) {
                groupStarted++;
            } else if (char === '}' && !garbageStarted) {
                counter += groupStarted--;
            }

        });

    return counter;

};
