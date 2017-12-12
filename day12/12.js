'use strict';
const day12 = module.exports = {

    prepareData: data => {
        const map = new Map();

        data.trim().split('\n').forEach(x => {
            x = x.split('<->');
            map.set(Number(x[0]), x[1].split(',').map(y => Number(y)));
        });
        return map;
    },

    findGroup: (map, initialValue) => {
        const result = [],
            queue = [initialValue];

        while (queue.length) {
            const seachingNumber = queue.shift();

            result.push(seachingNumber);
            if (typeof map.get(seachingNumber) !== 'undefined') {
                map.get(seachingNumber).forEach(numb => {
                    if (numb !== seachingNumber && result.indexOf(numb) === -1 && queue.indexOf(numb) === -1) {
                        queue.push(numb);
                    }
                });
            }
        }
        return result;
    },

    day12part1: data => day12.findGroup(day12.prepareData(data), 0).length,

    day12part2: data => {
        const map = day12.prepareData(data);
        let group = day12.findGroup(map, map.keys().next().value),
            groupsAmount = 0;

        while (map.size) {
            groupsAmount++;
            group.forEach(x => map.delete(x));
            group = day12.findGroup(map, map.keys().next().value);
        }
        return groupsAmount;
    }
};
