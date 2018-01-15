'use strict';
const day20 = module.exports = {
    prepareInput: input => input.trim()
        .split('\n')
        .map(x => x
            .match(/(\+|-)?\d+/g)
            .map(Number)
        ),

    findDuplicats: xs => {
        const seen = {},
            dup = new Set();

        xs.forEach(x => {
            if (!seen[x[9]]) {
                seen[x[9]] = true;
            } else {
                dup.add(x[9]);
            }
        });

        return Array.from(dup);
    },

    part1: input => day20.prepareInput(input)
        .map(item => ({
            a: Math.abs(item[6]) + Math.abs(item[7]) + Math.abs(item[8]),
            v: Math.abs(item[3]) + Math.abs(item[4]) + Math.abs(item[5])
        })).reduce((prev, curr, index) => {
            if (prev.a > curr.a || (prev.a === curr.a && prev.v > curr.v)) {
                prev = curr;
                prev.idx = index;
            }
            return prev;
        }, { a: Infinity, v: Infinity, idx: 0 }).idx,

    part2: input => {
        let k = 39,
            map = day20.prepareInput(input),
            dup;

        while (k !== 0) {
            map.forEach(item => {
                for (let i = 1; i >= 0; i--) {
                    for (let j = 0; j <= 2; j++) {
                        item[3 * i + j] += item[3 * (i + 1) + j];
                        item[9] = `${item[0]}${item[1]}${item[2]}`;
                    }
                }
            });

            dup = day20.findDuplicats(map);
            map = map.filter(item => dup.indexOf(item[9]) === -1);
            k--;
        }

        return map.length;
    }
};
