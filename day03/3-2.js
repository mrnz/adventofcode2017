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
    const result = [];

    result['0x0'] = 1;
    let res = 1;

    while (res <= data) {

        // make a step, add "direction" vector (di, dj) to current position (i, j)
        i += di;
        j += dj;
        ++segmentPassed;

        result[`${i}x${j}`] = 0;

        result[`${i}x${j}`] += result[`${i + 1}x${j + 1}`] ? result[`${i + 1}x${j + 1}`] : 0;
        result[`${i}x${j}`] += result[`${i + 1}x${j - 1}`] ? result[`${i + 1}x${j - 1}`] : 0;
        result[`${i}x${j}`] += result[`${i + 1}x${j}`] ? result[`${i + 1}x${j}`] : 0;
        result[`${i}x${j}`] += result[`${i - 1}x${j + 1}`] ? result[`${i - 1}x${j + 1}`] : 0;

        result[`${i}x${j}`] += result[`${i - 1}x${j - 1}`] ? result[`${i - 1}x${j - 1}`] : 0;
        result[`${i}x${j}`] += result[`${i - 1}x${j}`] ? result[`${i - 1}x${j}`] : 0;
        result[`${i}x${j}`] += result[`${i}x${j + 1}`] ? result[`${i}x${j + 1}`] : 0;
        result[`${i}x${j}`] += result[`${i}x${j - 1}`] ? result[`${i}x${j - 1}`] : 0;

        res = result[`${i}x${j}`];

        if (segmentPassed === segmentLength) {

            // done with current segment
            segmentPassed = 0;

            // "rotate" directions
            const buffer = di;

            di = -dj;
            dj = buffer;

            // increase segment length if necessary
            if (dj === 0) {
                ++segmentLength;
            }
        }
    }

    return res;
};
