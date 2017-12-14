'use strict';
module.exports = data => data
    .trim()
    .split('\n')
    .map(x => x.split(': ').map(Number))
    .reduce((prev, curr) => {
        if (curr[0] % (2 * (curr[1] - 1)) === 0) {
            prev += curr[0] * curr[1];
        }
        return prev;
    }, 0);
