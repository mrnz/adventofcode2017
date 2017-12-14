'use strict';
module.exports = data => {

    let delay = 0;
    const map = data.trim()
        .split('\n')
        .map(x => x.split(': ').map(Number));

    const check = (mapa, del) => mapa.reduce((prev, curr) => {
        if ((curr[0] + del) % (2 * (curr[1] - 1)) === 0) {
            prev = true;
        }
        return prev;
    }, false);

    while (check(map, delay) === true) {
        delay++;
    }

    return delay;

};
