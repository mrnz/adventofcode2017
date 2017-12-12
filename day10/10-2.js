'use strict';

const day10 = module.exports = data => {

    function getHash(list, ins, i, skip) {
        const l = list.length;

        ins.forEach(v => {
            [...Array(v).keys()]
                .map((o, k) => list[(k + i) % l])
                .reverse()
                .forEach((val, k) => (list[(k + i) % l] = val));

            i += v + skip;
            skip++;
        });

        return [list, i, skip];
    }

    function init(input) {
        let skip = 0,
            i = 0,
            list = [...Array(256).keys()];

        input = input.trim().split('').map(v => v.charCodeAt(0)).concat([17, 31, 73, 47, 23]);

        for (let k = 0; k < 64; ++k) {
            [list, i, skip] = getHash(list, input, i, skip);
        }
        const dense = [];

        let j = 0;

        while (j < list.length) {
            dense.push(list.slice(j, j + 16).reduce((xor, cur) => xor ^ cur));
            j += 16;
        }

        return dense.map(n => (`00${n.toString(16)}`).substr(-2)).join('');
    }

    return init(data);
};
