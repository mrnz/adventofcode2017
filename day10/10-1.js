'use strict';
module.exports = data => {
    let position = 0,
        skipSize = 0,
        map = Array(256).fill('').map((x, i) => i);

    const lengths = data.split(',').map(Number);

    while (typeof lengths[skipSize] !== 'undefined') {
        const thisLength = lengths[skipSize],
            startIdx = position,
            endIdx = (position + thisLength) % map.length;

        let secondSlice, lenght2, temp;

        if (startIdx > endIdx && thisLength !== 0) {
            secondSlice = map.slice(endIdx, startIdx);
            lenght2 = map.slice(startIdx).length;
            temp = [...map.slice(startIdx), ...map.slice(0, endIdx)].reverse();
            map = [...temp.slice(lenght2), ...secondSlice, ...temp.slice(0, lenght2)];
        } else if (startIdx === endIdx && thisLength !== 0) {
            lenght2 = map.slice(startIdx).length;
            temp = [...map.slice(startIdx), ...map.slice(0, endIdx)].reverse();
            map = [...temp.slice(lenght2).reverse(), ...temp.slice(0, lenght2)];
        } else if (thisLength !== 0) {
            map = [...map.slice(0, startIdx), ...map.slice(startIdx, endIdx).reverse(), ...map.slice(endIdx)];
        }

        position = (position + thisLength + skipSize) % map.length;
        skipSize++;

    }
    return map[0] * map[1];
};