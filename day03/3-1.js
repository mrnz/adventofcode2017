'use strict';
module.exports = data => {

    // (di, dj) is a vector - direction in which we move right now
    let di = 1;
    let dj = 0;

    // length of current segment
    let segmentLength = 1;

    // current position (i, j) and how much of current segment we passed
    let i = 0;
    let j = 0;
    let segmentPassed = 0;
    let result;

    if (data < 2) {
        return 0;
    }
    for (let k = 1; k < data; ++k) {

        // make a step, add 'direction' vector (di, dj) to current position (i, j)
        i += di;
        j += dj;
        ++segmentPassed;
        result = [i, j];

        if (segmentPassed === segmentLength) {

            // done with current segment
            segmentPassed = 0;

            // 'rotate' directions
            // 'rotate" directions
            const buffer = di;

            di = -dj;
            dj = buffer;

            // increase segment length if necessary
            if (dj === 0) {
                ++segmentLength;
            }
        }
    }

    return Math.abs(result[0]) + Math.abs(result[1]);
};
